import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import  Logo from '../../assests/icon.png';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart/cart-icon.comp';
import Cart from '../cart-dropdown/card-dropdown.comp';

import './header.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
    <Link className='logo-container' to='/'>
       <img className='logo' src={Logo} height="70px"/>
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>Shop</Link>
        <Link className='option' to='/contact'>Contact</Link>
        {
            currentUser ?
            <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>
            :
            <Link className='option' to='/signin'>Sign In</Link>
        }
        <CartIcon/>
    </div>
    {
        hidden ? null :
        <Cart/>
    }
    
    </div>
);

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header);