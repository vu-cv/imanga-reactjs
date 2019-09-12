import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
// import './style.css';
import { history } from '../../_helpers';
import {Helmet} from "react-helmet";

class Login extends Component {
	constructor(props) {
		super(props);
		this.props.logout();

		this.state = {
			username: '',
			password: '',
			submitted: false
		}



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
		const { loggingIn } = this.props;
		const { username, password, submitted } = this.state;
		return(
			<div className="login-wraper">
				<Helmet>
	                <title>Đăng nhập</title>
	                <link rel="stylesheet" href="/css/login.css" />
	            </Helmet>
				
			  <div className="login-content">
			    <span className="top-caption">
			      Dù ai di ngược về xuôi,<br />
			      đến giờ đọc truyện cứ vào QQ
			    </span>
			    <div>
			      <div className="tabs-buttons">
			        <Link to="/login" className="is-active">Đăng nhập</Link>
			        <Link to="/register">Đăng ký</Link>
			      </div>
			      <div className="tabs-contents">
			        <div className="login-section is-active">
			          <div className="form-login">
			          	<form name="form" onSubmit={this.handleSubmit}>
				            <input name="username" type="text" placeholder="Tên tài khoản" id="email_login" value={username} onChange={this.handleChange}/>
				            <input name="password" value={password} type="password" placeholder="Mật khẩu" id="password_login" onChange={this.handleChange}/>
				            <button type="submit" className="button_login btn btn-lg">Đăng nhập</button>
				            {loggingIn &&
	                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
	                        }
				            <a href="#" className="forget-password-link">Quên mật khẩu</a>
			            </form>
			          </div>
			          <div className="social-login">
			            <span>Hoặc đăng nhập bằng:</span>
			            <a href="https://truyenqq.com/dang-nhap-facebook.html?url=https://truyenqq.com/index.html" className="facebook-link"><span className="facebook-icon" /></a>
			            <a href="https://truyenqq.com/dang-nhap-google.html?url=https://truyenqq.com/index.html" className="google-link"><span className="google-icon" /></a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

		);
	}

}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout,
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };