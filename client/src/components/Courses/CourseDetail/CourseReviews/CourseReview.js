import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import './CourseReview.css'
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CourseDetailReview = () => {
    const [allReview, setAllReview] = useState([])
    const [review, setReview] = useState('')
    const [name, setName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const userToken = useSelector(state => state.auth.userToken)

    const { id } = useParams()

    const getAllReview = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/review/get-allReview/${id}`)

            const reviews = response.data.reviews

            setAllReview(reviews)

        } catch (err) {
            console.log(err)
        }

    }
    const handleReview = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('token')

            let reqInstance = await axios.create({
                headers: {
                    Authorization: token
                }
            })

            const data = {
                name,
                email: userEmail,
                review
            }
            const response = await reqInstance.post(`http://localhost:4000/review/post-review/${id}`, data)

            setName('')
            setReview('')
            setUserEmail('')
            alert('Review Added Successfully!')
            getAllReview()

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAllReview()
    }, [])
    return (
        <div className='productDetail__reviewContainer'>
            {allReview.length > 0 ? (
                <h4 style={{ color: '#444444', fontSize: '20px' }}>

                    All Reviews({allReview?.length})
                </h4>

            ) : (
                <h4 style={{ color: '#444444', fontSize: '20px' }}>No reviews yet!</h4>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '35px' }} className='productDetail__singleReview'>

                {allReview.map((review, i) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            <div className='productDetail__userImg'>
                                <Avatar sx={{ width: '50px', height: '50px' }} />

                            </div>
                            <div key={i}>
                                <h5>{review.name}</h5>
                                <p style={{ color: '#444444' }}>{review.review}</p>
                            </div>
                        </div>

                    )
                })}


            </div>


            {
                userToken &&
                <div className='productDetail__reviewFormContainer'>
                    <form onSubmit={handleReview} className='productDetail__reviewForm'>

                        <div className='productDetail__reviewInputContainer'>
                            <p style={{ color: '#444444' }}>Add your review</p>
                            <textarea value={review} onChange={(e) => setReview(e.target.value)} className='productDetail__reviewTextArea' type='text' required />
                        </div>
                        <div className='productDetail__reviewInputContainer'>
                            <p style={{ color: '#444444' }}>Name</p>
                            <input value={name} onChange={(e) => setName(e.target.value)} className='productDetail__reviewInput' type='text' required />
                        </div>
                        <div className='productDetail__reviewInputContainer'>
                            <p style={{ color: '#444444' }}>Email</p>
                            <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className='productDetail__reviewInput' type='email' required />
                        </div>
                        <div className='productDetail__reviewButtonContainer'>
                            <Button variant="contained"
                                sx={{ width: '200px', height: '55px' }} type='submit'>Submit</Button>
                        </div>

                    </form>

                </div>
            }



        </div>
    )
}

export default CourseDetailReview