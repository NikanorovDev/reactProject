import { addMessage, ADD_MESSAGE_WITH_SAGA } from "./messages/actions";
import { delay, put, takeLatest } from 'redux-saga/effects';
import { AUTHORS } from "../constants/common";

function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.payload.chatId, action.payload.message))

    if (action.payload.message.author !== AUTHORS.bot) {
        const botMessage = {
            author: AUTHORS.bot,
            text: 'Сообщение от Бота from Saga'
        }
        yield delay(2000)
        yield put(addMessage(action.payload.chatId, botMessage))
    }
}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga)
}

export default mySaga