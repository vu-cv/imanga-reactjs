import React, {Component} from 'react';
// import Header from '../../components/layouts/Header';
// import Footer from '../../components/layouts/Footer';
// import './style.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import { historyActions, mangaActions } from '../../_actions';
class Chapter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			manga: this.props.manga,
			loggedIn: this.props.loggedIn

		};
		console.log('consssssssssssssss')
		console.log(this.props.match.params.mangaId)
		const { mangaId } = this.props.match.params;

		this.props.getManga(mangaId)


		this.onCreateHistory = this.onCreateHistory.bind(this)

		
	}

	componentWillMount() {
		console.log('willlllllllllll')

	}

	componentDidMount() {

		console.log('didddddddddddddd')

		// console.log(this.props.manga.item)
		// this.onCreateHistory();
	}

	componentDidUpdate() {
		/*console.log(this.props.manga.item)
		this.onCreateHistory()*/
	}

	onCreateHistory() {
		const { loggedIn, manga } = this.state;
		console.log(manga)
		if (manga.item != null) {
			this.props.createHistory(loggedIn, manga.item)
		}
		// return;
	}


	render() {
		console.log('renderrrrrrrrr')
		console.log(this.props.manga.item)
	  return (
	  	<div className="wrap-content">
	  		<Helmet>
                <title>Chapter</title>
                <link rel="stylesheet" href="/css/chapter.css" />
            </Helmet>
	  			<div>
				  <section className="main-content">
				    <div className="story-see container">
				      <div className="story-see-main">
				        <div className="block">
				          <div className="box">
				            <div id="path" className="path-top">
				              <ol className="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList">
				                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
				                  <a itemProp="item" href="https://truyenqq.com/index.html">
				                    <span itemProp="name">Trang Chủ</span>
				                  </a>
				                  <meta itemProp="position" content={1} />
				                </li>
				                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
				                  <a itemProp="item" href="https://truyenqq.com/truyen-tranh/thien-kim-huu-doc-boss-mau-cut-ra-8001.html">
				                    <span itemProp="name">Thiên Kim Hữu Độc: Boss Mau Cút Ra</span>
				                  </a>
				                  <meta itemProp="position" content={2} />
				                </li>
				                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
				                  <a itemProp="item" href="https://truyenqq.com/truyen-tranh/thien-kim-huu-doc-boss-mau-cut-ra-8001-chap-14.html">
				                    <span itemProp="name">Chương 14</span>
				                  </a>
				                  <meta itemProp="position" content={3} />
				                </li>
				              </ol>
				            </div>
				            <h1 className="detail-title"><a href="/truyen-tranh/thien-kim-huu-doc-boss-mau-cut-ra-8001.html">Thiên Kim Hữu Độc: Boss Mau Cút Ra</a> Chap 14</h1>
				          </div>
				          <div className="story-see-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, magni quos. Quos porro eligendi nemo fugit corporis distinctio aliquid magni deleniti. Enim sapiente vel voluptatum fugit aperiam corporis quam. Voluptatibus sint sunt harum id, nesciunt, explicabo deleniti veniam expedita. Vitae repudiandae harum tempora voluptatem impedit, deleniti veritatis optio! Iste corporis sit consectetur ut recusandae est distinctio necessitatibus quae, magni aperiam id ipsam error, inventore aut hic fugit? Delectus veniam natus eum commodi numquam quos porro. Perferendis quos quisquam id voluptates repudiandae itaque, non earum, facere corporis ea eveniet atque inventore exercitationem nostrum necessitatibus, animi dicta et fuga praesentium nobis perspiciatis ad! Repellendus qui deserunt, recusandae commodi velit porro fugit fuga? Voluptates architecto reprehenderit dolores consequatur facilis maxime excepturi vero aspernatur, veniam maiores animi cumque hic nesciunt, tempore, sapiente? Asperiores delectus earum assumenda quasi molestiae, saepe, sunt suscipit ipsa itaque non nulla explicabo numquam similique voluptates iste rerum inventore, maiores nam corporis esse autem tenetur! Vitae unde autem praesentium veritatis quos, rerum, nihil totam quam, fugiat neque inventore quas atque mollitia, natus aperiam doloremque voluptas enim error doloribus iusto vero optio laboriosam ducimus qui? Omnis dolorum vero et sint commodi nam quidem modi eaque expedita facilis voluptatum, repellat, distinctio quibusdam provident.</div>
				        </div>
				      </div>
				      <div id="stop" className="scrollTop">
				        <span><a href="#haha"><img src="https://truyenqq.com/template/frontend/images/back-to-top-icon.png" alt="top-icon" /></a></span>
				      </div>
				    </div>
				  </section>
				  <section className="story-see-footer has-background-white" style={{}}>
				    <div className="container">
				      <div className="level">
				        <div className="level-left">
				          <ul className="list-01">
				            <li><a className="" href="https://truyenqq.com/index.html"><i className="fa fa-home" /> <span className="control-see">Trang chủ</span></a></li>
				            <li><a className="" href="#haha" id="faul"><i className="fa fa-exclamation-circle" /> <span className="control-see">Báo lỗi</span></a></li>
				          </ul>
				        </div>
				        <div className="center level">
				          <div className="prev level-left"><a className="link-prev-chap" href="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-1.html" title="Kawaii Joushi O Komasareta Chap 1"><i className="fa fa-arrow-circle-left" /></a></div>
				          <select className="selectEpisode">
				            <option value="DEFAULT">Chương 34</option>
				            <option value="Chương 33">Chương 33</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-32.html">Chương 32</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-31.html">Chương 31</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-30.html">Chương 30</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-29.html">Chương 29</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-28.html">Chương 28</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-27.html">Chương 27</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-26.html">Chương 26</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-25.html">Chương 25</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-24.html">Chương 24</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-23.html">Chương 23</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-22.html">Chương 22</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-21.html">Chương 21</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-20.html">Chương 20</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-19.html">Chương 19</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-18.html">Chương 18</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-17.html">Chương 17</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-16.html">Chương 16</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-15.html">Chương 15</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-14.html">Chương 14</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-13.html">Chương 13</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-12.html">Chương 12</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-11.html">Chương 11</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-10.html">Chương 10</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-9.html">Chương 9</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-8.html">Chương 8</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-7.html">Chương 7</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-6.html">Chương 6</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-5.html">Chương 5</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-4.html">Chương 4</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-3.html">Chương 3</option>
				            <option selected="selected" value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-2.html">Chương 2</option>
				            <option value="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-1.html">Chương 1</option>
				          </select>
				          <div className="next level-right"><a className="link-next-chap" href="https://truyenqq.com/truyen-tranh/kawaii-joushi-o-komasareta-7648-chap-3.html" title="Kawaii Joushi O Komasareta Chap 3"><i className="fa fa-arrow-circle-right" /></a></div>
				        </div>
				        <div className="level-right">
				          <ul className="list-01">
				            <li><a className="light-see" href="#haha"><i className="fa fa-lightbulb-o" /> <span className="control-see">Tắt đèn</span></a></li>
				            <li><a className="subscribeBook" href="#haha" data-id={7648} data-page="detail"><i className="fa fa-heart-o" /> <span className="control-see">Theo dõi</span></a></li>
				          </ul>
				          {/* /.social-links */}
				        </div>
				      </div>
				    </div>
				  </section>
				</div>
	  	</div>
	  );
	}
}

function mapState(state) {
    const { historys, manga } = state;
    const { loggedIn } = state.authentication;
    return { historys, loggedIn, manga };
}

const actionCreators = {
    getHistorys: historyActions.getAll,
    createHistory: historyActions.create,
    getManga: mangaActions.getById
}

const connectedChapterPage = connect(mapState, actionCreators)(Chapter);
export { connectedChapterPage as Chapter };