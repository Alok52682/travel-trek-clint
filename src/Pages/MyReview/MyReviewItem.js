import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaArrowDown, FaTrash } from 'react-icons/fa';

const MyReviewItem = ({ review, handelDelete, update, up }) => {
    const { date, name, reaction, time, _id, serviceTitle, serviceiimage, } = review;

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handelDelete(_id)} className='btn btn-error'><FaTrash /></button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={serviceiimage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceTitle}</div>
                        <div className="text-sm opacity-50">{`${time} date:${date}`}</div>
                    </div>
                </div>
            </td>
            <td>
                {reaction}
                <br />
                <span className="badge badge-ghost badge-sm">{name}</span>
            </td>
            <th>
                <Link className='btn btn-ghost' onClick={() => update(review)} >update Popup {up ? <FaArrowUp className='ml-2' /> : <FaArrowDown className='ml-2' />} </Link>
            </th>
        </tr >
    );
};

export default MyReviewItem;