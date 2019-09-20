import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Pagination, Footer} from './';
import {Helmet} from "react-helmet";
class CategoryPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: 1,
      		newsPerPage: 12
		};
	}

	chosePage = (event) => {
		event.preventDefault();
	    this.setState({
	      currentPage: Number(event.target.id)
	    });

	    window.scrollTo(0, 0);
	}

	nextPage = (e, pageNumbers) => {
		e.preventDefault();
		const { currentPage } = this.state;
		if (currentPage == pageNumbers.length) {
			this.setState({
		      currentPage: 1
		    });
		} else {
			this.setState({
		      currentPage: currentPage+1
		    });
		}
	}

	prevPage = (e, pageNumbers) => {
		e.preventDefault();
		const { currentPage } = this.state;
		if (currentPage == 1) {
			this.setState({
		      currentPage: pageNumbers.length
		    });
		} else {
			this.setState({
		      currentPage: currentPage-1
		    });
		}
	}

	firstPage = (event) => {
		event.preventDefault();
		this.setState({
	      currentPage: 1
	    });
	}

	lastPage = (event, pageNumbers) => {
		event.preventDefault();
		const { currentPage } = this.state;
		this.setState({
	      currentPage: pageNumbers.length
	    });
	}
	
	render () {
		const {title, mangas} = this.props;
		const { currentPage, newsPerPage } = this.state;
	    const indexOfLastNews = currentPage * newsPerPage;
	    const indexOfFirstNews = indexOfLastNews - newsPerPage;
	    const currentMangas = mangas.slice(indexOfFirstNews, indexOfLastNews);


	    const pageNumbers = [];
	    for (let i = 1; i <= Math.ceil(mangas.length / newsPerPage); i++) {
	      pageNumbers.push(i);
	    }

		return(

			<div className="wrap-content">

		  			<div className="cat-list">
				      <div className="sr-only">phải có thì mới đúng</div>
				      {currentMangas}
				    </div>

				    <Pagination 
				    	currentPage={currentPage} 
				    	pageNumbers={pageNumbers}
				    	firstPage={this.firstPage}
				    	lastPage={this.lastPage}
				    	nextPage={this.nextPage}
				    	prevPage={this.prevPage}
				    	onChosePage={this.chosePage} />

		  	</div>
		);
	}
}

const connectedCategoryPageItem = connect()(CategoryPage);
export { connectedCategoryPageItem as CategoryPage };