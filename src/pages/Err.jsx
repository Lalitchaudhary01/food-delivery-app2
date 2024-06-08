import React from 'react'
import { useRouteError } from 'react-router-dom'

function Err() {

    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>Oopps</h1>
            <h3>Something Went Wrong</h3>
            <h4>{err.status}</h4>
            <h4>{err.statusText}</h4>
        </div>


    )
}

export default Err