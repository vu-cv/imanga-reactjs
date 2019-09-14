import { chapterConstants } from '../_constants';

export function chapters(state = {}, action) {
	switch(action.type) {
		case chapterConstants.GETALL_REQUEST:
			return { loading: true };

		case chapterConstants.GETALL_SUCCESS:
			return { items: action.chapters };

		case chapterConstants.GETALL_FAILURE:
			return { error: action.error };


		
			
		default: 
			return state;

		

		
	}
}

export function chapter(state = {}, action) {
	switch(action.type) {

		case chapterConstants.GETBYID_REQUEST:
			return { loading: true };

		case chapterConstants.GETBYID_SUCCESS:
			return { item: action.chapter };

		case chapterConstants.GETBYID_FAILURE:
			return { error: action.error };
		
		
			
		default: 
			return state;

		

		
	}
}
