import React, { useState } from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logout from '../Auth/Logout/Logout';
import Button from '@mui/material/Button';
import axios from 'axios';
import { courseActions } from '../../store/slice/course-slice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const userToken = useSelector(state => state.auth.userToken)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchForCourse()
        }
    };
    const searchForCourse = async () => {
        try {
            const query = search.trim().toLowerCase();

            const res = await axios.get(`http://localhost:4000/course/search-courses?query=${query}`)
            const courses = res.data
            dispatch(courseActions.addCourse(courses))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='header'>
            <div className='header__Container'>
                <div className='header__Left'>
                    <div class="search-form">
                        <input value={search} onChange={handleSearch} onKeyPress={handleEnterKeyPress}
                            className='search-form-input' type="text" name="search_box" required placeholder="Search..." maxlength="100" />
                        <SearchOutlinedIcon sx={{ color: 'gray', size: '5px' }} className='search-icon' />
                    </div>

                </div>
                <div className='hedaer__Right'>
                    <div style={{ display: 'flex', alignItems: 'center' }} className='header__Links'>
                        <div className='header__singleLink'>
                            <NavLink className='header_navLink' to='/'><p className='header__singleLinkText'>ALL COURSE</p></NavLink>
                        </div>

                        {userToken && <div className='header__singleLink'>
                            <NavLink className='header_navLink' to='/student-dashboard'><p className='header__singleLinkText'>MY DASHBOARD</p></NavLink>
                        </div>}


                        <div className='header__icons'>
                            {
                                userToken ? (
                                    <>
                                        <div >

                                            <Logout />

                                        </div>

                                    </>

                                ) : (
                                    <div >
                                        <Link to='/login'><Button className='authButtons' variant="contained">Login</Button></Link>

                                    </div>
                                )
                            }


                        </div>


                    </div>

                </div>



            </div>

        </div>
    )
}

export default Header