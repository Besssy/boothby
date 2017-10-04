import React, { Component } from 'react';
import { Container, Row} from 'reactstrap';
import '../Styles/main.scss';

class About extends Component {
  render() {
    return (
        <Row className="about">
	        <div className="col-6 offset-md-6 text-center d-flex justify-content-start align-items-center">
	        	<div className="col-10">
		        	<h1 className="display-3"> What </h1>
		        	<h1> we do </h1>
		        	<p> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor <br />
		        		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
		        	 	nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
		        		Duis aute irure dolor in reprehenderit.
		        	</p>
		        </div>
	        </div>
        </Row>
    );
  }
}




export default About;


