import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AllCourse = () => {
    const [courses, setCourses] = useState([])

    const getCourses = async () => {
        try {

            const response = await axios.get('http://localhost:4000/course/get-allCourses')

            const course = response.data.allCourse
            setCourses(course)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

        getCourses()

    }, [])
    return (
        <div>
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <Link to={`course-detail/${course.id}`}>
                            <h3>Course name:{course.name}</h3>
                        </Link>
                        <span>{course.description}</span>
                        <p>Instructor:{course.instructor}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default AllCourse
