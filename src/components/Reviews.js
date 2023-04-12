import React from "react";
import Review from "./Review";

export default function Reviews() {

    const reviews = [
        { name: "Ana", location: "NYC", reviewText: "Love this site!" },
        { name: "Jorge", location: "LA", reviewText: "Site is mid." },
        { name: "Tara", location: "Kansas", reviewText: "HATE this site" },
    ];
    
    const reviewsJSX = reviews.map((review, i) => {
        return (
            <Review
                key={i}
                name={review.name}
                location={review.location}
                text={review.reviewText}
            />)
    }   )   
        return (
        <div>
                <h2>Reviews</h2>
                {reviewsJSX}
        </div>
    );
}
//   const reviews = [
//     { name: "Ana", location: "NYC", reviewText: "Love this site!" },
//     { name: "Jorge", location: "LA", reviewText: "Site is mid." },
//     { name: "Tara", location: "Kansas", reviewText: "HATE this site" },
//   ];

//   const reviewsJSX = reviews.map((review, i) => {
//     return (
//       <div>
//         <Review
//           key={i}
//           name={review.name}
//           location={review.location}
//           text={review.reviewText}
//           // <p>{review.name} from {review.location} says: {review.reviewText}</p>
//         />
//       </div>
//     );
//   });

//   return (
//     <div>
//       <h2>Reviews</h2>
//       {reviewsJSX}
//     </div>
//   );
// }
