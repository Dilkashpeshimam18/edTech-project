import React from 'react'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../../../store/slice/auth-slice'
import { useDispatch } from 'react-redux'
import './Logout.css'
import Button from '@mui/material/Button';

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(authActions.logout())
        localStorage.removeItem('token')

        navigate('/login')
    }
    return (
        <div className='logout' onClick={handleLogout} >
        <Button variant="contained">Logout</Button></div>
    )
}

export default Logout