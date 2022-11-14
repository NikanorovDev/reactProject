import { async } from "@firebase/util"
import { Button, TextField } from "@mui/material"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import firebase from "../services/firebase"
import { Link } from "react-router-dom"

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [eye, setEye] = useState(false)

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
            const auth = getAuth(firebase)
            await createUserWithEmailAndPassword(auth, email, password)
        } catch {
            setError(error.message)
        }
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <h1>Регистрация пользователя</h1>
                <p>Введите логин и пароль для регистрации</p>
                <div className="email-field">
                    <TextField
                        value={email}
                        type='email'
                        name="email"
                        onChange={handleEmail}
                        placeholder={'Введите Ваш email'}
                        fullWidth
                    />
                </div>
                <div className="password-field ">
                    <TextField
                        value={password}
                        type={eye ? 'text' : 'password'}
                        name="password"
                        onChange={handlePassword}
                        placeholder={'Введите пароль'}
                        fullWidth
                    />
                    <button onClick={() => setEye(!eye)}>Eye</button>
                </div>

                {error && <div>{error}</div>}
                <Button variant="outlined" type="submit">Зарегистрироваться</Button>
                <p>Если у Вас уже есть аккаунт, перейдите по ссылке  <Link to='/login'>Логин</Link></p>
            </form >
        </div >
    )
}

export default Registration