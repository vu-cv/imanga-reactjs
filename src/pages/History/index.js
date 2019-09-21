import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import { MangaItem, MangaPage } from '../../layouts';
import { historyActions } from '../../_actions';

class History extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const { loggedIn } = this.props;
		// this.props.getHistorys(loggedIn);
	}

	render() {
		const { historys } = this.props;
		let mangas = [];

		if (historys.items) {
			historys.items.map(function(manga, index) {
				mangas.push(<MangaItem key={index} manga={manga}  />)
			})
		}


		let title = "Lịch sử đọc truyện";

		// console.log(this.props)
	  return (
	  	<MangaPage title={title} mangas={mangas} />
	  );
	}
}

function mapState(state) {
    const { historys } = state;
    const { loggedIn } = state.authentication;
    return { historys, loggedIn };
}

const actionCreators = {
    getHistorys: historyActions.getAll,
}

const connectedHistoryPage = connect(mapState, actionCreators)(History);
export { connectedHistoryPage as History };