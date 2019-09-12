import React, {Component} from 'react';
// import Header from '../../components/layouts/Header';
import Footer from '../../layouts/Footer';
import {Pagination} from '../../layouts';
// import './style.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

class Follow extends Component {

	render() {
		let pathName = this.props.match.path;
		let title = "Theo Dõi";

		if (pathName === "/history") {
			title = "Lịch Sử Đọc Truyện";
		}
	  return (

	  	<div className="wrap-content">
	  		<Helmet>
                <title>Đang theo dõi</title>
                <link rel="stylesheet" href="/css/category.css" />
            </Helmet>
	  			<section className="main-content">
				  <div className="container story-list">
				    <div className="title-list">{title}</div>
				    <div className="cat-list">
				      <div className="sr-only">phải có thì mới đúng</div>
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
				    {/* /.list-stories */}
				    <Pagination />
				  </div>
				</section>

	  		<Footer />

	  	</div>
	  );
	}
}

export default Follow;
