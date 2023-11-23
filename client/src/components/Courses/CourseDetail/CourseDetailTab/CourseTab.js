import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CourseAccordion from '../CourseAccordion/CourseAccordion';
import { useSelector } from 'react-redux';
import CourseDetailReview from '../CourseReviews/CourseReview';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const courseDetail = useSelector((state) => state.course.courseDetail)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        // <Box sx={{ width: '100%' }}>
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', maxWidth: '1050px' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab label="Course Content" {...a11yProps(0)} />
                    <Tab label="Prerequisite" {...a11yProps(1)} />
                    <Tab label="Reviews" {...a11yProps(2)} />

                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <CourseAccordion />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ul>
                    {courseDetail?.prerequisites?.map((prerequisite, index) => (
                        <li key={index}>{prerequisite}</li>
                    ))}
                </ul>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                 <CourseDetailReview />
            </CustomTabPanel>

        </>

        // </Box>
    );
}
