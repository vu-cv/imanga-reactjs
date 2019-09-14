import { followConstants } from '../_constants';

export function follows(state = {}, action) {
	switch(action.type) {
		case followConstants.GETALL_REQUEST:
			return { loading: true };

		case followConstants.GETALL_SUCCESS:
			return { items: action.follows };

		case followConstants.GETALL_FAILURE:
			return { error: action.error };


		
			
		default: 
			return state;

		

		
	}
}
