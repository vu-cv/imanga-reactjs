import React, {Component} from 'react';
// import Header from '../../components/layouts/Header';
import Footer from '../../layouts/Footer';
// import './style.css';
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { detailActions, followActions } from '../../_actions';
import config from '../../config.js';
class Detail extends Component {
	constructor(props) {
		super(props);
		this.sate = {};

		this.onFollow = this.onFollow.bind(this);
	}

	componentDidMount() {
		let { id } = this.props.match.params;
        this.props.getManga(id);
    }

    onFollow(e) {
    	e.preventDefault();

    	const { loggedIn } = this.props;
    	let { item } = this.props.detail;
    	this.props.createFollow(loggedIn, item)
    }

	render() {
		let { id } = this.props.match.params;
		let { item } = this.props.detail;
		let authors = [];
		let categories = [];
		let imageUrl = '';
		let imageDefault = '/images/chu-nhan-xin-hay-coi-ra_1502711358.jpg';

		if (item) {
			item.authors.map(function(auth, index) {
				authors.push(auth.name)
			});

			item.categories.map(function(category, index) {
				categories.push(
					<li key={index} className="li03">
						<Link to={'/category/'+category._id}>{category.name}</Link>
					</li>
				);
			})

			imageUrl = config.apiUrl + item.picture.url;
		}

		let styleImage = {
			maxWidth: '190px',
    		maxHeight: '247px'
		}

		// console.log(item)

	  return (
	  	<div className="wrap-content">
	  		<Helmet>
                <title>Chi tiết</title>
                <link rel="stylesheet" href="/css/detail.css" />
                <script type="text/javascript" src="/js/detail.js"></script>
            </Helmet>
  			<section className="main-content">
				  <div className="container has-background-white story-detail">
				    <div id="path">
				      <ol className="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList">
				        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
				          <Link itemProp="item" to='/'>
				            <span itemProp="name">Trang Chủ</span>
				          </Link>
				          <meta itemProp="position" content={1} />
				        </li>
				        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
				          <Link itemProp="item" to={'/manga/' + id}>
				            <span itemProp="name">{item && item.name}</span>
				          </Link>
				          <meta itemProp="position" content={2} />
				        </li>
				      </ol>
				    </div>
				    <div className="block01">
				      <div className="left"><img style={styleImage} src={item && imageUrl} onError={(e)=>{e.target.src=imageDefault;}} alt={item && item.name} /></div>
				      <div className="center">
				        <h1>{ item && item.name }</h1>
				        <div className="txt">
				          <p className="info-item">Tác giả: <a className="org" href="https://truyenqq.com/tac-gia/dang-cap-nhat-239.html">{authors}</a></p>
				          <p className="info-item">Tình trạng: Đang Cập Nhật</p>
				          <div>
				            <span>Thống kê:</span>
				            <span className="sp01"><i className="fa fa-thumbs-up" /> <span className="sp02 number-like">3</span></span>
				            <span className="sp01"><i className="fa fa-heart" /> <span className="sp02">52</span></span>
				            <span className="sp01"><i className="fa fa-eye" /> <span className="sp02">79,078</span></span>
				          </div>
				        </div>
				        <ul className="list01">
				          {categories}
				        </ul>
				        <ul className="story-detail-menu">
				          <li className="li01"><Link to={'/chapter/' + id + '/1'} className="button is-danger is-rounded"><span className="btn-read" />Đọc từ đầu</Link></li>
				          <li className="li02"><a href={''} onClick={this.onFollow} className="button is-danger is-rounded btn-subscribe subscribeBook" data-page="index" data-id={4097}><span className="fa fa-heart" />Theo dõi</a></li>
				          <li className="li03">
				            <a href="#haha" className="button is-danger is-rounded btn-like" data-id={4097}><span className="fa fa-thumbs-up" />Thích</a>
				          </li>
				          <li className="li04">
				            <a data-toggle="collapse" href="#collapseReadmore" aria-expanded="false" aria-controls="collapseReadmore" className="button is-readmore is-rounded btn-like" data-id={4097}><span className="fa fa-caret-square-o-down" />Xem thêm</a>
				          </li>
				        </ul>
				        <div id="collapseReadmore" className="collapse txt txt01 story-detail-info readmore-js-section">
				          <p>{item && item.desc}</p>
				        </div>
				      </div>
				    </div>
				    <div className="block02">
				      <div className="title">
				        <h2 className="story-detail-title">Danh sách chương</h2>
				      </div>
				      <div className="box">
				        <div className="works-chapter-list">
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-21.html">Chương 21</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-20.html">Chương 20</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-19.html">Chương 19</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-18.html">Chương 18</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-17.html">Chương 17</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-16.html">Chương 16</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-15.html">Chương 15</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-14.html">Chương 14</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-13.html">Chương 13</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-12.html">Chương 12</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-11.html">Chương 11</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-10.html">Chương 10</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-9.html">Chương 9</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-8.html">Chương 8</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-7.html">Chương 7</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-6.html">Chương 6</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-5.html">Chương 5</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-4.html">Chương 4</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-3.html">Chương 3</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-2.html">Chương 2</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				          <div className="works-chapter-item row">
				            <div className="col-md-10 col-sm-10 col-xs-8 ">
				              <a target="_blank" rel="noopener noreferrer" href="https://truyenqq.com/truyen-tranh/bach-sac-thanh-toc-4097-chap-1.html">Chương 1</a>
				            </div>
				            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
				              25/08/2019 </div>
				          </div>
				        </div>
				      </div>
				    </div>
				    <div className="block03">
				      <h2 className="story-detail-title">Cùng thể loại</h2>
				      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 cm-item">
				        <div className="story-item">
				          <a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">
				            <img className="story-cover img-responsive" src="images/chu-nhan-xin-hay-coi-ra_1502711358.jpg" alt="Chủ Nhân, Xin Hãy Cởi Ra!" />
				          </a>
				          <div className="top-notice">
				            <span className="time-ago">7 Phút Trước</span> <span className="type-label hot">Hot</span> </div>
				          <h3 className="title-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">Chủ Nhân, Xin Hãy Cởi Ra!</a></h3>
				          <div className="episode-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599-chap-35.html"> Chương 35</a></div>
				          <div className="more-info">
				            <div className="title-more">Chủ Nhân, Xin Hãy Cởi Ra! </div>
				            <p className="info">Tình trạng: Đang Cập Nhật</p>
				            <p className="info">Lượt xem: 58,432</p>
				            <p className="info">Lượt theo dõi: 164</p>
				            <div className="list-tags">
				              <a className="blue" href="https://truyenqq.com/the-loai/manhua-35.html">Manhua</a><a className="blue" href="https://truyenqq.com/the-loai/romance-36.html">Romance</a><a className="blue" href="https://truyenqq.com/the-loai/shoujo-38.html">Shoujo</a> </div>
				            <div className="excerpt">Bị người yêu thanh mai trúc mã phản bội, tôi liền xách túi bỏ đi. Cái gì trúc mã dịu dàng, thiếu niên trong trắng, tôi đều không cần nữa. Người tôi cần chỉ có anh ấy, giám đốc Lạc Cảnh Minh bá đạo, tự luyến, kiêu ngạo không ai bằng!
				            </div>
				          </div>
				        </div>
				      </div>
				      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 cm-item">
				        <div className="story-item">
				          <a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">
				            <img className="story-cover img-responsive" src="images/chu-nhan-xin-hay-coi-ra_1502711358.jpg" alt="Chủ Nhân, Xin Hãy Cởi Ra!" />
				          </a>
				          <div className="top-notice">
				            <span className="time-ago">7 Phút Trước</span> <span className="type-label hot">Hot</span> </div>
				          <h3 className="title-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">Chủ Nhân, Xin Hãy Cởi Ra!</a></h3>
				          <div className="episode-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599-chap-35.html"> Chương 35</a></div>
				          <div className="more-info">
				            <div className="title-more">Chủ Nhân, Xin Hãy Cởi Ra! </div>
				            <p className="info">Tình trạng: Đang Cập Nhật</p>
				            <p className="info">Lượt xem: 58,432</p>
				            <p className="info">Lượt theo dõi: 164</p>
				            <div className="list-tags">
				              <a className="blue" href="https://truyenqq.com/the-loai/manhua-35.html">Manhua</a><a className="blue" href="https://truyenqq.com/the-loai/romance-36.html">Romance</a><a className="blue" href="https://truyenqq.com/the-loai/shoujo-38.html">Shoujo</a> </div>
				            <div className="excerpt">Bị người yêu thanh mai trúc mã phản bội, tôi liền xách túi bỏ đi. Cái gì trúc mã dịu dàng, thiếu niên trong trắng, tôi đều không cần nữa. Người tôi cần chỉ có anh ấy, giám đốc Lạc Cảnh Minh bá đạo, tự luyến, kiêu ngạo không ai bằng!
				            </div>
				          </div>
				        </div>
				      </div>
				      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 cm-item">
				        <div className="story-item">
				          <a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">
				            <img className="story-cover img-responsive" src="images/chu-nhan-xin-hay-coi-ra_1502711358.jpg" alt="Chủ Nhân, Xin Hãy Cởi Ra!" />
				          </a>
				          <div className="top-notice">
				            <span className="time-ago">7 Phút Trước</span> <span className="type-label hot">Hot</span> </div>
				          <h3 className="title-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">Chủ Nhân, Xin Hãy Cởi Ra!</a></h3>
				          <div className="episode-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599-chap-35.html"> Chương 35</a></div>
				          <div className="more-info">
				            <div className="title-more">Chủ Nhân, Xin Hãy Cởi Ra! </div>
				            <p className="info">Tình trạng: Đang Cập Nhật</p>
				            <p className="info">Lượt xem: 58,432</p>
				            <p className="info">Lượt theo dõi: 164</p>
				            <div className="list-tags">
				              <a className="blue" href="https://truyenqq.com/the-loai/manhua-35.html">Manhua</a><a className="blue" href="https://truyenqq.com/the-loai/romance-36.html">Romance</a><a className="blue" href="https://truyenqq.com/the-loai/shoujo-38.html">Shoujo</a> </div>
				            <div className="excerpt">Bị người yêu thanh mai trúc mã phản bội, tôi liền xách túi bỏ đi. Cái gì trúc mã dịu dàng, thiếu niên trong trắng, tôi đều không cần nữa. Người tôi cần chỉ có anh ấy, giám đốc Lạc Cảnh Minh bá đạo, tự luyến, kiêu ngạo không ai bằng!
				            </div>
				          </div>
				        </div>
				      </div>
				      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 cm-item">
				        <div className="story-item">
				          <a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">
				            <img className="story-cover img-responsive" src="images/chu-nhan-xin-hay-coi-ra_1502711358.jpg" alt="Chủ Nhân, Xin Hãy Cởi Ra!" />
				          </a>
				          <div className="top-notice">
				            <span className="time-ago">7 Phút Trước</span> <span className="type-label hot">Hot</span> </div>
				          <h3 className="title-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">Chủ Nhân, Xin Hãy Cởi Ra!</a></h3>
				          <div className="episode-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599-chap-35.html"> Chương 35</a></div>
				          <div className="more-info">
				            <div className="title-more">Chủ Nhân, Xin Hãy Cởi Ra! </div>
				            <p className="info">Tình trạng: Đang Cập Nhật</p>
				            <p className="info">Lượt xem: 58,432</p>
				            <p className="info">Lượt theo dõi: 164</p>
				            <div className="list-tags">
				              <a className="blue" href="https://truyenqq.com/the-loai/manhua-35.html">Manhua</a><a className="blue" href="https://truyenqq.com/the-loai/romance-36.html">Romance</a><a className="blue" href="https://truyenqq.com/the-loai/shoujo-38.html">Shoujo</a> </div>
				            <div className="excerpt">Bị người yêu thanh mai trúc mã phản bội, tôi liền xách túi bỏ đi. Cái gì trúc mã dịu dàng, thiếu niên trong trắng, tôi đều không cần nữa. Người tôi cần chỉ có anh ấy, giám đốc Lạc Cảnh Minh bá đạo, tự luyến, kiêu ngạo không ai bằng!
				            </div>
				          </div>
				        </div>
				      </div>
				      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 cm-item">
				        <div className="story-item show_left">
				          <a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">
				            <img className="story-cover img-responsive" src="images/chu-nhan-xin-hay-coi-ra_1502711358.jpg" alt="Chủ Nhân, Xin Hãy Cởi Ra!" />
				          </a>
				          <div className="top-notice">
				            <span className="time-ago">7 Phút Trước</span> <span className="type-label hot">Hot</span> </div>
				          <h3 className="title-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">Chủ Nhân, Xin Hãy Cởi Ra!</a></h3>
				          <div className="episode-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599-chap-35.html"> Chương 35</a></div>
				          <div className="more-info">
				            <div className="title-more">Chủ Nhân, Xin Hãy Cởi Ra! </div>
				            <p className="info">Tình trạng: Đang Cập Nhật</p>
				            <p className="info">Lượt xem: 58,432</p>
				            <p className="info">Lượt theo dõi: 164</p>
				            <div className="list-tags">
				              <a className="blue" href="https://truyenqq.com/the-loai/manhua-35.html">Manhua</a><a className="blue" href="https://truyenqq.com/the-loai/romance-36.html">Romance</a><a className="blue" href="https://truyenqq.com/the-loai/shoujo-38.html">Shoujo</a> </div>
				            <div className="excerpt">Bị người yêu thanh mai trúc mã phản bội, tôi liền xách túi bỏ đi. Cái gì trúc mã dịu dàng, thiếu niên trong trắng, tôi đều không cần nữa. Người tôi cần chỉ có anh ấy, giám đốc Lạc Cảnh Minh bá đạo, tự luyến, kiêu ngạo không ai bằng!
				            </div>
				          </div>
				        </div>
				      </div>
				      <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 cm-item">
				        <div className="story-item show_left">
				          <a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">
				            <img className="story-cover img-responsive" src="images/chu-nhan-xin-hay-coi-ra_1502711358.jpg" alt="Chủ Nhân, Xin Hãy Cởi Ra!" />
				          </a>
				          <div className="top-notice">
				            <span className="time-ago">7 Phút Trước</span> <span className="type-label hot">Hot</span> </div>
				          <h3 className="title-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599.html">Chủ Nhân, Xin Hãy Cởi Ra!</a></h3>
				          <div className="episode-book"><a href="https://truyenqq.com/truyen-tranh/chu-nhan-xin-hay-coi-ra-3599-chap-35.html"> Chương 35</a></div>
				          <div className="more-info">
				            <div className="title-more">Chủ Nhân, Xin Hãy Cởi Ra! </div>
				            <p className="info">Tình trạng: Đang Cập Nhật</p>
				            <p className="info">Lượt xem: 58,432</p>
				            <p className="info">Lượt theo dõi: 164</p>
				            <div className="list-tags">
				              <a className="blue" href="https://truyenqq.com/the-loai/manhua-35.html">Manhua</a><a className="blue" href="https://truyenqq.com/the-loai/romance-36.html">Romance</a><a className="blue" href="https://truyenqq.com/the-loai/shoujo-38.html">Shoujo</a> </div>
				            <div className="excerpt">Bị người yêu thanh mai trúc mã phản bội, tôi liền xách túi bỏ đi. Cái gì trúc mã dịu dàng, thiếu niên trong trắng, tôi đều không cần nữa. Người tôi cần chỉ có anh ấy, giám đốc Lạc Cảnh Minh bá đạo, tự luyến, kiêu ngạo không ai bằng!
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				</section>

	  		<Footer />

	  	</div>
	  );
	}
}

function mapState(state) {
    const { detail, follows } = state;
    const { loggedIn } = state.authentication;
    return { detail, follows, loggedIn };
}

const actionCreators = {
    getManga: detailActions.getById,
    getFollows: followActions.getAll,
    createFollow: followActions.create
}

const connectedDetailPage = connect(mapState, actionCreators)(Detail);
export { connectedDetailPage as Detail };