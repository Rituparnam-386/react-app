import React from 'react';
import './App.css';
import  {BrowserRouter as Router,Link} from 'react-router-dom'
import Route from 'react-router-dom/Route';

function App() {
  return (<Router>
    <div className="App">
    <div className="container">
  
    <h1>USER DETAILS</h1>
        <h2>Detailed activity of the users</h2>
      <li>
        <Link  to="/" exact activeStyle={
          {color:'green'}}>User1</Link></li>
        <li>
        <Link to="/" exact activeStyle={
          {color:'red'}}>User2</Link></li>
        <Route  path ="/user1"
        exact strict render = {
          () => {
             return ( <p><a href="localhost:8080/rituparna/userhtml1.html"> user1</a></p>);
          }
      }
      /><
        Route path ="/user2"
        exact strict render ={
          () => {
            return (<p><a 
            href="locahost:8080/rituparna/user.html">user2</a></p>);
          }
        }
        />
       
    </div>
    </div>
    </Router>
    
    
  );
}

export default App;
