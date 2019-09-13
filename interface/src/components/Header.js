import React from 'react'
import { Link } from 'react-router-dom'
 
const Header = () => (
 	<nav className='navbar navbar-expand-md navbar-light navbar-laravel' style={{backgroundColor: '#FF4701', marginBottom: '20px'}}>
    	<div className='container'>
			<Link to='/'><img src='/logo.png'/></Link>
      		<Link className='navbar-brand' to='/' style={{color: 'white'}}>Mobly Users 1.0</Link>
    	</div>
  	</nav>
)
 
export default Header