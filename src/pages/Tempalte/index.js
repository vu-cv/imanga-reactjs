import React, {Component} from 'react';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import './style.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Detail extends Component {

	render() {
	  return (
	  	<div className="wrap-content">
	  		<Header />

	  		<Footer />

	  	</div>
	  );
	}
}

export default Detail;
