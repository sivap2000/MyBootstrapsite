import React from 'react';
import { Link } from 'react-router-dom';

function HomeCards(props) {
  return (
      <div className='col-sm-6 col-lg-3'>
          <div className='card shadow text-center'>
              <div className='card-header bg-white' style={{border:'none'}}>
                  <h4 className='text-success'>{props.Products.Productname}</h4>
                  </div>
              <div className='card-body' style={{paddingTop:'0'}}>
               <img style={{width:'100%',maxHeight:'278px'}} src={props.Products.Img} alt='Card-img' className='img-fluid w-100 h-75'></img>
               <Link to='/Shopping' className='btn btn-outline-success mt-3'>See More</Link>
              </div>
          </div>
   </div>
  )
}

export default HomeCards;
