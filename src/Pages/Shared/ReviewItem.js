import React from 'react';

const ReviewItem = ({ review, handelDelete }) => {
    const { date, name, reaction, time, userAvater, _id } = review;

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handelDelete(_id)} className='btn btn-error'>X</button>
                </label>
            </th>

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
            <th>
                <div className="dropdown dropdown-left dropdown-end">
                    <label tabIndex={0} className="btn m-1">Click</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='z-10'><button>Item 1</button></li>
                        <li><button>Item 2</button></li>
                    </ul>
                </div>
            </th>
        </tr>
    );
};

export default ReviewItem;