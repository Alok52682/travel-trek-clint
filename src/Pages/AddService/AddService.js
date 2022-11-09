import React from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { FaRegSave } from 'react-icons/fa';

const AddService = () => {
    const handelAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const place = form.place.value.toUpperCase();
        const image = form.image.value;
        const description = form.description.value;
        // console.log(place);

        const service = { title, price, place, image, description };
        fetch('https://b6a11-service-review-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Added service successfully.');
                    form.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <Helmet>
                <title>Travel trek - Add Service</title>
            </Helmet>
            <div className='py-6'>
                <div className="flex overflow-hidden mx-auto max-w-sm lg:max-w-4xl gap-4 items-center justify-center p-10">
                    <div className="w-full p-8 lg:w-1/2 border shadow-xl rounded-xl">
                        <h2 className="text-2xl font-bold text-emerald-600 text-center">Add a new service</h2>
                        <form onSubmit={handelAddService}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                                <input className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name='title' placeholder='Title' required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Place</label>
                                <input className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name='place' placeholder='Place' required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                                <input className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="number" name='price' placeholder='Price' required />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">ImageURL</label>
                                </div>
                                <input className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name='image' placeholder='ImageURL' required />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                                </div>
                                <input className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name='description' placeholder='Description' required />
                            </div>
                            <div className="mt-8">
                                <button type='submit' className="btn bg-emerald-500 border-none hover:bg-emerald-700 w-full rounded-xl">Add<FaRegSave className='ml-2' /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;