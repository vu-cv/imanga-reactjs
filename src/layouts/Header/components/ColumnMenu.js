import React, {Component} from 'react';
// import { Link } from "react-router-dom";


class ColumnMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return ( 
			<div className="column">
		        <ul className="mega_list">
		          {this.props.children}
		        </ul>
		      </div>
		);
	}
}

export default ColumnMenu;