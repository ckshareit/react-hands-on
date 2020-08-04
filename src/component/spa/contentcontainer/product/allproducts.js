import React from 'react';
import { Switch, Route } from "react-router-dom";
import AddProduct from './addproduct';
import DeleteProduct from './deleteproduct';
import UpdateProduct from './updateproduct';

class AllProducts extends React.Component {
   
    render() { 
        return (  
        
           <div>
              <h2> Products Components</h2>

               <Switch>
                <Route path='/products/addproduct' component={AddProduct}></Route>    
                <Route path='/products/deleteproduct' component={DeleteProduct}></Route>
                <Route path='/products/updateproduct' component={UpdateProduct}></Route>
            </Switch> 
           </div>
        );
    }
}
 
export default AllProducts;