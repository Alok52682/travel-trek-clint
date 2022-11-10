import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { authContext } from '../../Context/AuthProvider';
import MyReviewItem from './MyReviewItem';

const MyReview = () => {
    const { user, logOut } = useContext(authContext);
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState({});
    const [refresh, setRefresh] = useState(false);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch(`https://b6a11-service-review-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                // sending token to server by headers
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
                setSpinner(false)
            })
            .catch(err => console.log(err))
    }, [user?.email, logOut, refresh]);

    // delete review with fetch delete method by onclick handeler
    const handelDelete = id => {
        const agree = window.confirm('Are you sure you want to delete this review?');
        if (agree) {
            fetch(`https://b6a11-service-review-server.vercel.app/reviews/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Deleted Successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
                .catch(err => console.log(err))
        }
    }

    // set review item id for update
    const update = review => {
        setReview(review);
    }

    // update review by fetch update method by sunmit handler

    const handelUpdate = (event, id) => {
        event.preventDefault();

        const text = event.target.text.value;
        const rev = { text };
        // console.log(rev);
        fetch(`https://b6a11-service-review-server.vercel.app/reviews/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rev)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Update successfull')
                    setRefresh(!refresh);
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-10/12 mx-auto'>
            <Helmet>
                <title>Travel trek - My Reviews</title>
            </Helmet>
            <h2 className='text-emerald-700 font-extrabold text-2xl md:text-4xl text-center my-10'>MY Reviews : {reviews?.length}</h2>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Service Name</th>
                                <th>Reviews</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews && reviews.map(review => <MyReviewItem key={review._id} review={review} handelDelete={handelDelete} update={update} />)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            {/* this is modal body for update review */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={(e) => handelUpdate(e, review._id)} className='my-5 text-center'>
                        <input type="text" name='text' placeholder="Retype Your Review" className="input input-bordered input-accent w-full max-w-xs" />
                        <button type='submit' className="btn btn-active btn-accent m-2">Update</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn btn-outline btn-error">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;