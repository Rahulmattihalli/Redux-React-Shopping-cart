import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import Products from './Components/Products';

class App extends Component{

  constructor(){
    super();
    this.state = {
      products:data.products,
      size:"",
      sort:""
    };
  }

  render()
            {
              return (
                    <div className="grid-container">
                      <header>
                        <a href="/">Home page</a>
                      </header>
                            <main>
                                <div className="content">
                                    <div className="main">
                                     <Products products={this.state.products}></Products>
                                    </div>

                                    <div className="sidebar">
                                      Sidebar
                                    </div>


                                </div>

                            </main>
                      <footer>All copyrights reserved.</footer>
                    </div>
                  );
          }
        }

export default App;
