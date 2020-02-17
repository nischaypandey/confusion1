import React, { Component } from 'react';


import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from "./FooterComponent"
import DishdetailComponent from "./DishdetailComponent";

class Main extends Component{
  constructor(props){
    super(props);

  this.state= {
    dishes: DISHES,
    selectedDish: null
    
  };
  this.onDishSelect = this.onDishSelect.bind(this);
}

onDishSelect(dishId) {
    console.log("this is   ",dishId);
    this.setState({ selectedDish: dishId },console.log(this.state.selectedDish));
  }
render() {
  return (
    <div >
      <Header />
      <Menu dishes={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dishId)} />
      <DishdetailComponent 
      dish= {this.state.dishes.filter((dish) => dish.id ===this.state.selectedDish)[0]}
      />
      <Footer />
    </div>
  );
}
}

export default Main;
