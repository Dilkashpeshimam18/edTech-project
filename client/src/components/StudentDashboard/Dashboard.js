import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import Divider from '@mui/material/Divider';
import EnrolledCourse from '../Courses/EnrolledCourse/EnrolledCourse';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const enrolledCourse = useSelector((state) => state.course.enrolledCourse)
    const [totalEnrolled, setTotalEnrolled] = useState(0)

    const getUserInfo = async () => {
        try {
            const token = localStorage.getItem('token')

            let reqInstance = await axios.create({
                headers: {
                    Authorization: token
                }
            })
            const response = await reqInstance.get('http://localhost:4000/user/get-userInfo')

            const user = response.data.user

            setName(user.name)
            setEmail(user.email)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUserInfo()
        let total = enrolledCourse.length
        setTotalEnrolled(total)
    }, [])
    return (
        <div>
            <section class="teacher-profile">

                <div class="details">
                    <div class="student">
                        <div class='studentInfo'>
                            <div>
                                <Avatar sx={{ width: 180, height: 180 }}
                                    className='avatar' src="/broken-image.jpg" />
                            </div>
                            <div>

                                <h3>{name} </h3>
                                <span>{email}</span>
                            </div>
                        </div>

                    </div>
                    <div class="flex">
                        <p>Enrolled Courses : <span>{totalEnrolled}</span></p>
                    </div>
                </div>

            </section>
            <h2 style={{ marginLeft: '85px' }}>Enrolled Courses</h2>
            <Divider sx={{
                margin: '10px', width: '100%',
                maxWidth: 2000,
                marginLeft: '25px',
                bgcolor: 'background.paper',
            }} />

            <EnrolledCourse />
        </div>
    )
}

export default Dashboard
