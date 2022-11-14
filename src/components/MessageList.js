import PropTypes from "prop-types"
import { AUTHORS } from "../constants/common";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AndroidIcon from '@mui/icons-material/Android';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getMessagesByChatIdWithFB } from "../store/middleware";


const MessageList = () => {

    const allMessages = useSelector(state => state.messages.messageList)
    const { chatId } = useParams()
    const messages = allMessages[chatId]
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getMessagesByChatIdWithFB(chatId))
    }, [chatId])

    return (
        <div className='messanger'>

            <List sx={{ width: '100%', bgcolor: grey, maxWidth: 350 }}>

                {messages?.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemAvatar>
                            <Avatar>
                                {item.author !== AUTHORS.bot ? <AccountCircleIcon /> : <AndroidIcon />}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.text} secondary={item.author} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({

            text: PropTypes.string,
            author: PropTypes.string

        }))
}


export default MessageList
