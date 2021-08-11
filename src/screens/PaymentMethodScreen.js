import React, { useState } from 'react';
import CheckoutStep from '../components/CheckoutStep';
import { useSelector, useDispatch } from 'react-redux';
import { savePaymentMethod } from '../action/cartAction';

const PaymentMethodScreen = (props) => {

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress.address) {
      props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(savePaymentMethod(paymentMethod));
      props.history.push('/placeorder');
    };

    return ( <div>
<CheckoutStep step1 step2 step3></CheckoutStep>
<form className='form' onSubmit={submitHandler}>
<div>
    <h1>Payment Method</h1>
</div>

<div>
    <div>
        <input 
        type="radio"
        name='PaymentMehod'
        value='Paypal'
        id='paypal'
        required
        checked
        onChange={(e) => setPaymentMethod(e.target.value)}
        ></input>
        <label htmlFor='paypal'>Paypal</label>
    </div>
</div>

<div>
    <div>
        <input 
        type="radio"
        name='PaymentMehod'
        value='Stripe'
        id='stripe'
        required
        checked
        onChange={(e) => setPaymentMethod(e.target.value)}
        ></input>
        <label htmlFor='stripe'>Stripe</label>
    </div>
</div>
<div>
<label />

<button className="primary" type="submit">Continue</button>
</div>

</form>


    </div> );
}
 
export default PaymentMethodScreen;