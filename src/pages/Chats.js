import { Paper } from "@mui/material"
import ChatList from "../components/ChatList"
import ControlPanel from "../components/ControlPanel"
import MessageList from "../components/MessageList"

const Chats = () => {
    return (
        <div className='workPlace'>
            <div className='chatList'>
                <ChatList />
            </div>
            <div className='chatItem'>
                <Paper elevation={1}>
                    <MessageList />
                    <ControlPanel />
                </Paper>
            </div>
        </div>
    )
}
export default Chats