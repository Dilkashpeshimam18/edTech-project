import React, { useState } from 'react'
import './CourseSidebar.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import BasicAccordion from './SidebarAccordion/SidebarAccordion';

const CourseSidebar = () => {
  const initialRowState = () => {
    const value = 5;
    return value;
  }
  const [rowPerPage, setRowPerPage] = useState(initialRowState)
  const handleRowPerPage = (e) => {
    setRowPerPage(e.target.value)
  }

  return (
    <div className='courseSidebar'>
      <h1>All Courses</h1>
      <div className='courseSidebar__container1'>

        <div className='courseSidebar__subContainer1'>
          <FormControl sx={{ marginLeft: "10px" }}>
            <InputLabel id="demo-simple-select-label"> Row</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rowPerPage}
              label="Row"
              onChange={handleRowPerPage}

            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>


            </Select>
          </FormControl>
        </div>
        <div className='courseSidebar__subContainer2'>
          <button className='filter__button'>
            <FilterListRoundedIcon sx={{paddingTop:'10px'}}/>
           <p style={{paddingTop:'15px', marginLeft:'5px'}}>Filter</p> 
          </button>
        </div>
      </div>
      <div className='courseSidebar__container2'>
      <BasicAccordion />
      </div>
    </div>
  )
}

export default CourseSidebar
