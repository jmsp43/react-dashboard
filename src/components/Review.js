import React from "react";

export default function Review(props) {
    return <div className="review">
        <br/>
        {props.name} from {props.location} says:
        <p>{props.text}</p>
        <br/>
    </div>;
}
