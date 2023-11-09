import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './CourseDetail.css'
import Button from '@mui/material/Button';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import BasicTabs from './CourseDetailTab/CourseTab';
import { courseActions } from '../../../store/slice/course-slice';
import { useDispatch } from 'react-redux';

const CourseDetail = () => {
    const { id } = useParams()
    const [course, setCourse] = useState()
    const userToken = useSelector(state => state.auth.userToken)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getCourseDetail = async () => {
        try {

            const response = await axios.get(`http://localhost:4000/course/get-courseDetail/${id}`)
            console.log('Getting course detail>>', response)

            const course = response.data.course
            dispatch(courseActions.addCourseDetail(course))

            setCourse(course)

        } catch (err) {
            console.log(err)
        }
    }

    const enrollInCourse = async () => {
        try {
            const token = localStorage.getItem('token')

            let reqInstance = await axios.create({
                headers: {
                    Authorization: token
                }
            })

            const response = await reqInstance.put(`http://localhost:4000/course/enroll-inCourse/${id}`)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    const getEnrolledCourse = async () => {
        try {
            const token = localStorage.getItem('token')

            let reqInstance = await axios.create({
                headers: {
                    Authorization: token
                }
            })

            const response = await reqInstance.get('http://localhost:4000/course/get-enrolled-course')


        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCourseDetail()
        getEnrolledCourse()
    }, [])


    return (
        <div>
            <section class="playlist-details">


                <div class="row">

                    <div class="column">


                        <div class="thumb">
                            <img src={course?.thumbnail} style={{ marginTop: '20px' }} alt="" />
                            <span>{course?.enrollmentStatus}</span>

                        </div>
                    </div>
                    <div class="column" >


                        <div className='courseDetail__contaioner'>
                            <h3 style={{ fontSize: '3rem', textTransform: 'capitalize', marginBottom: '2px' }}>{course?.name}</h3>
                            <div>
                                <div>
                                    <p style={{
                                        margin: '0px', padding: '0px', padding: '1rem 0',
                                        lineHeight: '2',
                                        fontSize: '1.8rem'
                                    }}>{course?.description}</p>

                                    <p style={{ display: 'flex' }}>
                                        <div ><AvTimerOutlinedIcon /></div>
                                        <div style={{ paddingTop: '2px' }}>{course?.duration}, {course?.schedule} </div> </p>
                                    <p style={{ display: 'flex' }}>
                                        <div><LocationOnOutlinedIcon /></div>
                                        <div style={{ paddingTop: '2px' }}> {course?.location}</div>
                                    </p>
                                    <p style={{ display: 'flex' }}>
                                        <div><EditNoteOutlinedIcon /></div>
                                        <div style={{ fontSize: '14px', paddingTop: '1px' }}>Created by {course?.instructor}</div>

                                    </p>
                                </div>

                                <div style={{ marginTop: '30px' }}>
                                    {userToken ? (
                                        <Button
                                            variant="contained"
                                            sx={{ width: '200px', height: '55px' }}
                                            onClick={course?.enrollmentStatus === 'Open' ? enrollInCourse : undefined}
                                        >
                                            {course?.enrollmentStatus === 'Open' ? 'Enroll now' : 'Enrollment Closed'}
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            sx={{ width: '200px', height: '55px' }}
                                            onClick={() => navigate('/login')}
                                        >
                                            Log in to Enroll
                                        </Button>
                                    )}
                                </div>
                            </div>


                        </div>
                    </div>
                </div >

                <BasicTabs />

            </section >


        </div >
    )
}

export default CourseDetail
