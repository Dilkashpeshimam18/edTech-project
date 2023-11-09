import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CourseAccordion.css';
import { useSelector } from 'react-redux';

export default function CourseAccordion() {
    const courseDetail = useSelector((state) => state.course.courseDetail)

    return (
        <div className='courseAccordion'>
            {courseDetail?.syllabus?.map((course) => {
                return (
                    <>
                        <Accordion sx={{ margin: '15px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{course?.topic}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {course?.content}

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </>
                )
            })}

        </div>
    );
}
