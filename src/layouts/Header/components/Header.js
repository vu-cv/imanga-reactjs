import React, {Component} from 'react';
import { Link } from "react-router-dom";

import MenuItem from './LinkMainMenu';
import MenuDropdown from './MenuDropdown';
import ColumnMenu from './ColumnMenu';
import { connect } from 'react-redux';
import { categoryActions } from '../../../_actions';
class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	componentDidMount() {
        this.props.getCategories();
    }


	render() {
		const { categories } = this.props;
		let columnMenu = [];

		let elemMenu = [];

		var index = 0;
		if (categories.items) {
			categories.items.map(function(category, i) {
				elemMenu.push(<li key={i}><a href={'/category/' + category._id}>{category.name}</a></li>);
				if (i == index+6) {
					// console.log(elemMenu)

					columnMenu.push(<ColumnMenu key={i}>{elemMenu}</ColumnMenu>);
					elemMenu = [];
					index+=7;
				}

			})
		}
		// console.log(columnMenu)

		let isLogin = this.props.isLogin;
		// console.log(isLogin)
		let showMenuIsLogin = <Link className="navbar-brand hidden-lg menu-mb" to="/login" id="navbar-user-collapse">
			            <i className="fa fa-user-circle " />
			          </Link>;
		if (isLogin) {
			showMenuIsLogin = <a className="navbar-brand hidden-lg menu-mb" href="#user" data-toggle="collapse" data-target=".navbar-user-collapse">
			            <i className="fa fa-user-circle " />
			          </a>;
		}
		return (
			  <section id="header">
			    <nav className="navbar navbar-default" role="navigation">
			      <div className="container">
			        <div className="navbar-header hd-mb">
			          <Link className="navbar-brand hidden-lg menu-mb" to="/">
			            <i className="fa fa-home" />
			          </Link>
			          <Link className="navbar-brand hidden-lg menu-mb" to="/notify">
			            <i className="fa fa-bell" />
			          </Link>
			          <Link className="navbar-brand hidden-lg menu-mb" to="/message">
			            <i className="fa fa-envelope" />
			          </Link>
			          <Link className="navbar-brand hidden-lg menu-mb" to="#search" data-toggle="collapse" data-target=".navbar-ex1-collapse">
			            <i className="fa fa-search" />
			          </Link>
			          {showMenuIsLogin}
			          <button type="button" className="navbar-toggle  menu-mb" data-toggle="collapse" data-target=".navbar-ex1-collapse">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar" />
			            <span className="icon-bar" />
			            <span className="icon-bar" />
			          </button>
			          <Link to="/" className="navbar-brand hidden-xs hidden-sm">	
			            Trang chủ
			          </Link>
			          
			        </div>
			        <div className="collapse navbar-collapse navbar-ex1-collapse">
			          <ul className="nav navbar-nav">
			            <li className="hidden-lg">
			              <div className="form-group top-search">
			                <input type="text" className="form-control" placeholder="Bạn chỉ việc nhập từ khóa, còn lại để tuấn lo" />
			                <button type="submit" className="btn btn-default">
			                  <i className="fa fa-search" />
			                </button>
			              </div>
			            </li>
			            <li className="hidden-lg">
			              <Link to="/">Trang chủ</Link>
			            </li>
			            <MenuDropdown name="Thể Loại">
			            	{columnMenu}
			            </MenuDropdown>
			            <MenuDropdown name="Sắp Xếp">
			            	<ColumnMenu>
			            		<MenuItem url='/category' text="Ngày"/>
			            		<MenuItem url='/category' text="Tháng"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            	</ColumnMenu>
			            	<ColumnMenu>
			            		<MenuItem url='/category' text="Ngày"/>
			            		<MenuItem url='/category' text="Tháng"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            	</ColumnMenu>
			            	<ColumnMenu>
			            		<MenuItem url='/category' text="Ngày"/>
			            		<MenuItem url='/category' text="Tháng"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            		<MenuItem url='/category' text="Truyện Con Gái"/>
			            	</ColumnMenu>
			            	
			            </MenuDropdown>
			            
			            <MenuItem url='/category/test' text="Truyện Con Gái"/>
			            <MenuItem url='/category/test' text="Truyện Con Trai"/>
			            <MenuItem url='/history' text="Lịch Sử"/>
			            <MenuItem url='/follow' text="Theo Dõi"/>
			            <li>
			              <a href="#1">Thảo Luận</a>
			            </li>
			            <li>
			              <a href="#1">Fanpage</a>
			            </li>
			          </ul>
			        </div>
			        <div className="collapse hidden-lg navbar-collapse navbar-user-collapse">
			          <ul className="nav navbar-nav">
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
			              <Link to="/login">Đăng xuất</Link>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </nav>
			  </section>
		);
	}
}

function mapState(state) {
    const { category, categories } = state;
    return { category, categories };
}

const actionCreators = {
    getCategories: categoryActions.getAll,
    getCategory: categoryActions.getById
}

const connectedHeaderPage = connect(mapState, actionCreators)(Header);
export { connectedHeaderPage as Header };