import React from 'react';
import Modalbox from './Modalbox';
import {objects1,objects2,objects3,objects4} from './Productobjects'
import Shoppingcard from './Shoppingcard';
import {useState} from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

 function Shopping() {
       const [Addedproducts, setAddedproducts] = useState([]);
       const [Totalamount, setTotalamount] = useState(0);
       const [Totalitems, setTotalitems] = useState(0);

       const Mynavigation = useNavigate();

            function Addfunction(Products) {
                   Products.Count++;
                setAddedproducts((PreviousItem) => {
                      return [...PreviousItem, Products];
                });
                setTotalamount((PreviousAmount) => PreviousAmount + Products.Price);
                setTotalitems(Addedproducts.length + 1);
              }
            function Disable_btn(ProductsFromCard){
                let Products =  Addedproducts.find((x) => {
                  return x.id == ProductsFromCard.id ;
                 })

                if(Products){
                  return true;
                }else{
                  return false;
                } 
            }
            function Close_Selected(Details){
               let Myfilter = Addedproducts.filter((Something) => {
                    return Something.id != Details.id
               })
                let Actual_Amount = Details.Price * Details.Count
               setAddedproducts(Myfilter);  
               setTotalamount(Totalamount - Actual_Amount)
               setTotalitems(Totalitems - Details.Count);
            }
            function Increment(IncrementDetails){
                let  Product = [...Addedproducts];
                Product.forEach(element => {
                       if(element.id == IncrementDetails.id){
                           element.Count++;
                           setTotalamount(Totalamount + IncrementDetails.Price);
                           setTotalitems(Totalitems + 1)
                       }
                });
                setAddedproducts(Product)
            }
            function Decrement(DecrementDetails){
              let  Product = [...Addedproducts];
              Product.forEach(element => {
                     if(element.id == DecrementDetails.id){
                         element.Count--;
                         setTotalamount(Totalamount - DecrementDetails.Price);
                         setTotalitems(Totalitems - 1)
                     }
                     setAddedproducts(Product)

                     if(DecrementDetails.Count == 0){DeleteFunction(DecrementDetails.id);}
              });
            }
            function DeleteFunction(ID){
                  //  alert(ID);
                  let Deletefilter = Addedproducts.filter((aa) => {
                     return aa.id != ID;
                  })
                  setAddedproducts(Deletefilter);
            }
             
 
  return (
          <section className='container-fluid p-3'>

             <div className='d-flex ' style={{position:'fixed',right:'20px',zIndex:'5'}}>
             <button type='button'
               className='btn btn-primary mx-3'
                data-bs-toggle = 'modal'
                data-bs-target = '#Modal'
              >See the Selected products
              <span className='badge bg-dark mx-2'>{Totalitems}</span>
              </button>

                <btn onClick = {() => Mynavigation('/contact/'+ Totalamount + '/' + Totalitems )} className='btn btn-success'>Submit</btn>
             </div>
              

            <div className='row mt-5'>
              <div className='col-md mb-3'>
                 <div className='row'>
                 {
                 objects1.map((MyItems,index) => {
                   return <Shoppingcard 
                    key={index} 
                    Details = {MyItems} 
                    AddFunc = {Addfunction}
                    Disable_Btn = {Disable_btn}/>
                 })
              }
                   </div>  
              </div>
              <div className='col-md mb-3'>
                 <div className='row'>
                 {
                 objects2.map((MyItems,index) => {
                   return <Shoppingcard 
                    key={index} 
                    Details = {MyItems} 
                    AddFunc = {Addfunction}
                    Disable_Btn = {Disable_btn}/>
                 })
              }
                   </div>  
              </div>
             </div>

            <div className='row mt-5'>
              <div className='col-md mb-3'>
                 <div className='row'>
                 {
                 objects3.map((MyItems,index) => {
                   return <Shoppingcard 
                    key={index}
                     Details = {MyItems} 
                     AddFunc = {Addfunction}
                     Disable_Btn = {Disable_btn}/>
                 })
              }
                   </div>  
              </div>
              <div className='col-md mb-3'>
                 <div className='row'>
                 {
                 objects4.map((MyItems,index) => {
                   return <Shoppingcard  
                   key={index} 
                   Details = {MyItems} 
                   AddFunc = {Addfunction}
                   Disable_Btn = {Disable_btn}/>
                 })
              }
                   </div>  
              </div>
             </div>
            <Modalbox ShowLists = {Addedproducts} 
            Increment = {Increment} 
            Decrement = {Decrement}
            Close_Selected = {Close_Selected}
            Amount = {Totalamount} 
            Items = {Totalitems}/>
          </section>  
       
  )
}

export default Shopping;