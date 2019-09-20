import React, {Component} from 'react';

import { Link } from "react-router-dom";
import ReactMarkdown from'react-markdown';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import { chapterActions, mangaActions } from '../../_actions';
class Chapter extends Component {
	constructor(props) {
		super(props);
		const { mangaId, chapterId } = this.props.match.params;
		this.state = {
			valueSelect: chapterId,
			currentChapter: chapterId
		};


		this.onChangeChapter = this.onChangeChapter.bind(this);
		this.nextChapter = this.nextChapter.bind(this);
		this.prevChapter = this.prevChapter.bind(this);
		
	}

	componentDidMount() {
		const { mangaId, chapterId } = this.props.match.params;
		this.props.getManga(mangaId);
	}

	onChangeChapter(e) {
		const { mangaId, chapterId } = this.props.match.params;
		this.setState({
    		valueSelect: e.target.value
    	})
    	this.props.history.push('/chapter/'+mangaId+'/'+e.target.value)
	}

	nextChapter(e) {
		e.preventDefault();
		const { mangaId, chapterId } = this.props.match.params;
		var select = document.getElementById('selectEpisode');
		var option = document.querySelectorAll('#selectEpisode option');

		var index = select.selectedIndex;
		var curentSelect = option[index];
		var nextSelect = null;
		if (index == 0) {
			nextSelect = select.lastChild
		} else {
			nextSelect = curentSelect.previousSibling
		}

		console.log(nextSelect)
		console.log(index)

		this.setState({
    		valueSelect: nextSelect.value
    	})

    	this.props.history.push('/chapter/'+mangaId+'/'+nextSelect.value)
	}
	prevChapter(e) {
		e.preventDefault();
		const { mangaId, chapterId } = this.props.match.params;
		var select = document.getElementById('selectEpisode');
		var option = document.querySelectorAll('#selectEpisode option');

		var index = select.selectedIndex;
		var curentSelect = option[index];
		var prevSelect = null;
		if (index == option.length-1) {
			prevSelect = select.firstChild
		} else {
			prevSelect = curentSelect.nextSibling
		}

		console.log(prevSelect)
		console.log(index)

		this.setState({
    		valueSelect: prevSelect.value
    	})

    	this.props.history.push('/chapter/'+mangaId+'/'+prevSelect.value)
	}
	


	render() {
		const { manga } = this.props;
		const { mangaId, chapterId } = this.props.match.params;
		let currentChapter = null;
		let name = '';
		let content = '';
		let chapters = null;

		if (manga.item) {
			chapters  = manga.item.chapters
			let index = chapters.findIndex(x => x._id == chapterId);
			currentChapter = chapters[index];

		}
		
		if(currentChapter) {
			name = currentChapter.name;
			content = currentChapter.content;
		}


		// console.log(chapters)
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
				                  <Link itemProp="item" to="/">
				                    <span itemProp="name">Trang Chủ</span>
				                  </Link>
				                  <meta itemProp="position" content={1} />
				                </li>
				                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
				                  <Link itemProp="item" to={manga.item && '/manga/'+manga.item._id}>
				                    <span itemProp="name">{ manga.item && manga.item.name }</span>
				                  </Link>
				                  <meta itemProp="position" content={2} />
				                </li>
				                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
				                  <a itemProp="item" href="">
				                    <span itemProp="name">{name}</span>
				                  </a>
				                  <meta itemProp="position" content={3} />
				                </li>
				              </ol>
				            </div>
				            <h1 className="detail-title"><a href="">{ manga.item && manga.item.name }</a> Chap {currentChapter && currentChapter.chapterNumber}</h1>
				          </div>
				          <div className="story-see-content"><ReactMarkdown source={content} /></div>
				        </div>
				      </div>
				      <div id="stop" className="scrollTop">
				        <span><a href="#haha"><img src="/images/back-to-top-icon.png" alt="top-icon" /></a></span>
				      </div>
				    </div>
				  </section>
				  <section className="story-see-footer has-background-white" style={{}}>
				    <div className="container">
				      <div className="level">
				        <div className="level-left">
				          <ul className="list-01">
				            <li><Link className="" to={'/'}><i className="fa fa-home" /> <span className="control-see">Trang chủ</span></Link></li>
				            <li><a target="_blank" className="" href="https://www.facebook.com/IManga-Mobile-110295377029139" id="faul"><i className="fa fa-exclamation-circle" /> <span className="control-see">Báo lỗi</span></a></li>
				          </ul>
				        </div>
				        <div className="center level">
				          <div onClick={this.prevChapter} className="prev level-left"><a className="link-prev-chap" href={''} title="Kawaii Joushi O Komasareta Chap 1"><i className="fa fa-arrow-circle-left" /></a></div>
				          <select onChange={this.onChangeChapter} id="selectEpisode" className="selectEpisode" value={this.state.valueSelect} >
				            {chapters && chapters.map(function(chapter, index) {
					            return <option id={index} key={index} value={chapter._id}>Chương {chapter.chapterNumber}</option>
				            })}
				          </select>
				          <div onClick={this.nextChapter} className="next level-right"><a className="link-next-chap" href={''} title="Kawaii Joushi O Komasareta Chap 3"><i className="fa fa-arrow-circle-right" /></a></div>
				        </div>
				        <div className="level-right">
				          <ul className="list-01">
				            <li><a className="light-see" href="#"><i className="fa fa-lightbulb-o" /> <span className="control-see">Tắt đèn</span></a></li>
				            <li><a className="subscribeBook" href="#" data-id={7648} data-page="detail"><i className="fa fa-heart-o" /> <span className="control-see">Theo dõi</span></a></li>
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
    const { chapters, manga } = state;
    return { chapters, manga };
}

const actionCreators = {
    getChapters: chapterActions.getAll,
    getManga: mangaActions.getById
}

const connectedChapterPage = connect(mapState, actionCreators)(Chapter);
export { connectedChapterPage as Chapter };