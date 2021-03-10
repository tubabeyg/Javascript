import React from 'react';
import './../App.css';
const API = 'http://localhost:5000/student/add';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.refresh=this.refresh.bind(this);
    this.state = {
      students: {},
      name:'',
      age:'',
      rollno: '',
 
    };
  }
  refresh=()=>{
    this.setState({counter:this.state.counter++});
  }
  add(e) {
    e.preventDefault();
    
    let name=this.refs.name.value;
    let age=this.refs.age.value;
    let rollno=this.refs.rollno.value;
    
  let data={name:name,age:age,rollno:rollno};
  fetch(API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }}).then(function(response) {
      if (response.ok) {
        alert('Record Added Successfully')    
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    })
  this.refresh();
  }
  render() {
    return (
  <div class="container">
    <h2>Add New Student</h2>
    <form name="addform">
    <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Enter Name </label>
            <input type="text"  ref="name"  name="name" id="inputEmail4" ></input>
          </div>
          
  </div>
    <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Enter age</label>
              <input type="number" ref="age"  name="age"  id="inputCity"></input>
            </div>
            </div>
  <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Enter Roll number</label>
              <input type="number" ref="rollno"  name="rollno"  id="inputCity"></input>
            </div>
            </div>
  
      
 
  
    
  

  <button type="submit" class="btn btn-danger" onClick={this.add}>Create</button>

  </form>
  <br></br><br></br><br></br>
  </div>









);
    }
  }

export default Add;