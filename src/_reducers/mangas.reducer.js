import { mangaConstants } from '../_constants';

export function mangas(state = {}, action) {
	switch(action.type) {
		case mangaConstants.GETALL_REQUEST:
			return { loading: true };

		case mangaConstants.GETALL_SUCCESS:
			return { items: action.mangas };

		case mangaConstants.GETALL_FAILURE:
			return { error: action.error };


		
			
		default: 
			return state;

		

		
	}
}

export function manga(state = {}, action) {
	switch(action.type) {

		case mangaConstants.GETBYID_REQUEST:
			return { loading: true };

		case mangaConstants.GETBYID_SUCCESS:
			return { item: action.manga };

		case mangaConstants.GETBYID_FAILURE:
			return { error: action.error };
		
		
			
		default: 
			return state;

		

		
	}
}
