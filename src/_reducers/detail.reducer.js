import { detailConstants } from '../_constants';

export function detail(state = {}, action) {
	switch(action.type) {
		case detailConstants.GETBYID_REQUEST:
			return { loading: true };

		case detailConstants.GETBYID_SUCCESS:
			return { item: action.detail };

		case detailConstants.GETBYID_FAILURE:
			return { error: action.error };


		
			
		default: 
			return state;

		

		
	}
}
