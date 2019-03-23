import React from 'react';
import { 
    View,
    TextInput, 
    TouchableOpacity,
    Keyboard,
    StyleSheet
} from 'react-native';

// functional components only render props
const Box = ({ value, key }) => (
    <View key={key} style={!!value ? styles.fillBoxStyle: styles.boxStyle} />
);

export default class PinCode extends React.Component {

    static defaultProps = {
        keyboardType: 'default',
        type: 'easeInEaseOut',
        length: 4,
        onFulFill: () => {},
        onChangeText: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            codeArr: new Array(props.length).fill('')
        };
    }

    componentDidMount() {
        this.props.hasRef && this.props.hasRef(this);
    }

    clearCode = () => {
        this.setState({ code: '' });
    }

    onChangeText = value => {
        this.setState({ code: value }, () => {
            this.props.onChangeText(value);
            if (value.length === this.props.length) {
                Keyboard.dismiss();
                this.props.onFulFill(this.state.code);
            }
        })
    }

    inputRef = ref => this.input = ref;

    onPress = () => {
        this.input && this.input.focus();
    }

    renderCodeArray() {
        const { codeArr } = this.state;
        const code = this.state.code.split('');
        if (this.props.cuztomize)
            return this.renderCustomize();
        
        return codeArr.map((item, index) => 
            Box({ 
                value: code[index] || item, 
                key: index // key đây
            })
        );
    }

    renderCustomize() {
        const { codeArr } = this.state;
        const code = this.state.code.split('');
        const { renderEmptyComponent, renderValueComponent } = this.props;
        return codeArr.map((item, index) =>  {
            if(code[index])
                return renderValueComponent(code[index])
            return renderEmptyComponent(item)
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.row}>
                    {this.renderCodeArray()}
                </View>
                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={this.props.autoFocus}
                    keyboardType={this.props.keyboardType}
                    style={{ height: 0 }}
                    ref={this.inputRef}
                    maxLength={this.props.length}
                    onChangeText={this.onChangeText}
                    value={this.state.code}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    boxStyle: {
        borderRadius: 30,
        borderWidth: 1, 
        borderColor: '#e3e3e3',
        height: 24,
        width: 24,
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fillBoxStyle:{
        borderRadius: 30,
        borderWidth: 1, 
        borderColor: '#ed6439',
        backgroundColor: '#ed6439',
        height: 24,
        width: 24,
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
    }
})