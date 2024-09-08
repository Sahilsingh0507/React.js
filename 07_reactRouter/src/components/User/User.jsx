import React from 'react'
import { useParams } from 'react-router-dom'

export function User(props) {

    const { userid } = useParams();
    return (
        <>
            <div className='bg-gray-600 text-white text-3xl text-center p-4'>User: {userid}</div>
        </>
    )
}
