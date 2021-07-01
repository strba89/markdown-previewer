import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import textReducer from './text/reducer';
import resizeReducer from "./resize/reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['text']
};

const rootReducer = combineReducers({
    text: textReducer,
    resizeReducer
});

export default persistReducer(persistConfig, rootReducer);