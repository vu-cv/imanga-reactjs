import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import { MangaItem, MangaPage } from '../../layouts';
import { mangaActions } from '../../_actions';
class Sort extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
		

	}

	componentDidMount() {
		const { params } = this.props.match;
		console.log(params.sortBy)
		if (params.sortBy == 'like' ) {
			this.props.getMangas(18, 'likeCount:DESC');
			this.setState({
				title: 'Yêu thích'
			})
		}
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


		

		// console.log(this.props)
	  return (
	  	<MangaPage title={this.state.title} mangas={listMangas} />
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

const connectedSortPage = connect(mapState, actionCreators)(Sort);
export { connectedSortPage as Sort };