import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
// import './style.css';
import { history } from '../../_helpers';
import {Helmet} from "react-helmet";

class Register extends Component {
	constructor(props) {
		super(props);
		// this.props.logout();

		this.state = {
			user: {
				username: '',
				email: '',
				password: ''
			},
			submitted: false
		}




		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });


	}

	handleSubmit(e) {
        e.preventDefault();
        
        this.setState({ submitted: true });

        const { user } = this.state;
        if (user.email && user.username && user.password) {
            this.props.register(user);
        }
    }

    

	render() {
		const { registering } = this.props;
		const { user, submitted } = this.state;
		console.log(this.state.user)
		return(
			<div className="login-wraper">
				<Helmet>
	                <title>Đăng ký</title>
	                <link rel="stylesheet" href="/css/login.css" />
	            </Helmet>
				
			  <div className="login-content">
			    <span className="top-caption">
			      Dù ai di ngược về xuôi,<br />
			      đến giờ đọc truyện cứ vào QQ
			    </span>
			    <div>
			      <div className="tabs-buttons">
			        <Link to="/login" >Đăng nhập</Link>
			        <Link to="/register" className="is-active">Đăng ký</Link>
			      </div>
			      <div className="tabs-contents">
			        <div className="register-section is-active">
					  <div className="form-login has-success">
					  	<form name="form" onSubmit={this.handleSubmit}>
						    <input name="username" className="form-control"  value={user.username} onChange={this.handleChange} type="text" placeholder="Tên tài khoản" />
						    <input name="email" value={user.email} onChange={this.handleChange} type="email" placeholder="Email" id="email_register" />
						    <input name="password" value={user.password} onChange={this.handleChange} type="text" placeholder="Mật khẩu" id="password_register" />

						    <button type="submit" id="button_register">Đăng ký</button>
					    </form>
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
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(Register);
export { connectedRegisterPage as Register };