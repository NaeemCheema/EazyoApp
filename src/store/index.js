import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

const middlewares = [];

if(__DEV__){
    middlewares.push(createLogger());
}

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(...middlewares, ReduxThunk)
    )
)

export default store;