import React from 'react';
// review item component
const ReviewItem = ({ review }) => {

    const { date, name, reaction, time, userAvater } = review;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={userAvater} alt='reviewer' />
                        </div>
                    </div>
                    <div>
                        {reaction}
                        <br />
                        <span className="badge-sm font-bold">{name}</span>
                        <br />
                        <span className="badge badge-ghost badge-sm">{`${time} date:${date}`}</span>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ReviewItem;