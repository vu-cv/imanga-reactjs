import React, {Component} from 'react';
import { Footer } from '../../layouts';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import { userActions } from '../../_actions';
class Account extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
				firstName: '',
				lastName: '',
				birthday: '',
				phone: '',
				sex: 0
			}
		}

		this.props.getMe();

		this.handleChange = this.handleChange.bind(this)
		this.updateUserInfo = this.updateUserInfo.bind(this)
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

	updateUserInfo(e) {
		e.preventDefault();
		let user = this.props.user;
		console.log(user)
		this.props.updateUser(user.user.id, this.state.user)
	}

	render() {
		let user = this.props.user;
		user = user.user
		const userState = this.state.user;
		console.log(userState)
		let me = null;

		if (this.props.users.item) {
			me = this.props.users.item;
		}
	  return (
	  	<div className="wrap-content">
	  		<Helmet>
                <title>Account</title>
                <link rel="stylesheet" href="/css/account.css" />
            </Helmet>
	  			<section className="main-content">
				  <div className="container">
				    <div className="messages columns">
				      <div className="column is-narrow left pc">
				        <ul className="nav-user">
				          <li><a className="li01 is-active" href="">Quản lý tài khoản</a></li>
				          <li><a className="li02 " href="">Tin nhắn</a></li>
				          <li><a className="li03 " href="">Đổi mật khẩu</a></li>
				          {/*<li><a class="li04 regiter-team"href="group.html">Đăng ký nhóm dịch</a></li>
					        <li><a class="li05 collection" href="collection.html">Quyên góp</a></li>*/}
				        </ul>
				      </div>
				      <div className="column columns">
				        <div className="user-right column">
				          <div className="img"><img className="image-avatar" src="http://avatar.mangaqq.com/160x160/avatar_1566922402.jpg?thang=t241" alt="" /></div>
				          <input type="file" multiple="false" name="files[]" id="uploadavatar" style={{display: 'none'}} />
				          <button id="btn-uploadavatar" className="button is-danger btn-avatar">Chọn hình</button>
				        </div>
				        <div className="user-main column">
				          <div className="level title">
				            <p className="level-left has-text-weight-bold">Thông tin tài khoản</p>
				          </div>
				          <form onSubmit={this.updateUserInfo}>
				            <div className="form-change-pass">
				              <div className="field">
				                <p className="txt">UID:</p>
				                <p className="control">
				                  <input className="input form-control" type="text" defaultValue={user._id} disabled />
				                </p>
				              </div>
				              <div className="field">
				                <p className="txt">Email:</p>
				                <p className="control">
				                  <input className="input form-control" type="email" defaultValue={user.email} disabled />
				                </p>
				              </div>
				            </div>
				            <div className="level title user-title">
				              <p className="level-left has-text-weight-bold">Thông tin cá nhân</p>
				            </div>
				            <div className="form-change-pass user-form">
				              <div className="field">
				                <p className="txt">Tên</p>
				                <p className="control">
				                  <input value={userState.firstName} onChange={this.handleChange} className="input form-control" type="text" id="firstName" name="firstName" />
				                </p>
				              </div>
				              <div className="field">
				                <p className="txt">Họ</p>
				                <p className="control">
				                  <input value={me && me.lastName} onChange={this.handleChange} className="input form-control" type="text" id="last_name" name="lastName"/>
				                </p>
				              </div>
				              <div className="field">
				                <p className="txt">Ngày sinh</p>
				                <p className="control">
				                  <input value={userState.birthday} onChange={this.handleChange} className="input form-control" type="date" id="birthday" name="birthday"/>
				                  {/* defaultValue="2019-08-17"*/}
				                </p>
				              </div>
				              <div className="field">
				                <p className="txt">Điện thoại</p>
				                <p className="control">
				                  <input value={userState.phone} onChange={this.handleChange} className="input form-control" id="phone" name="phone" type="number"  />
				                </p>
				              </div>
				              <div className="field user-field">
				                <span className="txt">Giới tính</span>
				                <input onChange={this.handleChange} type="radio" id="gender1" name="sex" defaultValue={1} />
				                <label htmlFor="gender1">Nam</label>
				                <input onChange={this.handleChange} type="radio" id="gender2" name="sex" defaultValue={0} defaultChecked />
				                <label htmlFor="gender2">Nữ</label>
				              </div>
				              <input type="hidden" id="avatar" name="avatar" defaultValue="avatar_1566922402.jpg" />
				              <input type="hidden" id="inputDelImage" name="inputDelImage" defaultValue />
				              <div className="field">
				                <p className="control">
				                  <button className="button is-danger" type="submit">Lưu</button>
				                </p>
				              </div>
				            </div>
				          </form>
				        </div>
				      </div>
				    </div>
				  </div>
				</section>

	  		<Footer />

	  	</div>
	  );
	}
}

function mapState(state) {
   	const { user } = state.authentication;
   	const { users } = state;
    return { user, users };
}
const actionCreators = {
    updateUser: userActions.edit,
    getMe: userActions.getMe
}

const connectedAccountPage = connect(mapState, actionCreators)(Account);
export { connectedAccountPage as Account };