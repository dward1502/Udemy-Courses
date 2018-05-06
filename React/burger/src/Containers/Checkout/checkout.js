import React, { Component } from 'react';
import Checkoutsummary from './../../Components/Order/CheckoutSummary/checkoutsummary';
import { Route } from 'react-router-dom';
import Contact from './ContactData/ContactData';

class checkout extends Component {
   state={
      ingredients:null,
      price:0
   }

   componentWillMount(){
      const query = new URLSearchParams(this.props.location.search);
      const ingredients = {};
      let price = 0;
      for(let param of query.entries()){
         //['salad', '1']
         if(param[0]=== 'price'){
            price = param[1];
         } else{
            ingredients[param[0]] = +param[1]
         }
        
      }
      this.setState({
         ingredients:ingredients,
         price: price
      });
   }

   checkoutCanceled=()=>{
      this.props.history.goBack();
   }
   checkoutContinued=()=>{
      this.props.history.replace('/checkout/contact-data');
   }
   render() {
      return (
         <div>
            <Checkoutsummary ingredients={this.state.ingredients}
            checkoutCanceled={this.checkoutCanceled}
            checkoutContinue={this.checkoutContinued}/>
            <Route 
            path={this.props.match.url + '/contact-data'} 
            render={(props) =>(<Contact ingredients={this.state.ingredients}
            price={this.state.price} {...props}/>)}/>
         </div>
      );
   }
}

export default checkout;