import React, {Component} from 'react';
import {Headers} from './layouts/Header';
// import Footer from './components/layouts/Footer';
import {Home} from './pages/Home';
import {Detail} from './pages/Detail';
import {Account} from './pages/Account';
import Chapter from './pages/Chapter';
import Follow from './pages/Follow';
import { Category } from './pages/Category';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

import ScrollTopRoute from './_components/ScrollTopRoute';

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
	  		<ScrollTopRoute path="/account" component={Account}/>
	  		<ScrollTopRoute path="/chapter" component={Chapter}/>
	  		<ScrollTopRoute path="/follow" component={Follow}/>
	  		<ScrollTopRoute path="/history" component={Follow}/>
	  		
	  		<ScrollTopRoute path="/category/:id" component={Category}/>
	  		<ScrollTopRoute path="/login" component={Login}/>
	  		<ScrollTopRoute path="/register" component={Register}/>
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