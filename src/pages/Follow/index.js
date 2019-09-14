import React, {Component} from 'react';
// import Header from '../../components/layouts/Header';
import Footer from '../../layouts/Footer';
import {Pagination} from '../../layouts';
// import './style.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { followActions } from '../../_actions';
import {Helmet} from "react-helmet";
import { MangaItem } from "../../layouts";

class Follow extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const { loggedIn } = this.props;
		this.props.getFollows(loggedIn);
	}

	render() {
		const { follows } = this.props;
		let mangas = [];

		if (follows.items) {
			follows.items.map(function(manga, index) {
				mangas.push(<MangaItem key={index} manga={manga}  />)
			})
		}

		let pathName = this.props.match.path;
		let title = "Theo Dõi";

		if (pathName === "/history") {
			title = "Lịch Sử Đọc Truyện";
		}

		// console.log(this.props)
	  return (

	  	<div className="wrap-content">
	  		<Helmet>
                <title>Đang theo dõi</title>
                <link rel="stylesheet" href="/css/category.css" />
                <script type="text/javascript" data-type={title} src="/js/header.js"></script>
            </Helmet>
	  			<section className="main-content">
				  <div className="container story-list">
				    <div className="title-list">{title}</div>
				    <div className="cat-list">
				      <div className="sr-only">phải có thì mới đúng</div>
				      {mangas}
				    </div>
				    {/* /.list-stories */}
				    <Pagination />
				  </div>
				</section>

	  		<Footer />

	  	</div>
	  );
	}
}

function mapState(state) {
    const { follows } = state;
    const { loggedIn } = state.authentication;
    return { follows, loggedIn };
}

const actionCreators = {
    getFollows: followActions.getAll,
}

const connectedFollowPage = connect(mapState, actionCreators)(Follow);
export { connectedFollowPage as Follow };