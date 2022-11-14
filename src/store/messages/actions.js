import { AUTHORS } from "../../constants/common"
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const ADD_MESSAGE_WITH_SAGA = 'MESSAGES::ADD_MESSAGE_WITH_SAGA'
export const UPDATE_MESSAGES = 'MESSAGES::UPDATE_MESSAGES'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: message
    }
})

export const addMessageWithSaga = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    payload: {
        chatId: chatId,
        message: message
    }
})

export const addMessageWithThunk = (chatId, message) => (dispatch, getState,) => {
    dispatch(addMessage(chatId, message))
    if (message.author !== AUTHORS.bot) {
        const botMessage = {
            author: AUTHORS.bot,
            text: 'Сообщение от Бота из Redux-Thunk'
        }
        setTimeout(() => {
            dispatch(addMessage(chatId, botMessage))
        }, 1500)
    }
}

export const updateMessages = (chatId, messages) => ({
    type: UPDATE_MESSAGES,
    chatId,
    messages
})


