import React, {Component} from 'react';
// import { Link } from "react-router-dom";


class Singup extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let url = this.props.url;
		let text = this.props.text;
		return ( 
			<div className="register-section">
	          <div className="form-login">
	            <input type="email" placeholder="Email" id="email_register" />
	            <input type="password" placeholder="Mật khẩu" id="password_register" />
	            <div className="login-captcha">
	              <input type="text" className="form-control" id="captcha_register" name="captcha_register" placeholder="Mã xác nhận" />
	              <img src="" alt="anh" />
	              <span className="refresh-captcha" data-type="register"><i className="fa fa-refresh" /></span>
	              <input type="hidden" name="captcha-register" id="captcha-register" defaultValue="Q556f20933fecd0c09f6d7069ef8a0e61" />
	            </div>
	            <button type="submit" id="button_register">Đăng ký</button>
	          </div>
	        </div>
		);
	}
}

export default Singup;