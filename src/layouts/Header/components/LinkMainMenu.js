import React, {Component} from 'react';
import { Link } from "react-router-dom";


class LinkMainMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let url = this.props.url;
		let text = this.props.text;
		return ( 
			<li>
				<Link to={url}>{text}</Link>
			</li>
		);
	}
}

export default LinkMainMenu;