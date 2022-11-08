import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../Context/AuthProvider';
import ReviewItem from '../Shared/ReviewItem';

const MyReview = () => {
    const { user } = useContext(authContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            .catch(err => console.log(err))
    }, [user?.email]);

    const handelDelete = id => {
        const agree = window.confirm('Are you sure you want to delete this review?');
        if (agree) {
            fetch(`http://localhost:4000/reviews/${id}`, {
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

    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-emerald-700 font-extrabold text-2xl md:text-4xl text-center my-10'>MY Reviews : {reviews?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Review</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews && reviews.map(review => <ReviewItem key={review._id} review={review} handelDelete={handelDelete} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;