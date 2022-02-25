import React from 'react';
import{ useParams } from 'react-router-dom';
 
  function Contact(){
   const Parameters = useParams();
   const Amount = Parameters.Total_Amount;
   const Items = Parameters.Total_Items;

     const Positioning = {
         width:'100%',
         height:'650px',
       }
        
    return (
       <>
        <div style={Positioning} className='d-flex bg-info align-items-center justify-content-center'>
             <form method='POST' className='w-50 bg-white shadow p-4'>
                 <h4>The Total Amount is : {Amount}</h4>
                 <h4>Total Items Selected : {Items}</h4>
                <div className='my-2'>
                  <label className='form-label' htmlFor='NameInp'>Enter Your name</label>
                  <input id='NameInp' type='text' className='form-control' name='NameInp' required/>
                 </div>
                 <div className='mb-2'>
                  <label className='form-label' htmlFor='EmailInp'>Enter Your Email</label>
                  <input id='EmailInp' type='email' className='form-control' name='EmailInp' required/>
                 </div>
                 <div className='mb-2'>
                   <label className='form-label' htmlFor='PassInp'>Enter your password</label>
                   <input className='form-control' name='PassInp' id='PassInp'required />
                 </div>
                 <button type='button' disabled={(Amount == 0 && Items == 0) ? true : false} className='btn btn-success my-2 float-end'>Next</button>
             </form>
        </div>
        </>
  );
}

export default Contact;
