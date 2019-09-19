import React, {Component} from 'react';
import {Header} from './components/Header';
import { TopHeader } from './components/TopHeader';
import './style.css';

import Signin from './components/Signin';
import Signup from './components/Signup';
import { connect } from 'react-redux';
class Headers extends Component {
	constructor(props) {
		super(props);

		
		this.state = {
			userData: null
		}
	}



	render() {
		let isLogin = this.props.loggedIn; 
		return (
		    <div className="main-header">
			  <TopHeader isLogin={isLogin} />
			  <Header isLogin={isLogin} />


				<div className="modal qr-modal">
				  <div className="modal-background" />
				  <div className="modal-content">
				    <div className="qr-section">
				      <div className="caption">Quét mã QRCODE để tải ứng dụng QQ</div>
				      <img className="qr-img" src="https://truyenqq.com/template/frontend/images/app-qrcode.png" alt="qr" />
				      <div className="caption">Hoặc tải từ kho ứng dụng</div>
				      <ul>
				        <li><a rel="nofollow" href="https://itunes.apple.com/us/app/truyenqq/id1282215661?ls=1&mt=8"><span className="app-store-icon" /></a></li>
				        <li><a rel="nofollow" href="https://play.google.com/store/apps/details?id=com.truyenqq.truyen"><span className="google-play-icon" /></a></li>
				      </ul>
				    </div>
				    {/* /.qr-section */}
				    <button className="close-button close-icon" />
				    {/* /.close-button */}
				  </div>
				</div>



			</div>
			
		);
	}
}
function mapState(state) {
	const { loggedIn } = state.authentication;
    return { loggedIn };
}


const connectedHeaderPage = connect(mapState)(Headers);
export { connectedHeaderPage as Headers };