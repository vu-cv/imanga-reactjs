import React, {Component} from 'react';
import { Footer } from '../../layouts';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import { MangaItem } from "../../layouts";
import { mangaActions, chapterActions } from '../../_actions';
import { connect } from 'react-redux';
import { apiManga } from '../../config';
import { CommicLastUpdate } from './CommicLastUpdate';
import { CommicIsFemale } from './CommicIsFemale';
import { CommicIsMale } from './CommicIsMale';
import config from '../../config.js';
class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};


	}

	componentDidMount() {
		this.props.getChapters(5, 'createdAt:DESC');
		this.props.getMangas(null, 'updatedAt:DESC');

	}

	render() {
		let { chapters } = this.props;
		let slideDefault = 	'/images/slider_default.jpg';

	  return (
	  	<div className="wrap-home">

	  		<Helmet>
                <title>Trang chủ</title>
                <link rel="stylesheet" href="/css/home.css" />
                <script type="text/javascript" data-type={'Trang chủ'} src="/js/header.js"></script>
            </Helmet>
			  <section id="hero">
			    <div className="container">
			      <div className="row">
			        <div className="tile is-ancestor">
			          <div className="col-sm-6 ancestor-left">
			            <div className="tile is-parent">
			              <div className="tile is-child">
			                <Link to={chapters.items && '/chapters/' + chapters.items[0]._id}>
			                  <div className="hero-item has-excerpt">
			                    <img className="tor-left" src={chapters.items && chapters.items[0].picture != null ? config.apiUrl + chapters.items[0].picture.url : slideDefault} alt="cover" />
			                    <div className="bottom-shadow" />
			                    <div className="captions">
			                      <h5>Thể loại: Drama, Fantasy, Shounen, Romance, Historical</h5>
			                      <h3>{ chapters.items && chapters.items[0].name }</h3>
			                    </div>
			                    <div className="chapter red">Chương {chapters.items && chapters.items[0].chapterNumber}</div>
			                    <div className="excerpt">Kimetsu no Yaiba – Tanjirou là con cả của gia đình vừa mất cha. Một ngày nọ, Tanjirou đến thăm thị trấn khác để bán than, khi đêm về cậu ở nghỉ tại nhà người khác thay vì về nhà vì lời đồn thổi về ác quỷ luôn rình mò gần núi vào buổi tối. Khi cậu về nhà vào ngày hôm sau, bị kịch đang đợi chờ cậu…
			                    </div>
			                  </div>
			                  {/* /.hero-item */}
			                </Link>
			              </div>
			            </div>
			          </div>
			          <div className="col-sm-6 ancestor-right">
			            <div className="row mgr-0 tile is-3 is-vertical vtc-top is-parent">
			              <div className="col-sm-6 pdr-0 tile is-child">
			                <Link to={chapters.items && '/chapters/' + chapters.items[1]._id}>
			                  <div className="hero-item">
			                    <img className="cover" src={chapters.items && chapters.items[1].picture != null ? config.apiUrl + chapters.items[1].picture.url : slideDefault} alt="cover" />
			                    <div className="bottom-shadow" />
			                    <div className="captions">
			                      <h3>{ chapters.items && chapters.items[1].name }</h3>
			                    </div>
			                    <div className="chapter orange">Chương {chapters.items && chapters.items[1].chapterNumber}</div>
			                  </div>
			                  {/* /.hero-item */}
			                </Link>
			              </div>
			              <div className="col-sm-6 pdr-0 tile is-child pdl-4">
			                <Link to={chapters.items && '/chapters/' + chapters.items[2]._id}>
			                  <div className="hero-item">
			                    <img className="cover" src={chapters.items && chapters.items[2].picture != null ? config.apiUrl + chapters.items[2].picture.url : slideDefault} alt="cover" />
			                    <div className="bottom-shadow" />
			                    <div className="captions">
			                      <h3>{ chapters.items && chapters.items[2].name }</h3>
			                    </div>
			                    <div className="chapter blue">Chương {chapters.items && chapters.items[2].chapterNumber}</div>
			                  </div>
			                  {/* /.hero-item */}
			                </Link>
			              </div>
			            </div>
			            <div className="row mgr-0 tile is-3 is-vertical vtc-allow is-parent">
			              <div className="col-sm-6 mgb-0 pdr-0 tile is-child">
			                <Link to={chapters.items && '/chapters/' + chapters.items[3]._id}>
			                  <div className="hero-item">
			                    <img className="cover" src={chapters.items && chapters.items[3].picture != null ? config.apiUrl + chapters.items[3].picture.url : slideDefault} alt="cover" />
			                    <div className="bottom-shadow" />
			                    <div className="captions">
			                      <h3>{ chapters.items && chapters.items[3].name }</h3>
			                    </div>
			                    <div className="chapter violet">Chương {chapters.items && chapters.items[3].chapterNumber}</div>
			                  </div>
			                </Link>
			              </div>
			              <div className="col-sm-6 mgb-0 pdr-0 tile is-child pdl-4">
			                <Link to={chapters.items && '/chapters/' + chapters.items[4]._id}>
			                  <div className="hero-item">
			                    <img className="cover" src={chapters.items && chapters.items[4].picture != null ? config.apiUrl + chapters.items[4].picture.url : slideDefault} alt="cover" />
			                    <div className="bottom-shadow" />
			                    <div className="captions">
			                      <h3>{ chapters.items && chapters.items[4].name }</h3>
			                    </div>
			                    <div className="chapter green">Chương {chapters.items && chapters.items[4].chapterNumber}</div>
			                  </div>
			                </Link>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </section>
			  <section id="main-content">
			    <div className="container">

			      <CommicLastUpdate />
			      <CommicIsFemale />
			      <CommicIsMale />
			      
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
	const { mangas, chapters } = state;
    return { mangas, chapters };
}

const actionCreators = {
	getMangas: mangaActions.getAll,
	getChapters: chapterActions.getAll
};

const connectedLoginPage = connect(mapState, actionCreators)(Home);
export { connectedLoginPage as Home };