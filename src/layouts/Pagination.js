import React, {Component} from 'react';
import { connect } from 'react-redux';
class Pagination extends Component {
	render () {
		return(
			<nav className="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
		      <ul className="pagination-list">
		        <li>
		          <a className="pagination-previous" href="https://truyenqq.com/the-loai/adult-68/trang-1.html">
		          «
		          </a>
		        </li>
		        <li>
		          <a className="pagination-link" href="https://truyenqq.com/the-loai/adult-68/trang-1.html">‹</a>
		        </li>
		        <li>
		          <a className="pagination-link" href="https://truyenqq.com/the-loai/adult-68/trang-1.html">1</a>
		        </li>
		        <li>
		          <a className="pagination-link is-current" href="#1">2</a>
		        </li>
		        <li>
		          <a className="pagination-link" href="https://truyenqq.com/the-loai/adult-68/trang-3.html">3</a>
		        </li>
		        <li>
		          <a className="pagination-link" href="https://truyenqq.com/the-loai/adult-68/trang-4.html">4</a>
		        </li>
		        <li>
		          <a className="pagination-link" href="https://truyenqq.com/the-loai/adult-68/trang-5.html">5</a>
		        </li>
		        <li>
		          <a className="pagination-link" href="https://truyenqq.com/the-loai/adult-68/trang-3.html">›</a>
		        </li>
		        <li>
		          <a className="pagination-next" href="https://truyenqq.com/the-loai/adult-68/trang-6.html">»</a>
		        </li>
		      </ul>
		    </nav>
		);
	}
}

const connectedPaginationItem = connect()(Pagination);
export { connectedPaginationItem as Pagination };