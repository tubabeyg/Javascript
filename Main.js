import React, {  Component } from 'react';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
import DeleteStudent from './DeleteStudent';
import ViewStudent from './ViewStudent';
import './../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import 'bootstrap/dist/css/bootstrap.min.css';
  import Button from 'react-bootstrap/Button';

  export default function Main() {
    return (
      <Router>
        <div>
       <Button className="button" variant="info" size="lg"><Link className="link" to="/addstudent" >Add Student</Link></Button>{' '}
       <Button className="button" variant="info" size="lg"><Link className="link" to="/updatestudent" >Update Student</Link></Button>{' '}<br></br>
       <Button className="button" variant="info" size="lg"><Link className="link" to="/deletestudent" >Delete Student</Link></Button>{' '}
       <Button className="button" variant="info" size="lg"><Link className="link" to="/Viewstudent">View Student</Link></Button>{' '}<br></br>
          
          <Switch>
            <Route path="/add" component={AddStudent}>
              
            </Route>
            <Route path="/update" component={UpdateStudent}>
              
            </Route>
            <Route path="/delete" component={DeleteStudent}>
              
            </Route>
            <Route path="/View" component={ViewStudent}>
              
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  