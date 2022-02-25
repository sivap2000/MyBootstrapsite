import React from 'react';

function Shoppingcard(props) {
  return (
       <div className='col'>
           <div className='card shadow text-center'>
               <div className='card-header bg-white' style={{border:'0'}}>
                   {
                       props.Details.isStock ? <h4>{props.Details.Productname}</h4> : <h4><del>{props.Details.Productname}</del></h4>
                   }
                   
               </div>
               <div className='card-body' style={{paddingTop:'0'}}>
                     <img src={props.Details.Img} style={{height:'250px'}} alt='Shoppingcard-Img' className='img-fluid w-100'/>
                     <p className='card-title h5 my-2'>Price : <span className='text-success'>{props.Details.Price}</span></p>
                     <button className='btn btn-warning ' 
                     disabled={ props.Disable_Btn(props.Details) || !props.Details.isStock}
                     onClick={() => props.AddFunc(props.Details)}
                     >Add to cart</button>
               </div>
           </div>
        </div>        
  )
}

export default Shoppingcard;
