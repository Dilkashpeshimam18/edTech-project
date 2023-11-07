import React, { useState,useEffect } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/slice/auth-slice';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch=useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const data = {
                email: email,
                password: password,
                returnSecureToken: true
            }
            const response = await axios.post('https://expenso-backend-production.up.railway.app/auth/login', data)

            alert('Login successful!')
         
            const userToken = response.data.data
  

            const userData = {
                token: userToken
            }
            dispatch(authActions.login(userData))

            localStorage.setItem('token', userToken)
            navigate('/')
        } catch (err) {
            console.log(err)
            alert(err.response.data)
        }
    }
   
    return (
        <div className='login'>
            <div className='login__container'>
                <div className='login__subContainer'>
                    <form onSubmit={handleLogin} >

                        <h2>Login</h2>
                        <div className='login__inputContainer'>
                            <h3 className='login__subTitle'>Email</h3>
                            <input className='login__input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='login__inputContainer'>
                            <h3 className='login__subTitle'>Password</h3>
                            <input className='login__input' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='login__button'>LOG IN</button>
                    </form>
                    <div className='login__link'>
                        <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }} to='/sign-up'> <h3 style={{ cursor: 'pointer', fontSize: '13px', textDecoration: 'none' }}>Create new account?</h3></Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login