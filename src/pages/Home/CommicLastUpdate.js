import React, {Component} from 'react';
// import Header from '../../components/layouts/Header';
import { Footer } from '../../layouts';
// import './style.css';

import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
// import CommicItem from "../../layouts/CommicItem";
import { MangaItem } from "../../layouts";
// import axios from 'axios';
import { mangaActions, chapterActions } from '../../_actions';
import { connect } from 'react-redux';
import { apiManga } from '../../config'
class CommicLastUpdate extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};


	}

	render() {
		const viewmoreStyle = {clear: 'both'};
		let { mangas, chapters } = this.props;
		let lists = [];


		if (mangas.items) {
			let result = mangas.items.slice(0,18);
			result.map(function(manga, index) {
				lists.push(<MangaItem manga={manga} key={index}/>);
			})
		}

		
		

	  return (
	  	<div className="latest">
	        <div className="col-sm-12">
	          <div className="caption lists-title" id="list-update">
	          	<Link to={'/update-commic'}>
	          <span className="starts-icon" />Truyện mới cập nhật</Link>
	          </div>
	        </div>

	        {lists}

	        <div style={viewmoreStyle} className="has-text-centered text-center">
	          <Link to="/truyen-moi-cap-nhat.html" className="view-more-btn">Xem thêm nhiều truyện</Link>
	        </div>
      </div>
	  );
	}
}

function mapState(state) {
	const { mangas } = state;
    return { mangas };
}

const actionCreators = {
	getMangas: mangaActions.getAll,
};

const connectedCommicLastUpdatePage = connect(mapState, actionCreators)(CommicLastUpdate);
export { connectedCommicLastUpdatePage as CommicLastUpdate };