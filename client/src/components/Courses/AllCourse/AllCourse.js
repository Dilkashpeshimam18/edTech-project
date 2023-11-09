import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import { useSelector } from 'react-redux';
import './AllCourse.css'
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { courseActions } from '../../../store/slice/course-slice';

const AllCourse = () => {
    const [courses, setCourses] = useState([])
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(0)
    const rowPerPage = useSelector((state) => state.course.rowPerPage)
    const allCourse = useSelector((state) => state.course.courses)
    const dispatch = useDispatch()

    const handlePageChanged = async (event, value) => {
        try {
            let pageNumber;
            if (value == undefined) {
                pageNumber = 1
                setPage(pageNumber)

            } else {
                pageNumber = value
                setPage(pageNumber)

            }

            const res = await axios.get(`http://localhost:4000/course/get-allCourses?page=${pageNumber}&rowPerPage=${rowPerPage}`)
            const course = res.data.courses
            setCourses(course)
            dispatch(courseActions.addCourse(course))
            setLastPage(res.data.totalPages)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        handlePageChanged()

    }, [rowPerPage])

    return (
        <div className='allCourse'>

            {allCourse?.map((course) => {
                return (
                    <>
                        <div className='courseList' key={course.id}>
                            <div>
                                <img style={{ width: '230px', height: '135px' }} src={course?.thumbnail} />
                            </div>
                            <div style={{ marginLeft: '10px' }}>
                                <Link to={`course-detail/${course.id}`}>
                                    <h3>{course.name}</h3>
                                </Link>
                                <span>{course.description}</span>
                                <p>Instructor:{course.instructor}</p>
                            </div>

                        </div>
                        <Divider sx={{
                            margin: '10px', width: '100%',
                            maxWidth: 760,
                            bgcolor: 'background.paper',
                        }} />

                    </>

                )
            })}

            <div style={{ display: 'flex', alignItems: 'center', marginTop: "20px", justifyContent: 'center' }}>
                <Pagination count={lastPage} page={page} onChange={handlePageChanged} variant="outlined"
                />

            </div>

        </div>
    )
}

export default AllCourse
