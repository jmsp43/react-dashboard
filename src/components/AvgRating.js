import React from "react"
import { useState } from "react"


export default function AvgRating(){
//add counter here
    const [rating, setRating] = useState(0)

    const increment = () => {
        setRating(rating+1)
    }

    const decrement = () => {
        setRating(rating-1)
    }

    return (
        <div className='avgRatingDiv'>
            <div className = 'holder'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h2>Likes</h2>
            <p>{rating}</p>
            <button onClick={increment}><i className="fa fa-thumbs-up"></i></button>

                <button onClick={decrement}><i className="fa fa-thumbs-down"></i></button>
                </div>
        </div>
    )
}