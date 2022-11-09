import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import ReviewItem from './ReviewItem';

const ServiceDetails = () => {
    const { title, place, price, image, description, _id } = useLoaderData();
    const { user } = useContext(authContext);
    const location = useLocation()
    const [reviews, setReviews] = useState([]);
    const [render, setRender] = useState(false);

    // uploading review by handelReview 
    const handelReview = e => {
        e.preventDefault();
        if (user?.uid) {
            const current = new Date();
            const time = current.getHours() + ':' + current.getMinutes() + ":" + current.getSeconds();
            const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
            const reaction = e.target.review.value;
            const review = {
                serviceId: _id,
                serviceTitle: title,
                serviceiimage: image,
                userAvater: user?.photoURL,
                userEmail: user?.email,
                reaction,
                name: user?.displayName,
                time,
                date
            }
            // set review on tha database by post method
            fetch('https://b6a11-service-review-server.vercel.app/reviews/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(review),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.acknowledged) {
                        toast.success('Review added successfully.');
                        e.target.reset();
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        else {
            toast.error('You must login first to leave a review')
        }

    }
    // getting reviews from server by use effect
    useEffect(() => {
        fetch(`https://b6a11-service-review-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setRender(!render)
            })
    }, [_id, render])

    return (
        <div className='w-10/12 mx-auto my-10'>
            <Helmet>
                <title>Travel trek - Service Details</title>
            </Helmet>
            <div className="card md:card-side bg-base-100 shadow-xl mb-10">
                <div className='md:w-5/12'><img src={image} className='w-full h-full md:rounded-l-xl' alt="Album" /></div>
                <div className="card-body md:w-7/12">
                    <h2 className="card-title text-4xl">{title}</h2>
                    <div className='my-5'>
                        <p className='text-2xl text-emerald-600 font-bold'>{place}</p>
                        <p className='text-emerald-600 text-2xl font-bold md:my-5'>Charge: ${price}</p>
                    </div>
                    <div className="card-actions">
                        <p className=''>{description}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-emerald-700 font-extrabold text-2xl md:text-4xl text-center my-10'>Reviews</h2>
                {
                    user?.uid ? <div className='lg:flex gap-4'>
                        <div className='lg:w-8/12'>
                            {
                                !reviews?.length ? <h2 className='text-3xl'>No Review posted yet</h2>
                                    :
                                    <div className="overflow-x-auto">
                                        <table className="table w-full lg:w-8/4">
                                            <thead>
                                                <tr>
                                                    <th>Review</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    reviews && reviews.map(review => <ReviewItem key={review._id} review={review} />)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                            }
                        </div>
                        {/* conditional rendaring for login or add review */}
                        <form onSubmit={handelReview} className='lg:w-4/12'>
                            <textarea type="text" name='review' className="textarea textarea-accent w-full h-44" placeholder="Add Review" required></textarea> <br />
                            <button type='submit' className="btn btn-success">add Review</button>
                        </form>
                    </div>
                        :
                        <div className='text-center'>
                            <h2 className='text-emerald-700 font-extrabold text-xl md:text-2xl my-10'>Please login to add a review</h2>
                            <Link to='/login' state={{ from: location }} replace className='btn btn-outline btn-accent'>Login</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default ServiceDetails;