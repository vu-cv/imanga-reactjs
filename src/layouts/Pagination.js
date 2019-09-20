import React, {Component} from 'react';
import { connect } from 'react-redux';
class Pagination extends Component {
	render () {
		const { pageNumbers, onChosePage, currentPage, 
			firstPage, lastPage, nextPage, prevPage } = this.props;
		// console.log(pageNumbers)
		return(
			<nav className="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
		      <ul className="pagination-list">
		        <li>
		          <a className="pagination-previous" onClick={(e) => firstPage(e)} href="">
		          «
		          </a>
		        </li>
		        <li>
		          <a className="pagination-link" onClick={(e) => prevPage(e, pageNumbers)} href="">‹</a>
		        </li>
		        

		         	{ pageNumbers &&
		              pageNumbers.map(number => {
		                if (currentPage === number) {
		                  return (
		                   

		                    <li key={number} >
					          <a id={number} className="pagination-link is-current" href={'#page='+number}>{number}</a>
					        </li>
		                  )
		                }
		                else {
		                  return (

		                    <li key={number}>
					          <a id={number} href={'#page='+number} onClick={onChosePage}className="pagination-link">{number}</a>
					        </li>
		                  )
		                }
		              })
		            }

		        <li>
		          <a className="pagination-link" onClick={(e) => nextPage(e, pageNumbers)} href="">›</a>
		        </li>
		        <li>
		          <a className="pagination-next" onClick={(e) => lastPage(e, pageNumbers)}  href="">»</a>
		        </li>
		      </ul>
		    </nav>
		);
	}
}

const connectedPaginationItem = connect()(Pagination);
export { connectedPaginationItem as Pagination };