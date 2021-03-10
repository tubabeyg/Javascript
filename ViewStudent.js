import React from 'react';
class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/student/view')
      .then(response => response.json())
      .then(data => this.setState({students: data }));
  }
  
  render() {
    const { students } = this.state;

    return (<div>
<table align="center" border="1">
      <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Roll no</th>
        </tr>

        {students.map(student =>
          <tr>
             <td>{student.name}</td>
             <td>{student.age}</td>
             <td>{student.rollno}</td>
          </tr>
        )}
     </table>
      </div>
    );

  }
}

export default View;