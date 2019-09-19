import { historyConstants } from '../_constants';


export function historys(state = {}, action) {
	switch(action.type) {
		case historyConstants.GETALL_REQUEST:
			return { loading: true };

		case historyConstants.GETALL_SUCCESS:
			return { items: action.historys };

		case historyConstants.GETALL_FAILURE:
			return { error: action.error };

		case historyConstants.HISTORY_REQUEST:
			return { historying: true, manga: action.manga };

		case historyConstants.HISTORY_SUCCESS:
			return { historyed: true, manga: action.historys };

		case historyConstants.HISTORY_FAILURE:
			return { historyed: false, manga: action.error };

			
		default: 
			return state;

		

		
	}
}
