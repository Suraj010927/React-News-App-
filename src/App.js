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
        <Route exact path='/IN' element={<News key='india'  country='in' direction={this.state.direction}/>}></Route>        <Route exact path='/entertainment' element={<News key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>


{/*
        <Route exact path='/health' element={<News key='health' pageSize={12} country='us' category='health' />}></Route>
        <Route exact path='/science' element={<News key='science' pageSize={12} country='us' category='science' />}></Route>
        <Route exact path='/sports' element={<News key='sports' pageSize={12} country='us' category='sports' />}></Route>
        <Route exact path='/technology' element={<News key='technology' pageSize={12} country='us' category='technology' />}></Route> */}
      </Routes>
    </Router>
    )
  }
}
