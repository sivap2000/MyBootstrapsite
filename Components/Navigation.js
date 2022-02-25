import React from 'react';
import{ Link } from 'react-router-dom';

function Navigation() {
  return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark py-3 fixed-top'>
          <div className='container'>
          <h4><Link to='/' className='nav-brand' style={{textDecoration:'none',color:'lightgrey'}}>Tamil Store</Link></h4>
            <button className='navbar-toggler' 
            data-bs-toggle='collapse'
            data-bs-target='#collapseNav'
            > <span className='navbar-toggler-icon'></span></button>

            <div className='collapse navbar-collapse' id='collapseNav'>
                   <ul className='navbar-nav ms-auto'>
                       <li className='nav-item'>
                         <Link to='/' className='nav-link'>Home</Link>
                       </li>
                       <li className='nav-item'>
                         <Link to='/Shopping' className='nav-link'>Products</Link>
                       </li>
                       <li className='nav-item'>
                         <Link to='/Contact' className='nav-link'>Contacts</Link>
                       </li>
                   </ul>
            </div>
          </div>
        </nav>
  )
}

export default Navigation;