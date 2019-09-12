import React, {Component} from 'react';
// import Header from '../../components/layouts/Header';
import Footer from '../../layouts/Footer';
// import './style.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import CommicItem from "../../layouts/CommicItem";
import { MangaItem } from "../../layouts";
// import axios from 'axios';
import { mangaActions } from '../../_actions';
import { connect } from 'react-redux';

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		};

	}

	componentDidMount() {
		this.props.getMangas(18);
	}

	render() {
		let { mangas } = this.props;
		let listUpdate = [];
		let listSex = [];

		if (mangas.items) {
			mangas.items.map(function(manga, index) {
				listUpdate.push(<MangaItem manga={manga} key={index}/>);
			})
		}

		console.log(listUpdate)
		
		
		const viewmoreStyle = {clear: 'both'};

		for (var j = 0; j < 12; j++) {
			listSex.push(<CommicItem time={j} key={j}/>);
		}
		
	  return (
	  	<div className="wrap-home">

	  		<Helmet>
                <title>Trang chủ</title>
                <link rel="stylesheet" href="/css/home.css" />
                <script type="text/javascript" src="/js/home.js"></script>
            </Helmet>
			  <section id="hero">
			    <div className="container">
			      <div className="row">
			        <div className="tile is-ancestor">
			          <div className="col-sm-6 ancestor-left">
			            <div className="tile is-parent">
			              <div className="tile is-child">
			                <a href="https://truyenqq.com/truyen-tranh/kimetsu-no-yaiba-2624-chap-102.html">
			                  <div className="hero-item has-excerpt">
			                    <img className="tor-left" src="http://i.mangaqq.com/slider/583x386/slider_1559213537.jpg?thang=t241" alt="cover" />
			                    <div className="bottom-shadow" />
			                    <div className="captions">
			                      <h5>Thể loại: Drama, Fantasy, Shounen, Romance, Historical</h5>
			                      <h3>Kimetsu No Yaiba</h3>
			                    </div>
			                    <div className="chapter red">Chương 102</div>
			                    <div className="excerpt">Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…
			                    </div>
			                  </div>
			                  {/* /.hero-item */}
			                </a>
			              </div>
			            </div>
			          </div>
			          <div className="col-sm-6 ancestor-right">
			            <div className="row mgr-0 tile is-3 is-vertical vtc-top is-parent">
			              <div className="col-sm-6 pdr-0 tile is-child">
			                <a href="https://truyenqq.com/truyen-tranh/nanatsu-no-taizai-740-chap-323.html">
			                  <div className="hero-item">
			                    <img className="cover" src="http://i.mangaqq.com/slider/290x191/slider_1559213426.jpg?thang=t241" alt="cover" />
			                    <div className="bottom-shadow" />
			                    <div className="captions">
			                      <h3>Nanatsu No Taizai</h3>
			                    </div>
			                    <div className="chapter orange">Chương 323</div>
			                  </div>
			                  {/* /.hero-item */}
			                </a>
			              </div>
			              <div className="col-sm-6 pdr-0 tile is-child pdl-4">
			                <a href="https://truyenqq.com/truyen-tranh/the-promised-neverland-2547-chap-146.html">
			                  <div className="hero-item">
			                    <img className="cover" src="http://i.mangaqq.com/slider/290x191/slider_1560501729.jpg?thang=t241" alt="cover" />
			                    <div className="bottom-shadow" />
			                    <div className="captions">
			                      <h3>The Promised Neverland</h3>
			                    </div>
			                    <div className="chapter blue">Chương 146</div>
			                  </div>
			                  {/* /.hero-item */}
			                </a>
			              </div>
			            </div>
			            <div className="row mgr-0 tile is-3 is-vertical vtc-allow is-parent">
			              <div className="col-sm-6 mgb-0 pdr-0 tile is-child">
			                <a href="https://truyenqq.com/truyen-tranh/black-clover-499-chap-216.html">
			                  <div className="hero-item">
			                    <img className="cover" src="http://i.mangaqq.com/slider/290x191/slider_1560493497.jpg?thang=t241" alt="cover" />
			                    <div className="bottom-shadow" />
			                    <div className="captions">
			                      <h3>Black Clover</h3>
			                    </div>
			                    <div className="chapter violet">Chương 216</div>
			                  </div>
			                  {/* /.hero-item */}
			                </a>
			              </div>
			              <div className="col-sm-6 mgb-0 pdr-0 tile is-child pdl-4">
			                <a href="https://truyenqq.com/truyen-tranh/boku-no-hero-academia-380-chap-239.html">
			                  <div className="hero-item">
			                    <img className="cover" src="http://i.mangaqq.com/slider/290x191/slider_1560573084.jpg?thang=t241" alt="cover" />
			                    <div className="bottom-shadow" />
			                    <div className="captions">
			                      <h3>Boku No Hero Academia</h3>
			                    </div>
			                    <div className="chapter green">Chương 239</div>
			                  </div>
			                  {/* /.hero-item */}
			                </a>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </section>
			  <section id="main-content">
			    <div className="container">
			      <div className="latest">
			        <div className="col-sm-12">
			          <div className="caption lists-title" id="list-update"><a href="https://truyenqq.com/truyen-moi-cap-nhat.html"><span className="starts-icon" />Truyện mới cập nhật</a></div>
			        </div>

			        {listUpdate}

			        <div style={viewmoreStyle} className="has-text-centered text-center">
			          <a href="https://truyenqq.com/truyen-moi-cap-nhat/trang-2.html" className="view-more-btn">Xem thêm nhiều truyện</a>
			        </div>
			      </div>
			      {/* / end row latest */}
			      <div className="female">
			        <div className="col-sm-12">
			          <div className="caption lists-title" id="list-female"><a href="https://truyenqq.com/truyen-moi-cap-nhat.html"><span className="female-icon" />Truyện con gái</a></div>
			        </div>
			        {listSex}
			      </div>
			      {/* / end truyen con gai */}
			      <div className="male">
			        <div className="col-sm-12">
			          <div className="caption lists-title" id="list-male"><a href="https://truyenqq.com/truyen-moi-cap-nhat.html"><span className="male-icon" />Truyện con trai</a></div>
			        </div>
			        {listSex}
			      </div>
			    </div>
			  </section>
			  <section className="right-bar pc hidden-xs hidden-sm">
				  <div className="top-right-bar">
				    <div className="right-bar-item">
				      <a id="scr-top" href="#1"><span className="group-icon" /></a>
				    </div>
				    <div className="right-bar-item">
				      <a id="scr-update" href="#1">
				        <span className="starts-icon" />
				        Cập nhật
				      </a>
				    </div>
				    <div id="scr-female" className="right-bar-item">
				      <a href="#1">
				        <span className="female-icon" />
				        Con gái
				      </a>
				    </div>
				    <div id="scr-male" className="right-bar-item">
				      <a href="#1">
				        <span className="male-icon" />
				        Con trai
				      </a>
				    </div>
				  </div>
				  {/* /.top-right-bar */}
				  <div className="bottom-right-bar download-app-bottom">
				    <div className="right-bar-item">
				      <a href="#1"><span className="rect-icon" /></a>
				    </div>
				  </div>
				  {/* /.bottom-right-bar */}
				</section>
	  		<Footer />

	  	</div>
	  );
	}
}

function mapState(state) {
	const { mangas } = state;
    return { mangas };
}

const actionCreators = {
	getMangas: mangaActions.getAll
};

const connectedLoginPage = connect(mapState, actionCreators)(Home);
export { connectedLoginPage as Home };