import React, {Component} from 'react';
import { Footer } from '../../layouts';
import {Pagination, MangaPage} from '../../layouts';
import { connect } from 'react-redux';
import { mangaActions } from '../../_actions';
import {Helmet} from "react-helmet";
import { MangaItem } from "../../layouts";

class Female extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getMangas(null, 'updatedAt:DESC', 'isMale_ne=true');
	}

	render() {
		let { mangas } = this.props;
		console.log(mangas)
		let lists = [];

		if (mangas.items) {
			mangas.items.map(function(manga, index) {
				lists.push(<MangaItem manga={manga} key={index}/>);
			})
		}

		let title = "Truyện con gái";


		// console.log(this.props)
	  return (
	  	<MangaPage title={title} mangas={lists} />
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


const connectedFemalePage = connect(mapState, actionCreators)(Female);
export { connectedFemalePage as Female };