import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


export default class CreateStudent extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentContactno = this.onChangeStudentContactno.bind(this);
        this.onChangeStudentInstitute = this.onChangeStudentInstitute.bind(this);
        this.onChangeStudentMessage = this.onChangeStudentMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          email: '',
          Contactno: '',
          Institute: '',
          Message: ''
        }
      }
    
      onChangeStudentName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeStudentEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onChangeStudentContactno(e) {
        this.setState({contactno: e.target.value})
      }
      onChangeStudentInstitute(e) {
        this.setState({Institute: e.target.value})
      }
      onChangeStudentMessage(e) {
        this.setState({message: e.target.value})
      }

      onSubmit(e) {
        e.preventDefault()
    
        console.log(`Student successfully created!`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Contact no: ${this.state.contactno}`);
        console.log(`Institute: ${this.state.Institute}`);
        console.log(`Message: ${this.state.message}`);
        
        this.setState({name: '', email: '', contactno: '',Institute: '',message:''})
      }
    render() {
    return (<div class="form-wrapper">
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Contact No</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
       
        <Form.Group controlId="Name">
          <Form.Label>Institute</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
       
        <Form.Group controlId="Name">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
       
        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}