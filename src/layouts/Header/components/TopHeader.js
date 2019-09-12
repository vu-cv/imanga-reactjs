import React, {Component} from 'react';
import HasLogin from './HasLogin';
import { Link } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}


	render() {
		var isLogin = this.props.isLogin;
		return (
			  <section id="top-header" className="hidden-xs hidden-sm hidden-md">
			    <nav className="navbar navbar-default" role="navigation">
			      <div className="container">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar" />
			            <span className="icon-bar" />
			            <span className="icon-bar" />
			          </button>
			          <a className="navbar-brand" href="/">
			            <img src="/images/logo.png" alt="" />
			          </a>
			        </div>
			        <div className="collapse navbar-collapse navbar-ex1-collapse">
			          <form className="navbar-form navbar-left" role="search">
			            <div className="form-group top-search">
			              <input type="text" className="form-control" placeholder="Bạn chỉ việc nhập từ khóa, còn lại để tuấn lo" />
			              <button type="submit" className="btn btn-default">
			                <i className="fa fa-search" />
			              </button>
			            </div>
			          </form>
			          <ul className="nav navbar-nav navbar-right">
			            <li>
			              <Link to="/history">Lịch sử</Link>
			            </li>
			            <li>
			              <Link to="/follow">Theo dõi</Link>
			            </li>
			            <li>
			              <a className="download-app" href="#1"><i className="fa fa-android" /> Tải app</a>
			            </li>
			            
			            <HasLogin isLogin={isLogin} />
			          </ul>
			        </div>
			      </div>
			    </nav>
			  </section>
		);
	}
}



export default Header;
