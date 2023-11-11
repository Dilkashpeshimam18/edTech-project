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
                        <Link to={`/course-detail/${course.id}`}>

                            <div className='product'>
                                <img src={course?.thumbnail} className='product__img' alt='' />
                                <div className='product__container'>
                                    <div className='product__body'>
                                        <Link style={{ textDecoration: 'none' }} >
                                            <span style={{ marginTop: '10px' }}>{course?.name}</span>  </Link>
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
