import { categoryConstants } from '../_constants';

export function categories(state = {}, action) {
	switch(action.type) {
		case categoryConstants.GETALL_REQUEST:
			return { loading: true };

		case categoryConstants.GETALL_SUCCESS:
			return { items: action.categories };

		case categoryConstants.GETALL_FAILURE:
			return { error: action.error };


		
			
		default: 
			return state;

		

		
	}
}

export function category(state = {}, action) {
	switch(action.type) {

		case categoryConstants.GETBYID_REQUEST:
			return { loading: true };

		case categoryConstants.GETBYID_SUCCESS:
			return { item: action.category };

		case categoryConstants.GETBYID_FAILURE:
			return { error: action.error };
		
		
			
		default: 
			return state;

		

		
	}
}
