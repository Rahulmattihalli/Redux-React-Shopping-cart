import React, { Component } from 'react';
import formatcurrency from './Utils'
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import { connect } from 'react-redux';
import { fetchProducts } from './../actions/productActions';

class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            product:null
        }
    }
    componentDidMount(){
      
        this.props.fetchProducts();
 
      }

    openModal=(product)=>{
        this.setState({product})
    }
    closeModal=()=>{
        this.setState({product:null})
    }

    render() {
        debugger;
        
        const {product} = this.state;
        return (
            
            <div>
                <Fade bottom cascade>
                    
                    {!this.props.products ? (<div>Loading</div>):(
                        <ul className="products">
                        {this.props.products.map(product=>{
                           
                           return(<li key={product._id}>
                                
                                <div className="product">
                                    <a href={"#"+product._id}>
                                        <img src={product.image} alt={product.title} onClick={()=>this.openModal(product)}/>
                                            <p>{product.title}</p>
    
                                    </a>
    
                                    <div className="product-price">
    
                                        <div>{formatcurrency(product.price)}</div>
                                        <button onClick={()=>this.props.addToCart(product)} className="button primary">Add to cart</button>
    
                                    </div>
    
                                </div>
    
                            </li>)
                            
                        })}
                    </ul>
                    )}
                
                </Fade>
                {product && 
                (<Modal isOpen={true} onRequestClose={this.closeModal} >
                    <Zoom>
                        <button className="close-modal" onClick={this.closeModal}>X</button>
                    <div className="product-details">
                      
                        <img src={product.image}></img>
                      
                        <div className="product-details-description">
                        <strong>{product.title}</strong>
                       <p >{product.description}</p>
                        <div>
                            {product.availableSizes.map((size)=>(
                                <span>{" "}
                                    <button className="button">{size}</button>
                                </span>)
                            )}
                            <br></br>
                            <br></br>
                            <button className="button" onClick={()=>{
                                this.props.addToCart(product);
                                this.closeModal()
                            }}>Checkout</button>
                           </div>
                        </div>
                    </div>
                    </Zoom>
                    </Modal>)}
            </div>
        )
    }
}
export default connect((state)=>({products:state.products.items}),{fetchProducts},)(Products);