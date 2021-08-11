import React from 'react';
import Rating from './rating';
import {Link} from 'react-router-dom'

const Product = (props) => {
  const  {products} = props
  console.log(products)
    return (  <div  class="product">
    <Link to={`/product/${products._id}`}>
    
        <img class="radius" src={products.image} />
    </Link>
    <div class="body-card">
        <Link  to={`/product/${products._id}`}>
            <h2>{products.name}</h2>
        </Link>

        <Rating rating={products.rating} numReviews={products.numReviews}/>
        <div className="row">
          <div className="price">${products.price}</div>
         
        </div>
    

   
    </div>
</div>);
}
 
export default Product;