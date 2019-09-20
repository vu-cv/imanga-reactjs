import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Footer } from '../../layouts';
import { Pagination } from '../../layouts';
import { connect } from 'react-redux';
import { categoryActions, mangaActions } from '../../_actions';
import { MangaItem, CategoryPage } from "../../layouts";
import queryString from 'query-string';
import {Link} from 'react-router-dom';
class Category extends Component {

	constructor(props) {
		super(props);
		let { id } = this.props.match.params;

		this.state = {
			typeOption: id,
			categoryId: id
		};



        this.props.getCategories();
        this.props.getCategory(id);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeSort = this.handleChangeSort.bind(this);
	}

	componentDidMount() {
		let { id } = this.props.match.params;
		
		const params = queryString.parse(this.props.location.search);
		
		if (params.status) {
			if (params.status == 0) {
        		this.props.getMangas(null, null, 'categories='+id+'&status=false')
			} else {
				this.props.getMangas(null, null, 'categories='+id)
			}
		} else {
			this.props.getMangas(null, null, 'categories='+id)
		}

    }

    handleChange(e) {
    	this.setState({
    		typeOption: e.target.value
    	})

    	this.props.history.push('/category/'+e.target.value)
    	this.props.getMangas(null, null, 'categories='+e.target.value)

    	this.props.getCategory(e.target.value);

    }

    handleChangeSort(e) {
    	console.log(e.target.value)
    	let { categoryId } = this.state;
    	this.props.history.push(e.target.value)
    }

    componentDidUpdate(prevProps, prevState){
    	if(prevProps.location.search != this.props.location.search) {
    		const params = queryString.parse(this.props.location.search);
    		let { id } = this.props.match.params;
    		if (params.status) {
	       		this.props.getMangas(null, null, 'categories='+id+'&status='+params.status)
			} else if (params.sort) {
				this.props.getMangas(null, params.sort, 'categories='+id)
			}
    	}


    	
    }

	render() {
		let params = this.props.match.params;
		const { category, categories, mangas } = this.props;
		const query = queryString.parse(this.props.location.search);
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
				                <li><Link className={query.status == 'false' ? 'active' : ''} to={'/category/'+params.id+'?status=false'}>Đang tiến hành</Link></li>
				                <li><Link className={query.status == 'true' ? 'active' : ''} to={'/category/'+params.id+'?status=true'}>Hoàn thành</Link></li>
				                
				              </ul>
				            </td>
				          </tr>
				          <tr>
				            <th>Quốc gia</th>
				            <td>
				              <ul className="choose">
				                <li><a className="" title="Truyện Trung Quốc" href={'/category/'+params.id+'?country=0'}>Trung Quốc</a></li>
				                <li><a className="" title="Truyện Việt Nam" href={'/category/'+params.id+'?country=1'}>Việt Nam</a></li>
				                <li><a className="" title="Truyện Hàn Quốc" href={'/category/'+params.id+'?country=2'}>Hàn Quốc</a></li>
				                <li><a className="" title="Truyện Nhật Bản" href={'/category/'+params.id+'?country=3'}>Nhật Bản</a></li>
				                <li><a className="" title="Truyện Mỹ" href={'/category/'+params.id+'?country=4'}>Mỹ</a></li>
				              </ul>
				            </td>
				          </tr>
				          <tr>
				            <th>Sắp xếp</th>
				            <td>
				              <div className="select is-warning">
				                <select id="category-sort" onChange={this.handleChangeSort}>
				                  <option value={'/category/'+params.id+'?sort=createdAt:DESC'}>Ngày đăng giảm dần</option>
				                  <option value={'/category/'+params.id+'?sort=createdAt:ASC'}>Ngày đăng tăng dần</option>
				                  <option value={'/category/'+params.id+'?sort=updatedAt:DESC'}>Ngày cập nhật giảm dần</option>
				                  <option value={'/category/'+params.id+'?sort=updatedAt:ASC'}>Ngày cập nhật tăng dần</option>
				                  <option value={'/category/'+params.id+'?sort=viewCount:DESC'}>Lượt xem giảm dần</option>
				                  <option value={'/category/'+params.id+'?sort=viewCount:ASC'}>Lượt xem tăng dần</option>
				                </select>
				              </div>
				            </td>
				          </tr>
				        </tbody>
				      </table>
				    </div>
				    <CategoryPage mangas={listMangas} />
				    
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