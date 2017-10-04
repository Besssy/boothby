import React, { Component } from 'react';
import { Container, Row} from 'reactstrap';
import '../Styles/main.scss';

class Home extends Component {
  render() {
    return (
      	<Row className="home">
	        <div className="col-6 d-flex justify-content-end text-center align-items-center">
	        	<div className="col-10">
		        	<h1 className="title-white"> Welcome </h1>
		        	<h1 className="display-3"> to Bouthby Academy! </h1>
		        	<p> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor <br />
		        		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
		        	 	nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
		        		Duis aute irure dolor in reprehenderit.
		        	</p>
	        	</div>
	        </div>
	        <div className="col-6">
	        	<div>
	        		<img src="/assets/drinks.jpg" />
	        	</div>
	        </div>
        </Row>
    );
  }
}




export default Home;


