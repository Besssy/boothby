import React, { Component } from 'react';
import { Container, Row} from 'reactstrap';
import '../Styles/main.scss';
import fontawesome from '@fortawesome/fontawesome';

class Contact extends Component {
  render() {
    return (
      	<Row className="contact">
      		<div className="col-6">
	        	<div>
	        		
	        	</div>
	        </div>
	         <div className="col-6 d-flex justify-content-start text-center align-items-center">
	        	<div className="col-10">
		        	<h1 className="display-3"> Contact </h1>
		        	<p>Address: 32-38 Albert St, Edinburgh EH7 UK </p>
		        	<h2>800 - 100 - 2345 </h2>
		        	<div className="social-icons">
		        		<i className="fab fa-2x fa-facebook-square"></i>
		        		<i className="fab fa-2x fa-twitter-square"></i>
		        		<i className="fab fa-2x fa-pinterest-square"></i>
		        		<i className="fab fa-2x fa-instagram"></i>
		        	</div>
	        	</div>
	        </div>
        </Row>
    );
  }
}




export default Contact;


