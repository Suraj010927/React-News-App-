import React, { Component } from 'react'
import NavBar from './component/Navbar'
import News from './component/News'
import {Route,BrowserRouter as Router,Routes } from 'react-router-dom'



export default class App extends Component {
  
 
    constructor(props) {
      super(props);
  
      this.state = {
        direction: 'horizontal'
      };
  
      this.handleDirectionChange = this.handleDirectionChange.bind(this);
    }
  
    handleDirectionChange(newDirection) {
      this.setState({
        direction: newDirection
      });
    }

  render() {
    return (
     
      <Router >
      <NavBar onDirectionChange={this.handleDirectionChange} />
      <Routes>
        <Route exact path='/' element={<News key='general' country='us' direction={this.state.direction}/>}></Route>
        <Route exact path='/US' element={<News key='general' country='us' direction={this.state.direction}/>}></Route>
        <Route exact path='/IN' element={<News key='india'  country='in' direction={this.state.direction}/>}></Route> 



      </Routes>
    </Router>
    )
  }
}
