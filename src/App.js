import React from 'react'
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import './App.css';
import Error from './Error';
import Navbar from './Navbar';

const App = () => {

const Name=()=>{
  return <h1>I am Name page</h1>
}
  return (
    <>
  <Navbar/>
   <Switch>
   <Route exact path="/" component={About}/> 
   {/* <Route path="/about" component={About}/> */}
   <Route exact path="/contact" component={Contact}/>  
   <Route path="/contact/name" component={Name}/>  
   <Route  component={Error}/>     
   </Switch>
{/* dodoododo */}
{/* //commit  */}
    </>
  )
}

export default App