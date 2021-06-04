import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import  Logo from '../../assests/icon.png';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IyVOTSGQBfQhJpgye5wKZg6y8zDRoXPncPNX2k4HDTP6P5V6YEyDpb4zjJne6cEAr5JJc2C2axM4A7si66YshGB00laMBfu0o'

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful!')
    }
    return (
        <StripeCheckout 
        label='Pay Now'
        name='abcd'
        billingAddress
        shippingAddress
        image={Logo}
        description={`Your total price is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
    )
};

export default StripeCheckoutButton;