import React, {Component} from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { userActions } from '../../../../_actions';
class Singin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

	render() {
		const { username, password, submitted } = this.state;
		console.log(this.state)
		return ( 
			<div className="login-section">
	          <div className="form-login">
	          <form name="form" onSubmit={this.handleSubmit}>
	            <input name="username" value={username} onChange={this.handleChange} type="text" placeholder="Tên tài khoản" id="email_login" />
	            <input name="password" value={password} onChange={this.handleChange} type="password" placeholder="Mật khẩu" id="password_login" />
	            <button type="submit" className="button_login btn btn-lg">Đăng nhập</button>
	            <a href="#qmk" className="forget-password-link">Quên mật khẩu</a>
	          </form>
	          </div>
	          <div className="social-login">
	            <span>Hoặc đăng nhập bằng:</span>
	            <a href="https://truyenqq.com/dang-nhap-facebook.html?url=https://truyenqq.com/index.html" className="facebook-link"><span className="facebook-icon" /></a>
	            <a href="https://truyenqq.com/dang-nhap-google.html?url=https://truyenqq.com/index.html" className="google-link"><span className="google-icon" /></a>
	          </div>
	        </div>
		);
	}
}

export default Singin;