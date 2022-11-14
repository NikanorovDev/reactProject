import { useTheme } from "@emotion/react"
import { Send } from "@mui/icons-material"
import { Fab, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addMessageWithFB } from "../store/middleware"




const ControlPanel = () => {

    const [value, setValue] = useState('')
    const theme = useTheme()
    const { chatId } = useParams()
    const { name } = useSelector(state => state.profile)
    const allMessages = useSelector(state => state.messages.messageList)
    const dispatch = useDispatch()
    const messages = allMessages?.[chatId]


    const handleInput = (event) => {
        setValue(event.target.value)
    }

    const handlerButton = (event) => {
        if (value !== '') {
            const message = {
                text: value,
                author: name
            }
            // addMessageWithSaga
            dispatch(addMessageWithFB(chatsId, message))
            // dispatch(addMessageWithThunk(chatId, message))
            setValue('')
        }
    }


    const handlerKeyDown = (event) => {
        if (event.key === 'Enter') {
            handlerButton()
        }
    }



    return (
        <div className='controlPlace'>
            <TextField
                style={{ margin: '20px' }}
                id='outlined-basic'
                label='Send Your Message'
                variant='outlined'
                className='input'
                placeholder='Say Hello Bot Stepan!'
                type={'text'}
                value={value}
                onChange={handleInput}
                autoFocus={true}
            />

            <Fab color='primary'
                className='button'
                type={'button'}
                onClick={handlerButton}
                onKeyDown={handlerKeyDown}
                style={{
                    borderColor: theme.palette.sec
                }}>
                <Send />
            </Fab>
        </div>
    )
}

export default ControlPanel