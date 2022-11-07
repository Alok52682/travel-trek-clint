import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                {error && (
                    <div>
                        <p className='text-8xl font-extrabold text-red-500'>{error.status}</p>
                        <p className='text-red-500 text-center font-bold'>{error.statusText || error.message}</p>
                    </div>
                )}
                <br />
                <h1 className='text-6xl'>Ops! An Error Ocurred!</h1>
                <Link className='btn btn-error text-white mt-10 hover:bg-white hover:text-error' to='/'>Back To The Home Page</Link>
            </div>
        </>
    )
}

export default ErrorPage;