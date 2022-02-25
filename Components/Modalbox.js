import React from 'react';
 
function Modalbox(props) {
  return (
    <div className='modal' id='Modal'>
    <div className='modal-dialog modal-dialog-centered'>
      <div className='modal-content'>
           <div className='modal-body'>
               <h4>Total amount : <span className='text-success'>{props.Amount}</span></h4>
               <h4>Total items  : <span className='text-success'>{props.Items}</span></h4>
             <ul className='list-group'>
               {
                   props.ShowLists.map((Items,index) => {
                       return (
                             <li key={index} 
                             className='list-group-item d-flex justify-content-between align-items-center'>
                            <div>
                                <span style={{fontSize:'18px'}}>{Items.Productname}</span><br/>
                                <span style={{fontSize:'18px'}} className='text-success'>{Items.Price}</span>
                            </div>
                            <div className='d-flex align-items-center'>
                                  <h5>{Items.Count}</h5>
                                 <button  className ='btn btn-primary btn-sm  me-2 ms-3' onClick={() => props.Increment(Items)}>+</button>
                                 <button  className='btn btn-primary btn-sm  mx-2' onClick={() => props.Decrement(Items)}>-</button>
                                 <button type='button' className='btn btn-danger btn-sm' onClick={() => props.Close_Selected(Items)}><i class="bi bi-x-circle"></i></button>
                            </div>
                       </li>
                       )
                   })
               }

             </ul>
             <div className='pt-3'>
              <button className='btn btn-danger' data-bs-dismiss = 'modal'>Close</button>
             </div>
             
          </div>
      </div>
    </div>
  </div>
  );
}

export default Modalbox;

