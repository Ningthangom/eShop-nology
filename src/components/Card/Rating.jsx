import React from "react";
import StarRating from "react-star-ratings";

//to calculate average rating
// total: add the elements in the array
// then divide the total by the length of the array

export const AverageRating = ({product}) => {
    if (product) {
        let ratingArray = product;
        let total = [];
        let length = ratingArray.length;
         

        ratingArray.map((r) => total.push(r));
        let totalReduced = total.reduce((p, n) => p + n, 0);
        

        let highest = length * 5;
  

        let result = (totalReduced * 5) / highest;
      

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
