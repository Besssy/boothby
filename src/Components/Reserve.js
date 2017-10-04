import React, { Component } from 'react';
import { Container, Row, Form, Input, Button} from 'reactstrap';
import '../Styles/main.scss';

class Reserve extends Component {
  render() {
    return (
	    <Row className="reserve">
	        <div className="col-6 d-flex justify-content-end text-center align-items-center">
	        	<div className="col-10">
		        	<h1 className="display-3"> Reserve </h1>
		        	<p> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor <br />
		        		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
		        	 	nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
		        		Duis aute irure dolor in reprehenderit.
		        	</p>
		        </div>
	        </div>
	        <div className="col-6">
	        	<div className="col-6">
		        	<Form>
		        		<Input type="text" name="fullname" className="client-form" placeholder="Name" />
		        		<Input type="text" name="date" className="client-form" placeholder="Date" />
		        		<Input type="email" name="email" className="client-form" placeholder="E-mail" />
		        		<Input type="textarea" name="text" className="client-form client-form-message" placeholder="Message" />
		        		<Button className="red-button"><h4>Reserve</h4></Button>
		        	</Form>
		        </div>
	        </div>
	    </Row>
    );
  }
}




export default Reserve;


