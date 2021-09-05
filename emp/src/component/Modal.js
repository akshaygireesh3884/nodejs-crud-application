import axios from "axios";
import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class Box extends Component {
  constructor(props)
  {
    super() ;
    this.state = {
      isOpen: false,
      data: [] };
  }
  
  

  componentDidMount(){
    axios.get(`http://localhost:8080/api/v1/employeeserv/employees/7`).then(response =>{
            this.setState({ data: response.data })
        }
   )
   .catch(error=>console.log(error));
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
  console.log(this.state.data);
    return (
      <>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Button variant="primary" onClick={this.openModal}>
            Launch demo modal
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.data.firstName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                  <div><span>ID:</span><span>{this.state.data.id}</span></div>
                  <div><span>First Name:</span><span>{this.state.data.firstName}</span></div>
                  <div><span>Last Name:</span><span>{this.state.data.lastName}</span></div>
                  <div><span>Role:</span><span>{this.state.data.role}</span></div>
                  <div><span>Designation:</span><span>{this.state.data.designation}</span></div>
                  <div><span>Salary:</span><span>{this.state.data.salary}</span></div>
                  <div><span>DOJ:</span><span>{this.state.data.doj}</span></div>
                  <div><span>Address:</span><span>{this.state.data.address}</span></div>

                  {/* <label></label><br/>
                  <label></label><br/>
                  <label>Role:</label><br/>
                  <label>Designation:</label><br/>
                  <label>Salary:</label><br/>
                  <label>DOJ:</label><br/>
                  <label>Address:</label> */}
                            {/* <td>{this.state.data.id}</td>
                            <td>{this.state.data.firstName}</td>
                            <td>{this.state.data.lastName}</td>
                            <td>{this.state.data.role}</td>
                            <td>{this.state.data.designation}</td>
                            <td>{this.state.data.salary}</td>
                            <td>{this.state.data.doj}</td>
                            <td>{this.state.data.address}</td> */}

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Box;