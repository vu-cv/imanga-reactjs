import React, {Component} from 'react';
import { Footer } from '../../layouts';
import {Pagination, MangaPage} from '../../layouts';
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

		let title = "Theo Dõi";


		// console.log(this.props)
	  return (
	  	<MangaPage title={title} mangas={mangas} />
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