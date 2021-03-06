import React from 'react';

const Rating = (props) => {
    const {rating, numReviews} = props

    return ( <div class="rating">
    <span>
        <i class={
            rating >=1
            ? "fa fa-star"
        : rating >= 0.5
        ?"fa fa-star-half-o"
        :"fa fa-star-o"}></i>
    </span>
    <span>
        <i class={
            rating >=2
            ? "fa fa-star"
        : rating >= 1.5
        ?"fa fa-star-half-o"
        :"fa fa-star-o"}></i>
    </span>
    <span>
        <i class={
            rating >=3
            ? "fa fa-star"
        : rating >= 2.5
        ?"fa fa-star-half-o"
        :"fa fa-star-o"}></i>
    </span>
    <span>
        <i class={
            rating >=4
            ? "fa fa-star"
        : rating >= 3.5
        ?"fa fa-star-half-o"
        :"fa fa-star-o"}></i>
    </span>
    <span>
        <i class={
            rating >=5
            ? "fa fa-star"
        : rating >= 4.5
        ?"fa fa-star-half-o"
        :"fa fa-star-o"}></i>
    </span>
        <span>{numReviews}</span> <span>reviews</span>
</div> );
}
 
export default Rating;