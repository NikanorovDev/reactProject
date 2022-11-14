// import './App.scss';
import React from 'react';
import { List, ListItem } from '@mui/material';
// import { Fab } from '@mui/material';
// import { Send } from '@mui/icons-material';
// import { useTheme } from '@emotion/react';
// import MessageList from './components/MessageList';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import Chats from './Chats';
import NotFound from './NotFound';
import { grey } from "@mui/material/colors";
import Gists from './Gists';
import Registration from './Registration';
import Login from './Login';
import RequireAuth from '../hocs/RequireAuth';



// export const MyThemeContext = React.createContext({ theme: 'dark' })
// export const DataContext = React.createContext({ message: ['hello', 'how have you been?'] })
// export const LocalizationContext = React.createContext('')

const Routers = () => {
    return (
        <React.Fragment>

            {/* <LocalizationContext.Provider value={'en'}>
    
            <DataContext.Provider value={{ message: 'Vania!' }}>
    
              <MyThemeContext.Provider value={{ theme: 'dark' }}> */}

            <header className='App-header'>
                <List sx={{
                    width: '100%',
                    bgcolor: grey,
                    maxWidth: 350,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <ListItem>
                        <Link to='/' className='link' >Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/profile' className='link'>Profile</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/chats' className='link' >Chats</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/gists' className='link' >Gists</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/registration' className='link' >Reg</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/login' className='link' >Войти</Link>
                    </ListItem>
                </List>

                <div className='chatList'></div>

                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/login' exact element={<Login />} />
                    <Route path='/registration' exact element={<Registration />} />
                    <Route element={<RequireAuth />}>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/gists' element={<Gists />} />
                        <Route path='/chats/:chatId' element={
                            <Chats />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </header >

            {/* </MyThemeContext.Provider>
    
            </DataContext.Provider >
    
          </LocalizationContext.Provider > */}

        </React.Fragment >
    );
}

export default Routers