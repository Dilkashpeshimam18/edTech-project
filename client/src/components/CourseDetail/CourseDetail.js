import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const CourseDetail = () => {
    const { id } = useParams()
    const [course, setCourse] = useState()

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
    useEffect(() => {
        getCourseDetail()
    }, [])


    return (
        <div>
            <h1> CourseDetail</h1>
            <h3>{course?.name}</h3>
            <span>{course?.description}</span>
            <p>Instructor:{course?.instructor}</p>
            <button>Enroll now</button>
        </div>
    )
}

export default CourseDetail
