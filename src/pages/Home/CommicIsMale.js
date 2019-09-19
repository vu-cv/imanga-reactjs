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
class CommicIsMale extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};


	}

	render() {
		let { mangas } = this.props;
		let lists = [];

		if (mangas.items) {

			let result = mangas.items.filter(function(index) {
				return index.isMale
			});

			result = result.slice(0, 12);
			
			result.map(function(manga, index) {
				lists.push(<MangaItem manga={manga} key={index}/>);
			})
		}

		
	  return (
	  	<div className="male">
	        <div className="col-sm-12">
	          <div className="caption lists-title" id="list-male">
	          	<Link to={'/male-commic'}><span className="male-icon" />Truyện con trai</Link>
	          </div>
	        </div>

	        {lists}
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

const connectedCommicIsMalePage = connect(mapState, actionCreators)(CommicIsMale);
export { connectedCommicIsMalePage as CommicIsMale };