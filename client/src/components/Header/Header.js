import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logout from '../Auth/Logout/Logout';
import Button from '@mui/material/Button';

const Header = () => {
    const userToken = useSelector(state => state.auth.userToken)

    return (
        <div className='header'>
            <div className='header__Container'>
                <div className='header__Left'>
                    <form action="search.html" method="post" class="search-form">
                        <input className='search-form-input' type="text" name="search_box" required placeholder="Search courses..." maxlength="100" />
                        <SearchOutlinedIcon sx={{ color: 'gray', size: '5px' }} className='search-icon' />
                    </form>

                </div>
                <div className='hedaer__Right'>
                    <div style={{ display: 'flex', alignItems: 'center' }} className='header__Links'>
                        <div className='header__singleLink'>
                            <NavLink className='header_navLink' to='/'><p className='header__singleLinkText'>HOME</p></NavLink>
                        </div>

                        {userToken && <div className='header__singleLink'>
                            <NavLink className='header_navLink' to='/store'><p className='header__singleLinkText'>DASHBOARD</p></NavLink>
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
                                        <Link to='/login'><Button variant="contained">Login</Button></Link>

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