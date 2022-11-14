import { addMessage, ADD_MESSAGE, updateMessages } from "./messages/actions"
import { AUTHORS } from "../constants/common"
import { async } from "@firebase/util"
import { getDatabase, ref, push, set, remove, onValue } from 'firebase/database';
import firebase from "../services/firebase";
import { chatListUpdata } from "./chats/actions";



const middleware = store => next => action => {

    if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTHORS.bot) {
        const botMessage = {
            author: AUTHORS.bot,
            text: 'Сообщение от Бота из MiddleWare'
        }
        setTimeout(() => {
            store.dispatch(addMessage(action.payload.chatId, botMessage))
        }, 1500)

    }

    return next(action)
}

export const addChatListWithFB = (name) => async () => {
    const db = getDatabase(firebase)
    const chatReF = ref(db, '/chats')
    const newChatRef = push(chatReF)
    set(newChatRef, { name: name }).then(res => {
        console.log(res);
    })
}

export const deleteChatListWithFB = (id) => async () => {
    const db = getDatabase(firebase)
    const chatReF = ref(db, `/chats/${id}`)
    const messagesRef = ref(db, `/messages/${id}`)
    // const newChatRef = push(chatReF)
    remove(chatReF).then(res => {
        console.log('Чат удален', res)
    })
    remove(messagesRef).then(res => {
        console.log('Сообщения удалены', res)
    })

}

export const initTrackerWithFb = () => async (dispatch) => {
    const db = getDatabase(firebase)
    const chatReF = ref(db, `/chats`)
    onValue(chatReF, (snapshot) => {
        const data = snapshot.val()
        const chatIds = Object.keys(data)
        const chatArr = chatIds.map(item => ({ id: item, name: data[item].name }))
        dispatch(chatListUpdata(chatArr))
    })
}


export const getMessagesByChatIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebase)
    const msgRef = ref(db, `messages/${chatId}`)
    onValue(msgRef, (snapshot) => {
        const data = snapshot.val()
        const msg = data && Object.values(data)
        if (msg?.length > 0) {
            dispatch(updateMessages(chatId, msg))
        }
    })

}

export const addMessageWithFB = (chatId, message) => async () => {
    const db = getDatabase(firebase)
    const messagesRef = ref(db, `/messages/${chatId}`)
    const newMessageRef = push(messagesRef)
    set(newMessageRef, message).then((res) => {
        console.log('Сообщения добавлены', res)
    })
}

export default middleware