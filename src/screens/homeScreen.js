import React, { useState, useEffect } from 'react';
import Product from '../components/product'
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';
import { useSelector, useDispatch } from 'react-redux';
import { listsProducts } from '../action/productAction';

const HomeSreen = () => {
  const dispatch = useDispatch();
    const productList = useSelector( state => state.productList)
    const {loading, error, product} = productList


    useEffect(() => {
      dispatch(listsProducts({}));
    }, [])

    return (
        <div>
      { loading? (<LoadingBox />):
          error? (<MessageBox>{error} </MessageBox>):
          (<div class="row center">
            
          {product.map((products) => (
           <Product keys={products._id} products={products}/>
      
          ))
      }
      
      
      
      </div>)
      }
      </div>
    
      );
}
 
export default HomeSreen;