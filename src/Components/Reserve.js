import React, { Component } from 'react';
import { Container, Row, Form, Input, Button} from 'reactstrap';
import '../Styles/main.scss';

class Reserve extends Component {
  render() {
    return (
      <div id="aboutme">
        <Row className="reserve">
	        <div className="col-6 text-center">
	        	<h1 className="display-3"> Reserve </h1>
	        	<p> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor <br />
	        		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
	        	 	nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
	        		Duis aute irure dolor in reprehenderit.
	        	</p>
	        </div>
	        <div className="col-6">
	        	<div className="col-8">
		        	<Form>
		        		<Input type="text" name="fullname" placeholder="Name" />
		        		<Input type="text" name="date" placeholder="Date" />
		        		<Input type="email" name="email" placeholder="E-mail" />
		        		<Input type="textarea" name="text" placeholder="Message" />
		        		<Button>Reserve</Button>
		        	</Form>
		        </div>
	        </div>
        </Row>
      </div>
    );
  }
}




export default Reserve;


