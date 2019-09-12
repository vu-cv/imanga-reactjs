import React, {Component} from 'react';
// import { Link } from "react-router-dom";



class MenuDropdowm extends Component {
	constructor(props) {
		super(props);
    this.state = {};
	}

	render() {
		let name = this.props.name;
		return ( 
			<li className="dropdown">
              <a href="#1" className="dropdown-toggle" data-toggle="dropdown">{name} <b className="caret" /></a>
              <ul className="dropdown-menu ">
                <div className="container">
                  <div className="mega-list-wrapper">
                    <div className="columns">
                      {this.props.children}
                    </div>
                  </div>
                </div>
              </ul>
            </li>
		);
	}
}

export default MenuDropdowm;