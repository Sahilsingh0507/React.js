import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export function Github(props) {

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Sahilsingh0507').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])


    // optimizing the code using loader in route 
    const data = useLoaderData();


    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github followers: {data.followers}
                <img className='rounded-full' src={data.avatar_url} alt="Github picture" width={300} />
            </div>
        </>
    )
}


// optimizing the code 
// jab ham github pe mouse ko le jayenge ye apne aap fetch kr lega data api se aur store kr lega cache me aur jab click krenge toh diplay kr dega 
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sahilsingh0507')
    return response.json();
}