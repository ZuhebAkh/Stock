import React from 'react'
import './Navbar.css'
import Cart from './Cart'

const Navbar = (props) => {
  return (
    <React.Fragment>
    <header className='header'>
        <h2>Stock Quantity Management</h2>
       <span> <Cart onClick={props.onShowCart}></Cart></span>
    </header>
    </React.Fragment>
  )
}

export default Navbar