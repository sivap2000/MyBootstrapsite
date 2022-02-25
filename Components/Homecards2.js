import React from 'react';
import { Link } from 'react-router-dom';

function Homecards2(props) {
  return (
      <div className='col-sm'>
          <div className='card shadow'>
              <div className='card-header bg-white'  style={{border:'none'}}>
                  <h4 className='text-primary'>{props.Products.Productname}</h4>
              </div>
               <div className='card-body' style={{paddingTop:'0'}}>
                   <img src={props.Products.Img} alt='Homecard2Img' className='img-fluid w-100'></img>
                   <Link to='/Shopping' className='btn btn-outline-primary mt-3'>See more </Link>
               </div>
          </div>
      </div>
  );
}

export default Homecards2