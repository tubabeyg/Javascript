import React from 'react';
const API = 'http://localhost:5000/student/views';
const API2 = 'http://localhost:5000/student/view/name/';
const API1 = 'http://localhost:4000/student/editstu/';
class editemp extends React.Component {
  constructor() {
    super();
   this.state = {
    students: [],
   student:[],
    name:''
     };
   this.onChangeTitle = this.onChangeTitle.bind(this);
   this.editstu.bind(this);
   this.updatestu.bind(this);
          }
  editstu=(e)=> {
    e.preventDefault();
    let name=this.refs.list.value;
           fetch(API2+name)
      .then(response => response.json())
      .then(data => this.setState({ student: data }));
       }
    updatestu=(e)=> {
      e.preventDefault();
       
    let name=this.refs.name.value;
    let age=this.refs.age.value;
    let rollno=this.refs.rollno.value;    
  let data={name:name,age:age,rollno:rollno};
      fetch(API1, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }}).then(function(response) {
          if (response.ok) {
            alert('Record Updated Successfully')    
          } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
          }
        })

      }
      onChangeTitle(e) {
        this.setState({
          name: e.target.value
        });
      }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ students: data }));
  }
  render() {
    const { students } = this.state;
    return (<div align="center">
    <h1>Select Student</h1>
<form name="del">
<select ref="list" align="center">
                 {students.map(student =>
                 <option key={student.rollno} value={student.rollno}>
            {student.rollno}</option>
                 )}
                     </select>                  
                     <button onClick={this.editstu}>
        Edit 
      </button>
</form>
<br></br>




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
</div>

    );}}

export default editstu;