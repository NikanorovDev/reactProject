// import { async } from "@firebase/util"
import { Button, TextField } from "@mui/material"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
// import firebase from "../services/firebase"
import { useLocation, useNavigate } from "react-router-dom"
import useAuth from '../hooks/AuthProvider';
import { toast, ToastContainer } from "react-toastify"


const Login = () => {
    let navigate = useNavigate()
    let location = useLocation()
    const auth = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    let from = location.state?.from?.pathname || '/'
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handelSubmit = async (event) => {
        event.preventDefault()
        setError('')

        try {
            await auth.signin({ email, password }, () => {
                setTimeout(() => navigate(from, { replace: true }), 2000);
            });
            toast.success('Логин введен успешно')
        } catch (e) {
            setError(e)
            console.error(e);
        }
    }

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handelSubmit}>
                <h1>Логин</h1>
                <p>Введите почту и пароль для авторизации</p>
                <div className="email-field">
                    <TextField
                        value={email}
                        type='email'
                        name="email"
                        onChange={handleEmail}
                        placeholder={'Введите Email'}
                        fullWidth
                    />
                </div>
                <div className="password-field ">
                    <TextField
                        value={password}
                        type='password'
                        name="password"
                        onChange={handlePassword}
                        placeholder={'Введите пароль'}
                        fullWidth
                    />
                </div>
                {error && <div>{error}</div>}
                <Button variant="outlined" type="submit">Войти</Button>
            </form >
        </div >
    )
}
export default Login
