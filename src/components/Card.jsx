import React from 'react'

const Card = ({ data }) => {


    return (
        <>
            <h1>{data.temp}</h1>
            <h2>{data.city}</h2>
            <h1>{data.country}</h1>
            <h2>{data.temp_max}</h2>
            <h2>{data.temp_min}</h2>
        </>
    )
}

export default Card