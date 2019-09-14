import React, { Component } from 'react';
import config from '../config.js';
import { connect } from 'react-redux';
import { TimeAgo } from '../_components';
import { Link } from 'react-router-dom';
class MangaItem extends Component {
	render() {
		console.log(this.props.manga)
		let { picture, isHot, name, _id, desc, createdAt, categories } = this.props.manga;
		let imageUrl = config.apiUrl + picture.url;
		let imageDefault = '/images/chu-nhan-xin-hay-coi-ra_1502711358.jpg';

		let listCategories = [];

		categories.map(function(category, index) {
			listCategories.push(
				<Link key={index} className="blue" to={'/category/'+category._id}>{category.name}</Link>
			);
		})
		return(
			<div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 cm-item">
	        <div className="story-item">
	          <Link to={'/manga/' + _id}>
	            <img className="story-cover img-responsive"  onError={(e)=>{
	            	e.target.src=imageDefault;
	            }
	            } alt={picture.name} src={imageUrl} />
	          </Link>
	          <div className="top-notice">
	            <span className="time-ago">{ TimeAgo(createdAt) }</span> {isHot && <span className="type-label hot">Hot</span>} </div>
	          <h3 className="title-book">
	          	<Link to={'/manga/' + _id}>{name}</Link>
	          </h3>
	          <div className="episode-book"><Link to={'/manga/' + _id}> Chương 35</Link></div>
	          <div className="more-info">
	            <div className="title-more">{name}</div>
	            <p className="info">Tình trạng: Đang Cập Nhật</p>
	            <p className="info">Lượt xem: 58,432</p>
	            <p className="info">Lượt theo dõi: 164</p>
	            <div className="list-tags">
					{listCategories}	           
	            </div>
	            <div className="excerpt">{desc.length > 300 ? desc.substring(0, 300) + '...': desc}
	            </div>
	          </div>
	        </div>
	      </div>
		);
	}
}

const connectedMangaItem = connect()(MangaItem);
export { connectedMangaItem as MangaItem };