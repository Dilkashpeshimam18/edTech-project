import React from 'react'
import './Courses.css'
import CourseSidebar from './CourseSidebar/CourseSidebar'
import AllCourse from './AllCourse/AllCourse'
const Courses = () => {
    return (
        <div className='courses'>
            <CourseSidebar />
            <AllCourse />
        </div>
    )
}

export default Courses
