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
import { getEnrolledCourse } from '../../../store/slice/course-slice';
import LinearWithValueLabel from '../EnrolledCourse/LinearProgress';

const CourseDetail = () => {
    const { id } = useParams()
    const [course, setCourse] = useState()
    const userToken = useSelector(state => state.auth.userToken)
    const enrolledCourse = useSelector((state) => state.course.enrolledCourse)
    const [isEnrolled, setIsEnrolled] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)
    const [isNotCourse, setIsNotCourse] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getCourseDetail = async () => {
        try {

            const response = await axios.get(`http://localhost:4000/course/get-courseDetail/${id}`)

            const course = response.data.course
            dispatch(courseActions.addCourseDetail(course))
            let courseId = course.id
            const isEnroll = enrolledCourse.find(course => course.id == courseId)

            if (isEnroll) {
                setIsEnrolled(true)
            }


            setCourse(course)

        } catch (err) {
            console.log(err)
            if (err.response.status == 404) {
                setIsNotCourse(true)
            }
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
            dispatch(getEnrolledCourse())
            if (response.status == 200) {
                getCourseDetail()

            }
            getCourseDetail()
        } catch (err) {
            console.log(err)
        }
    }
    const markCourseComplete = async () => {
        try {
            const token = localStorage.getItem('token')

            let reqInstance = await axios.create({
                headers: {
                    Authorization: token
                }
            })

            const response = await reqInstance.put(`http://localhost:4000/course/mark-course-complete/${id}`)


            if (response.status == 200) {
                isCourseComplete()
                dispatch(courseActions.setProgressVal(100))

            }

        } catch (err) {
            console.log(err)
        }
    }
    const isCourseComplete = async () => {
        try {
            const token = localStorage.getItem('token')

            let reqInstance = await axios.create({
                headers: {
                    Authorization: token
                }
            })

            const response = await reqInstance.get(`http://localhost:4000/course/is-courseCompleted/${id}`)

            const isCompleted = response.data.isCompleted
            setIsCompleted(isCompleted)


        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        isCourseComplete()
    }, [])
    useEffect(() => {
        getCourseDetail()
    }, [])


    return (
        <div>
            {
                isNotCourse ? <h1>Course Not Found!</h1> : (
                    <section class="playlist-details">


                        <div class="row">

                            <div class="column">

                                <div class="thumb">
                                    <img src={course?.thumbnail} style={{ marginTop: '20px' }} alt="" />
                                    {isCompleted ? <span> Completed</span> : isEnrolled ? <span>Enrolled</span> : course?.enrollmentStatus === 'Open' ? <span>Open</span> : <span>Closed</span>}


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
                                                {isCompleted ? (
                                                    <span>Submitted</span>
                                                ) : isEnrolled ? (
                                                    <span>Due Date: 1 January</span>
                                                ) : course?.enrollmentStatus === 'Open' ? (
                                                    <div style={{ paddingTop: '2px' }}>
                                                        {course?.duration}, {course?.schedule}
                                                    </div>
                                                ) : (
                                                    <div style={{ paddingTop: '2px' }}>
                                                        {course?.duration}, {course?.schedule}
                                                    </div>
                                                )} </p>
                                            <p style={{ display: 'flex' }}>
                                                <div><LocationOnOutlinedIcon /></div>
                                                <div style={{ paddingTop: '2px' }}> {course?.location}</div>
                                            </p>
                                            <p style={{ display: 'flex' }}>
                                                <div><EditNoteOutlinedIcon /></div>
                                                <div style={{ fontSize: '14px', paddingTop: '1px' }}>Created by {course?.instructor}</div>

                                            </p>
                                            {isEnrolled && !isCompleted && (
                                                <p style={{ display: 'flex' }}>
                                                    <LinearWithValueLabel />
                                                </p>
                                            )}

                                        </div>

                                        <div style={{ marginTop: '30px' }}>
                                            {userToken ? (
                                                <Button
                                                    variant="contained"
                                                    sx={{ width: '200px', height: '55px' }}
                                                    onClick={isEnrolled ? markCourseComplete : (course?.enrollmentStatus === 'Open' ? enrollInCourse : undefined)}
                                                >
                                                    {isCompleted ? 'Course Completed' : isEnrolled ? ' Mark as Complete' : course?.enrollmentStatus === 'Open' ? 'Enroll now' : 'Enrollment Closed'}
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
                )
            }



        </div >
    )
}

export default CourseDetail
