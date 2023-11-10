import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './SidebarAccordion.css'
import { useDispatch, useSelector } from 'react-redux';
import { courseActions } from '../../../../store/slice/course-slice';

export default function BasicAccordion() {

  const allCourses = useSelector((state) => state.course.allCourses)
  const dispatch = useDispatch()

  const handleOpenChange = () => {

    const filter = allCourses.filter((course) => course.enrollmentStatus === 'Open');
    dispatch(courseActions.addCourse(filter));
  };

  const handleClosedChange = () => {

    const filter = allCourses.filter((course) => course.enrollmentStatus === 'Closed');
    dispatch(courseActions.addCourse(filter));
  };

  const handleOnlineChange = () => {

    const filter = allCourses.filter((course) => course.location === 'Online');
    dispatch(courseActions.addCourse(filter));
  };

  const handleInPersonChange = () => {

    const filter = allCourses.filter((course) => course.location === 'In-Person');
    dispatch(courseActions.addCourse(filter));
  };
  return (
    <div className='sidebarAccordion'>
      <Accordion sx={{ margin: '15px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Enrollment Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li onClick={handleOpenChange} style={{ cursor: 'pointer' }}>Open</li>
            <li onClick={handleClosedChange} style={{ cursor: 'pointer' }}>Closed</li>

          </ul>

        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ margin: '15px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li onClick={handleOnlineChange} style={{ cursor: 'pointer' }}>Online</li>
            <li onClick={handleInPersonChange} style={{ cursor: 'pointer' }}>In-Person</li>

          </ul>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}
