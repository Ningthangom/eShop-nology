import React from "react";
import StarRating from "react-star-ratings";

//to calculate average rating
// total: add the elements in the array
// then divide the total by the length of the array

export const AverageRating = ({product}) => {
    console.log("this is rating array: ", product);
    if (product) {
        let ratingArray = product;
        let total = [];
        let length = ratingArray.length;
          console.log("length", length, "ratingArray", ratingArray);

        ratingArray.map((r) => total.push(r));
        let totalReduced = total.reduce((p, n) => p + n, 0);
           console.log("totalReduced", totalReduced);

        let highest = length * 5;
        console.log("highest", highest);

        let result = (totalReduced * 5) / highest;
         console.log("result", result);

        return (
            <div className="">
                <span>
                    <StarRating
                        rating={result}
                        starRatedColor="gold"
                        starDimension="25px"
                        starSpacing=""
                    />
                </span>
            </div>
        );
    }
};
