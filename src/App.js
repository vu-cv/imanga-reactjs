import React, {Component} from 'react';
import {Headers} from './layouts/Header';
// import Footer from './components/layouts/Footer';
import {Home} from './pages/Home';
import {Detail} from './pages/Detail';
import {Account} from './pages/Account';
import { Chapter } from './pages/Chapter';
import { Follow } from './pages/Follow';
import { History } from './pages/History';
import { Category } from './pages/Category';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Search } from './pages/Search';
import { Female } from './pages/Female';
import { Male } from './pages/Male';
import { LastUpdate } from './pages/LastUpdate';
import { Sort } from './pages/Sort';

import ScrollTopRoute from './_components/ScrollTopRoute';
import { PrivateRoute } from './_components';

import {Router, Route} from 'react-router-dom';
import { history } from './_helpers';

import { connect } from 'react-redux';
import { userActions, alertActions } from './_actions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHomeRightBar: false,
			loading: true
		}
		history.listen((location, action) => {
		    this.props.clearAlerts();
        });

	}
	demoAsyncCall() {
	  return new Promise((resolve) => setTimeout(() => resolve(), 0));
	}

	componentDidMount(){
		
		this.demoAsyncCall().then(() => this.setState({ loading: false }));
	}

	notify = (message) => {
    	const { alert } = this.props;
    	
    	if (alert.type == 'alert-danger') {
    		return toast.error(message);
    	} else if (alert.type == 'alert-success'){
    		return toast.success(message);
    	}
    	return toast(message);
    };


	render() {
		const { alert, loggedIn } = this.props;
		// console.log(alert)

		/*const { loading } = this.state;

		if (loading) {
			return (
				<h1>Loading...</h1>
			);
		}*/

	  return (
	  	<div className="wrap-content">
	  	{ alert.message &&
			this.notify(alert.message)
  			&& <ToastContainer />
		}
	  	<Router history={history}>
	  	<Headers isLogin={loggedIn} />
	  		<ScrollTopRoute exact path="/" component={Home}  title={"Props through render"} />
	  		<ScrollTopRoute path="/manga/:id" component={Detail}/>
	  		<PrivateRoute path="/account" component={Account}/>
	  		<ScrollTopRoute path="/chapter/:mangaId/:chapterId" component={Chapter}/>
	  		<ScrollTopRoute path="/theo-doi.html" component={Follow}/>
	  		<ScrollTopRoute path="/lich-su.html" component={History}/>
	  		<ScrollTopRoute path="/search" component={Search}/>
	  		
	  		<ScrollTopRoute path="/category/:id" component={Category}/>
	  		<ScrollTopRoute path="/login" component={Login}/>
	  		<ScrollTopRoute path="/register" component={Register}/>
	  		<ScrollTopRoute path="/truyen-con-gai.html" component={Female}/>
	  		<ScrollTopRoute path="/truyen-con-trai.html" component={Male}/>
	  		<ScrollTopRoute path="/truyen-moi-cap-nhat.html" component={LastUpdate}/>
	  		<ScrollTopRoute path="/sort/:sortBy" component={Sort}/>
		</Router>
	  	</div>
	  );
	}

}

function mapState(state) {
	const { loggedIn } = state.authentication;
    const { alert } = state;
    return { alert, loggedIn };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedAppPage = connect(mapState, actionCreators)(App);
export { connectedAppPage as App };