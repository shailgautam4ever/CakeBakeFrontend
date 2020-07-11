import React from "react";
import Home from './Home/Home';
import Nav from './Nav/Nav';
import {Route, Switch, Redirect} from 'react-router-dom'

import '../styles/common.css';
import '../styles/app.css';
import DefaultCakePic from '../assets/cake2.jpg';
import Cake1 from '../assets/cake1.jpg';
import Cake3 from '../assets/cake3.jpg';
import CakeDescription from "./CakeDescription/cakeDescription";
import AddNewCake from "./addNewCake/addNewCake";
import Cart from './cart/cart';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      allCakes: []
    }
  }

  componentDidMount() {
    //api call
    let url = 'http://localhost:5000/cake/all';
    fetch(url)
    .then(response=>response.json())
    .then(jsonData => {
      if(jsonData.status){
        let {allCakes} = this.state;
        allCakes = jsonData.data;
        this.setState({allCakes});
      }else{
        console.log(json.message);
      }
    }).catch(err=> {
      console.log('error occured', err);
    })
  }

  render() {
    return (
      <div className='app'>
        <Nav/>
        <div className='main-content'>
          <Switch>
            <Route exact path='/'>
              <Home allCakes={this.state.allCakes}/>
            </Route>
            <Route exact path='/cakeDescription'>
              <CakeDescription allCakes ={this.state.allCakes} />
            </Route>
            <Route exact path='/addNewCake'>
              <AddNewCake />
            </Route>
            <Route exact path='/cart'>
              <Cart/>
            </Route>
            <Redirect to='/cart'></Redirect>
          </Switch>
        </div>
        <div className='footer'></div>
      </div>
    );
  }
}

export default App;
