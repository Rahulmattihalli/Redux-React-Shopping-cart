import {FETCH_PRODUCTS } from '../Components/type'
export const fetchProducts = ()=>async (dispatch)=>{

    
   const res= await fetch("/api/products")
   var data=null;
  await res.json().then(newdata=>data=newdata);
  console.log(data);
   dispatch({
       type:FETCH_PRODUCTS,
       payload:data,
   })

}