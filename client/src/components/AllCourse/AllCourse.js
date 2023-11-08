import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AllCourse = () => {
    const [courses, setCourses] = useState([])
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(0)

    const initialRowState = () => {
        const value = 5;
        return value;
    }
    const [rowPerPage, setRowPerPage] = useState(initialRowState)
    const handleRowPerPage = (e) => {
        setRowPerPage(e.target.value)
    }

    // const getCourses = async () => {
    //     try {

    //         const response = await axios.get(`http://localhost:4000/course/get-allCourses?page=${pageNumber}&rowPerPage=${rowPerPage}`)

    //         const course = response.data.allCourse
    //         setCourses(course)

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
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
            setLastPage(res.data.totalPages)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        handlePageChanged()

    }, [rowPerPage])

    // useEffect(() => {

    //     getCourses()

    // }, [])
    return (
        <div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rowPerPage}
                label="Row"
                onChange={handleRowPerPage}

            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>


            </Select>

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

            <div style={{ display: 'flex', alignItems: 'center', marginTop: "20px", justifyContent: 'center' }}>
                <Pagination count={lastPage} page={page} onChange={handlePageChanged} variant="outlined"
                />

            </div>

        </div>
    )
}

export default AllCourse
