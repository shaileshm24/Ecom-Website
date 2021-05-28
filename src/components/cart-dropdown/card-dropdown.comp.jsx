import  React from 'react';
import {connect} from 'react-redux';
import './card-dropdown.scss';
import CustomButton from '../custom-button/custom-button.comp';
import CartItem from '../cart-item/cart-item.comp';

const Cart = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} />))}        

        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
});

export default connect(mapStateToProps)(Cart);