import React, { Component } from 'react'
import Fade from 'react-reveal';
export default class Cart extends Component {

    
    render() {
        const {cartItems} = this.props;
        var value=0;
        console.log(cartItems.length);
        return (
            <div>
           {cartItems.length === 0?(
               <div className="cart cart-header">Cart is empty</div>
           ): <div className="cart cart-header">Cart has {cartItems.length} items</div> 
           }
            <div className="cart">
                <Fade left cascade>
                <ul className="cart-items">
                    
                    {cartItems.map((product)=>{
                    return(
                       <li key={product._id}>
                           <div>
                               <img src={product.image} alt={product.title}>

                               </img>
                           </div>
                        
                            <div>
                              {product.title}  
                            </div>
                            {product.price } x {product.count}

                            <div className="right">
                            <button className="button" onClick={()=>{ this.props.removeItem(product)}} > remove </button>
                            </div>

                       </li>)

                    })}



                </ul>
                </Fade>
                     </div>
           
           
                     <div className="cart">
                    {
                        cartItems.forEach(element => {
                            value+=element.price*element.count;
                            console.log(value)
                        }) 
                        }
                        {value!=0 &&(<div className="total">
                        
                            <div>
                        Total value: ${value}
                        </div>
                        <div>
                            <button className="button">Proceed</button>
                        </div>
                    </div> 
                    
                    )}
                    
                    </div>
           
           </div>
        )
    }
}
