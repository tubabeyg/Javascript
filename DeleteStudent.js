import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';

const API1 = 'http://localhost:5000/student/delete/';
const API = 'http://localhost:5000/student/view';
class Delete extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
    students: [],
  };
   
   this.delstudent.bind(this);
          }
  delstudent=(e)=> {
    e.preventDefault();
    let name=this.refs.list.value;
   fetch(API1+name, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }}).then(function(response) {
      if (response.ok) {
        alert('Record Deleted Successfully')
        return true;
            } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
          })
    }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ students: data }));
  }
  render() {
    const { students } = this.state;

    return (<div align="center">
    <h1>Select Student to Delete</h1>
<form name="del">
<select ref="list" align="center">
                 {users.map(user =>
                 <option key={student.rollno} value={student.rollno}>
            {student.rollno}</option>
                 )}
                     </select>   
                     <Button className="button" variant="info" size="lg" onClick={this.delstudent}>Delete</Button>{' '}               
                    
</form>
      </div>
    );

  }

}

export default Delete;