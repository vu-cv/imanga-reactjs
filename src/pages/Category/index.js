import React, {Component} from 'react';
// import Header from '../../components/layouts/Header';
import {Helmet} from "react-helmet";
import { Footer } from '../../layouts';
import { Pagination } from '../../layouts';
import { connect } from 'react-redux';
import { categoryActions, mangaActions } from '../../_actions';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MangaItem } from "../../layouts";

// import './style.css';
class Category extends Component {

	constructor(props) {
		super(props);
		let { id } = this.props.match.params;

		this.state = {
			typeOption: id
		};

        this.props.getCategories();
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		let { id } = this.props.match.params;
		
        this.props.getMangas(null, null, 'categories='+id)
    }

    handleChange(e) {
    	this.setState({
    		typeOption: e.target.value
    	})

    	this.props.history.push('/category/'+e.target.value)
    	this.props.getMangas(null, null, 'categories='+e.target.value)

    }

	render() {
		let params = this.props.match.params;
		const { category, categories, mangas } = this.props;
		
		let commicType = [];
		let listMangas = [];



		if (categories.items) {

			categories.items.map(function(category, index) {
				commicType.push(<option key={index} value={category.id}>{category.name}</option>)
			})
		}

		if (mangas.items) {
			mangas.items.map(function(manga, index) {
				listMangas.push(<MangaItem key={index} manga={manga} />);
			})
		}

	  return (
	  	<div className="wrap-content">
	  		<Helmet>
                <title>{ category.item && category.item.name }</title>
                <link rel="stylesheet" href="/css/category.css" />
                <script type="text/javascript" data-type={params.id} src="/js/category.js"></script>
            </Helmet>
	  			<section className="main-content">
				  <div className="container story-list">
				    <div className="title-list">{ category.item && category.item.name }</div>
				    <div className="box">
				      { category.item && category.item.desc }
				    </div>
				    <div className="story-list-bl01 box">
				      <table>
				        <tbody>
				          <tr>
				            <th>Thể loại truyện</th>
				            <td>
				              <div className="select is-warning">
					            <select onChange={this.handleChange} value={this.state.typeOption}  name="type" id="category">
				                  {commicType}
				                </select>
				              </div>
				            </td>
				          </tr>
				          <tr>
				            <th>Tình trạng</th>
				            <td>
				              <ul className="choose">
				                <li><a className="" href="https://truyenqq.com/the-loai/adult-68.html?status=0">Đang tiến hành</a></li>
				                <li><a className="" href="https://truyenqq.com/the-loai/adult-68.html?status=2">Hoàn thành</a></li>
				              </ul>
				            </td>
				          </tr>
				          <tr>
				            <th>Quốc gia</th>
				            <td>
				              <ul className="choose">
				                <li><a className="" title="Truyện Trung Quốc" href="https://truyenqq.com/the-loai/adult-68.html?country=1">Trung Quốc</a></li>
				                <li><a className="" title="Truyện Việt Nam" href="https://truyenqq.com/the-loai/adult-68.html?country=2">Việt Nam</a></li>
				                <li><a className="" title="Truyện Hàn Quốc" href="https://truyenqq.com/the-loai/adult-68.html?country=3">Hàn Quốc</a></li>
				                <li><a className="" title="Truyện Nhật Bản" href="https://truyenqq.com/the-loai/adult-68.html?country=4">Nhật Bản</a></li>
				                <li><a className="" title="Truyện Mỹ" href="https://truyenqq.com/the-loai/adult-68.html?country=5">Mỹ</a></li>
				              </ul>
				            </td>
				          </tr>
				          <tr>
				            <th>Sắp xếp</th>
				            <td>
				              <div className="select is-warning">
				                <select id="category-sort">
				                  <option value="https://truyenqq.com/the-loai/adult-68.html?sort=0">Ngày đăng giảm dần</option>
				                  <option value="https://truyenqq.com/the-loai/adult-68.html?sort=1">Ngày đăng tăng dần</option>
				                  <option value="https://truyenqq.com/the-loai/adult-68.html?sort=2">Ngày cập nhật giảm dần</option>
				                  <option value="https://truyenqq.com/the-loai/adult-68.html?sort=3">Ngày cập nhật tăng dần</option>
				                  <option value="https://truyenqq.com/the-loai/adult-68.html?sort=4">Lượt xem giảm dần</option>
				                  <option value="https://truyenqq.com/the-loai/adult-68.html?sort=5">Lượt xem tăng dần</option>
				                </select>
				              </div>
				            </td>
				          </tr>
				        </tbody>
				      </table>
				    </div>
				    <div className="cat-list">
				      <div className="sr-only">phải có thì mới đúng</div>
				      {listMangas}
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

function mapState(state) {
    const { category, categories, mangas } = state;
    return { category, categories, mangas };
}

const actionCreators = {
    getCategories: categoryActions.getAll,
    getCategory: categoryActions.getById,
    getMangas: mangaActions.getAll
}

const connectedCategoryPage = connect(mapState, actionCreators)(Category);
export { connectedCategoryPage as Category };