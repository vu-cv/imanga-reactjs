import React, {Component} from 'react';
import { Footer } from '../../layouts';
import {Pagination, MangaPage} from '../../layouts';
import { connect } from 'react-redux';
import { mangaActions } from '../../_actions';
import {Helmet} from "react-helmet";
import { MangaItem } from "../../layouts";
import queryString from 'query-string';
class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {};

		const params = queryString.parse(this.props.location.search);
		console.log(params)
		this.props.getMangas(18, null, 'name_contains='+params.q);
	}

	componentDidMount() {
		console.log('hahga')
	}

	render() {
		const { mangas } = this.props;
		let listMangas = [];
		console.log(mangas)

		if (mangas.items) {
			mangas.items.map(function(manga, index) {
				listMangas.push(<MangaItem key={index} manga={manga}  />)
			})
		}

		let title = "Tìm kiếm";


		// console.log(this.props)
	  return (
	  	<MangaPage title={title} mangas={listMangas} />
	  );
	}
}

function mapState(state) {
    const { mangas } = state;
    return { mangas };
}

const actionCreators = {
    getMangas: mangaActions.getAll,
}

const connectedSearchPage = connect(mapState, actionCreators)(Search);
export { connectedSearchPage as Search };