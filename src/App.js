import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import Products from './Components/Products';
import Filter from './Components/Filter';
import Cart from './Components/Cart';
import store from './store'
import { Provider } from 'react-redux';
class App extends Component{

  constructor(){
    super();
    this.state = {
      products:data.products,
      cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
      size:"",
      sort:""
    };
  }
    

                addToCart=(product)=>{
                  const cartitems = this.state.cartItems.slice();
                  let alreadyexist=false;
                  cartitems.forEach((item)=>{
                    if(item._id===product._id){
                      item.count++;
                      alreadyexist=true;
                     
                    }
                  })
                  if(!alreadyexist){
                    this.state.cartItems.push({...product,count:1});
                    localStorage.setItem("cartItems", JSON.stringify(cartitems))
                  }

                this.setState({cartitems});
                  localStorage.setItem("cartItems", JSON.stringify(cartitems))
                }

                remove=(event)=>{
                  const cartItems = this.state.cartItems.slice();
                  this.setState({cartItems:cartItems.filter(product=>{
                   return(product._id!==event._id)
                  })
                  
                }
                
                )
                localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems))  
                }

        sortProduct=(event)=>{
          const sort = event.target.value;
          console.log(sort);
          console.log(sort==="L");
          this.setState({sort: sort, products:data.products
            .slice()
            .sort((a,b)=>
              (sort === "L" ?
              ((a.price > b.price) ? 1: -1)
              :sort==="H" ?
              ((a.price < b.price) ? 1 : -1)
              : 
              ((a._id > b._id )? 1 : -1)
            ))})


          }


          
          sortSize=(event)=>{
            console.log(event.target.value);
            if(event.target.value==""){
              console.log("entered");
              this.setState({size:event.target.value, products:data.products})
            }
            else{
              this.setState({size:event.target.value,products:data.products.filter((product)=>{ return product.availableSizes.indexOf(event.target.value)>=0;})})
            }
          }

  render()
            {
              return (
                <Provider store={store}>
                    <div className="grid-container">
                      <header>
                        <a href="/">Home page</a>
                      </header>
                            <main>
                                <div className="content">
                                    <div className="main">
                                      <Filter count={this.state.products.length} size={this.state.size} sort={this.state.sort} sortProduct={this.sortProduct} sortSize={this.sortSize}></Filter>
                                     <Products products={this.state.products} addToCart={this.addToCart} ></Products>
                                    </div>

                                    <div className="sidebar">
                                      <Cart cartItems={this.state.cartItems} removeItem={this.remove}></Cart>
                                    </div>


                                </div>

                            </main>
                      <footer>All copyrights reserved.</footer>
                    </div>
                    </Provider>
                  );
          }
        }

export default App;
