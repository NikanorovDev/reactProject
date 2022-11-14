import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import chatsReduser from './chats/reduser';
import messagesReduser from './messages/reduser';
// import middleware from './middleware';
import profileReduser from './profile/reducer';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga'
// import mySaga from './sagas';
// import middleware from './middleware'
import storage from 'redux-persist/lib/storage'
import { persistStore } from 'redux-persist'
import persistReduser from 'redux-persist/es/persistReducer';
import gistsReduser from './gists/reduser';



const redusers = combineReducers({
    chats: chatsReduser,
    messages: messagesReduser,
    profile: profileReduser,
    gists: gistsReduser

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage
}

const persistedReduser = persistReduser(persistConfig, redusers)


const store = createStore(
    persistedReduser,
    composeEnhancers(applyMiddleware(thunk))

)

// sagaMiddleware.run(mySaga)
export const persistor = persistStore(store)

export default store





