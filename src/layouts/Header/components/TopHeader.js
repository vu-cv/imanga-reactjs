import React, {Component} from 'react';
import HasLogin from './HasLogin';
import { Link } from "react-router-dom";
import { history } from '../../../_helpers';
import { connect } from 'react-redux';
import { mangaActions } from '../../../_actions';
class TopHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			textSearch: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSearch = this.onSearch.bind(this)
		
	}

	onChange(e){
		this.setState({
			textSearch: e.target.value
		})
	}

	onSearch(e) {
		/*e.preventDefault();
		let { textSearch } = this.state;
		console.log(textSearch)
		history.push('/search/'+encodeURI(textSearch))*/
	}



	render() {
		console.log(this.props)
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
			          <form action='/search' method="get" className="navbar-form navbar-left" role="search">
			            <div className="form-group top-search">
			              <input type="text" name="q" onChange={this.onChange} className="form-control" placeholder="Bạn chỉ việc nhập từ khóa, còn lại để tuấn lo" />
			              <button type="submit" className="btn btn-default">
			                <i className="fa fa-search" />
			              </button>
			            </div>
			          </form>
			          <ul className="nav navbar-nav navbar-right">
			            <li>
			              <Link to="/lich-su.html">Lịch sử</Link>
			            </li>
			            <li>
			              <Link to="/theo-doi.html">Theo dõi</Link>
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

function mapState(state) {
	const { mangas} = state;
    return { mangas };
}

const actionCreators = {
	getMangas: mangaActions.getAll,

};

const connectedTopHeaderPage = connect(mapState, actionCreators)(TopHeader);
export { connectedTopHeaderPage as TopHeader };