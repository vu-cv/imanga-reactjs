import React, {Component} from 'react';
// import Header from '../../components/layouts/Header';
import { Footer, MangaItem } from '../../layouts';
// import './style.css';
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { detailActions, followActions, likeActions, mangaActions } from '../../_actions';
import config from '../../config.js';
class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			catId: '',
			isFollow: null
		};

		// console.log(this.props.isFollow)
		let { id } = this.props.match.params;
		this.props.viewCount(id);

		this.onFollow = this.onFollow.bind(this);
		this.onLike = this.onLike.bind(this);

		const { loggedIn, user } = this.props;

        this.props.getManga(id, loggedIn, user);

        this.props.history.listen((location, action) => {
        	let pathName = location.pathname.split('/')[1]
        	let mangaId = location.pathname.split('/')[2]
        	if (pathName == "manga") {
				this.props.getManga(mangaId);        		
        	}
        })


	}

	componentDidMount() {
		console.log(this.state)
        this.props.getMangas(6, null, null)
    }

    onFollow(e, isFollow) {
    	e.preventDefault();
    	const { loggedIn, user } = this.props;
    	let { item } = this.props.detail;
    	this.props.createFollow(loggedIn, item, user)

    	
    }

    onLike(e) {
    	e.preventDefault();

    	const { loggedIn } = this.props;
    	let { item } = this.props.detail;
    	this.props.createLike(loggedIn, item)
    }


    

	render() {
		
		let { id } = this.props.match.params;
		let { item, isFollow } = this.props.detail;
		let { mangas, loggedIn, checkIsFollow } = this.props;
		console.log(checkIsFollow)
		let authors = [];
		let categories = [];
		let chapters = [];
		let cungTheLoai = [];
		let imageUrl = '';

		

		let imageDefault = '/images/chu-nhan-xin-hay-coi-ra_1502711358.jpg';

		let btnFollow = <li className="li02">
		<a href={''} onClick={this.onFollow} className="button is-danger is-rounded btn-subscribe subscribeBook" data-page="index" data-id={4097}>
		<span className="fa fa-heart-o" />Theo dõi</a>
		</li>;

		let btnLike = <li className="li03">
				            <a href={''} onClick={this.onLike} className="button is-danger is-rounded btn-like" data-id={4097}><span className="fa fa-thumbs-o-up" />Thích</a>
				          </li>;


		if (item) {
			item.chapters.map(function(chapter, index) {
				chapters.push(
					<div key={index} className="works-chapter-item row">
			            <div className="col-md-10 col-sm-10 col-xs-8 ">
			              <a target="_blank" rel="noopener noreferrer" href={'/chapter/'+id+'/'+chapter._id}>Chương {index + 1}</a>
			            </div>
			            <div className="col-md-2 col-sm-2 col-xs-4 text-right">
			              {new Date(chapter.createdAt).toLocaleDateString()} </div>
			          </div>
				);
			})
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

			if (!loggedIn) {

				let mangas = JSON.parse(localStorage.getItem('mangas')) || [];
				let likes = JSON.parse(localStorage.getItem('likes')) || [];
				// console.log(mangas)

				let check = mangas.findIndex(index => {
					return index.id == item.id;
				});

				let checkLike = likes.findIndex(index => {
					return index.id == item.id;
				});
				
				if (check != -1) {
					btnFollow = <li className="li02">
					<a href={''} onClick={this.onFollow} className="button is-danger is-rounded btn-subscribe subscribeBook" data-page="index" data-id={4097}>
					<span className="fa fa-heart" />Hủy theo dõi</a>
					</li>;
				}

				if (checkLike != -1) {
					btnLike = <li className="li03">
					            <a href={''} onClick={this.onLike} className="button is-danger is-rounded btn-like" data-id={4097}>
					            <span className="fa fa-thumbs-up" />Đã thích</a>
					          </li>;
				}
			} else {


			}

			

		}

		let styleImage = {
			maxWidth: '190px',
    		maxHeight: '247px'
		}

		if (mangas.items) {
			mangas.items.map(function(manga, index) {
				cungTheLoai.push(<MangaItem key={index} manga={manga} />)
			})
		}

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
				          <p className="info-item">Tác giả: <a className="org" href={''}>{authors}</a></p>
				          <p className="info-item">Tình trạng: { item && item.status ? 'Hoàn thành' : 'Chưa hoàn thành' }</p>
				          <div>
				            <span>Thống kê:</span>
				            <span className="sp01"><i className="fa fa-thumbs-up" /> <span className="sp02 number-like">{item && item.likeCount}</span></span>
				            <span className="sp01"><i className="fa fa-heart" /> <span className="sp02">{item && item.followCount}</span></span>
				            <span className="sp01"><i className="fa fa-eye" /> <span className="sp02">{item && item.viewCount}</span></span>
				          </div>
				        </div>
				        <ul className="list01">
				          {categories}
				        </ul>
				        <ul className="story-detail-menu">
				          <li className="li01"><Link to={item && '/chapter/'+ id+ '/' + (item.chapters.length > 0 ? item.chapters[item.chapters.length-1]._id : '')} className="button is-danger is-rounded"><span className="btn-read" />Đọc từ đầu</Link></li>
				          {btnFollow}
				          {btnLike}
				          
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
				        	{chapters}
				        </div>
				      </div>
				    </div>
				    <div className="block03">
				      <h2 className="story-detail-title">Cùng thể loại</h2>
				      {cungTheLoai}
				    </div>
				  </div>
				</section>

	  		<Footer />

	  	</div>
	  );
	}
}

function mapState(state) {
    const { detail, follows, followed, likes, mangas, checkIsFollow } = state;
    const { loggedIn, user } = state.authentication;
    return { detail, follows, loggedIn, followed, mangas, user, checkIsFollow };
}

const actionCreators = {
    getManga: detailActions.getById,
    getFollows: followActions.getAll,
    getIsFollow: followActions.checkIsFollow,
    createFollow: followActions.create,
    createLike: likeActions.create,
    viewCount: mangaActions.viewCount,
    getMangas: mangaActions.getAll,

}

const connectedDetailPage = connect(mapState, actionCreators)(Detail);
export { connectedDetailPage as Detail };