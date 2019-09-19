import React, {Component} from 'react';
import './style.css';
import { connect } from 'react-redux';
class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}


	render() {
		return (
		    <section className="footer">
			  <div className="container">
			    <div className="row">
			      <div className="col-sm-6">
			        <div className="text-footer">Copyright © 2019</div>
			      </div>
			      <div className="col-sm-6">
			        <div className="text-footer-right text-right">
			          <img src="/images/app-store.png" alt="" />
			          <img src="/images/google-play.png" alt="" />
			        </div>
			      </div>
			    </div>
			  </div>
			</section>



		);
	}
}



const connectedFooterPage = connect()(Footer);
export { connectedFooterPage as Footer };
