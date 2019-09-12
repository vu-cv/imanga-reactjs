import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}


	render() {
		const isLogin = this.props.isLogin;
		let liClassName = "has-login";
		let showIsLogin = <div>
							  <Link to="/login" id="btn-login" className="btn btn-primary">Đăng nhập</Link>
							  <Link to="/register" id="btn-signup" className="btn btn-danger">Đăng ký</Link>
							</div>;
		if (isLogin) {
			liClassName = "not-has-login";
			showIsLogin = <div>
              <div className="top-buttons">
                <div className="notify center dropdown" data-id="notification">
                  <i className="fa fa-bell dropdown-toggle" data-toggle="dropdown" />
                  <div className="list-messages dropdown-menu">
                    <div className="title-message">Thông báo</div>
                    <ul>
                      <li className="no-result" style={{padding: '10px'}}>Không Có Thông Báo Nào!</li>
                    </ul>
                  </div>
                </div>
                <div className="notify center dropdown">
                  <i className="fa fa-envelope dropdown-toggle" data-toggle="dropdown" />
                  <div className="list-messages">
                    <div className="title-message">Tin nhắn</div>
                    <ul>
                      <li className="no-result" style={{padding: '10px'}}>Không Có Tin Nhắn Nào!</li>
                    </ul>
                  </div>
                </div>
                <div className="notify user center dropdown">
                  <span className="avatar-menu" data-toggle="dropdown"><img src="https://truyenqq.com/template/frontend/images/noavatar.png" alt="no-avata" /></span>
                  <ul className="user-links dropdown-menu">
                    <li>
                      <Link to="/account"><i className="fa fa-user-circle" /> Quản lý tài khoản</Link>
                    </li>
                    <li>
                      <Link to="/follow"><i className="fa fa-heart" /> Truyện đang theo dõi</Link>
                    </li>
                    <li>
                      <Link to="/history"><i className="fa fa-history" /> Lịch sử đọc truyện</Link>
                    </li>
                    <li>
                      <Link to="/message"><i className="fa fa-envelope" /> Tin nhắn</Link>
                    </li>
                    <li>
                      <Link to="/password"><i className="fa fa-lock" /> Đổi mật khẩu</Link>
                    </li>
                    <li>
                      <Link to="/login"><i className="fa fa-sign-out-alt" /> Đăng xuất</Link>
                    </li>
                  </ul>
                </div>
                <div className="head_menu smp"><span>&nbsp;</span></div>
              </div>
            </div>;
        }

		return (
			<li className={liClassName} >
				{showIsLogin}
			</li>
            
		);
	}
}



export default Header;
