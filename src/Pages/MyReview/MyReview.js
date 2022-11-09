import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { authContext } from '../../Context/AuthProvider';
import MyReviewItem from './MyReviewItem';

const MyReview = () => {
    const { user, logOut } = useContext(authContext);
    const [reviews, setReviews] = useState([]);
    const [show, setShow] = useState(false);
    const [review, setReview] = useState({});
    const [refresh, setRefresh] = useState(false);
    const [up, setUp] = useState(false);

    useEffect(() => {
        fetch(`https://b6a11-service-review-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
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
            })
            .catch(err => console.log(err))
    }, [user?.email, logOut, refresh]);

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

    const update = review => {
        setReview(review);
        setShow(!show);
        setUp(!up)
    }

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
                console.log(data);
                setRefresh(!refresh);
                setShow(false);
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
                                reviews && reviews.map(review => <MyReviewItem key={review._id} review={review} handelDelete={handelDelete} update={update} up={up} />)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            {show && <form onSubmit={(e) => handelUpdate(e, review._id)} className='my-5'>
                <input type="text" name='text' defaultValue={review?.reaction} placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                <button type='submit' className="btn btn-active btn-accent m-2">Update</button>
            </form>}

        </div>
    );
};

export default MyReview;