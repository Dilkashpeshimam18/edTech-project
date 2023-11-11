import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './EnrolledCourse.css'
import { useSelector } from 'react-redux';

const EnrolledCourse = () => {
    const enrolledCourse = useSelector((state) => state.course.enrolledCourse)

    return (
        <div className='productItems'>
            {
                enrolledCourse && enrolledCourse.map((course) => {
                    return (
                        <Link style={{ textDecoration: 'none' }} to={`/course-detail/${course.id}`}>

                            <div className='product'>
                                <img src={course?.thumbnail} className='product__img' alt='' />
                                <div className='product__container'>
                                    <div className='product__body'>

                                        <span style={{ marginTop: '10px' }}>{course?.name}</span>
                                        <span style={{ paddingTop: "5px" }} >{course?.instructor}</span>

                                    </div>
                                    <div >

                                    </div>

                                </div>

                            </div>
                        </Link>
                    )
                })
            }


        </div>
    )
}

export default EnrolledCourse
