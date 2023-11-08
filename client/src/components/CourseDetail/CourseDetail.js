import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const CourseDetail = () => {
    const { id } = useParams()
    const [course, setCourse] = useState()
    const userToken = useSelector(state => state.auth.userToken)
    const navigate = useNavigate()

    const getCourseDetail = async () => {
        try {

            const response = await axios.get(`http://localhost:4000/course/get-courseDetail/${id}`)
            console.log('Getting course detail>>', response)

            const course = response.data.course
            setCourse(course)

        } catch (err) {
            console.log(err)
        }
    }

    const enrollInCourse=async()=>{
        try{
            const token = localStorage.getItem('token')

            let reqInstance = await axios.create({
                headers: {
                    Authorization: token
                }
            })

            const response = await reqInstance.put(`http://localhost:4000/course/enroll-inCourse/${id}`)
            console.log(response)
        }catch(err){
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
            <h1> CourseDetail</h1>
            <h3>{course?.name}</h3>
            <span>{course?.description}</span>
            <p>Instructor:{course?.instructor}</p>
            {userToken ? <button onClick={enrollInCourse}>Enroll now</button> : <button onClick={() => navigate('/login')}>Enroll now</button>}

        </div>
    )
}

export default CourseDetail
