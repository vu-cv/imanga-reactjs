import { likeConstants } from '../_constants';


export function likes(state = {}, action) {
	switch(action.type) {
		case likeConstants.GETALL_REQUEST:
			return { loading: true };

		case likeConstants.GETALL_SUCCESS:
			return { items: action.likes };

		case likeConstants.GETALL_FAILURE:
			return { error: action.error };

		case likeConstants.like_REQUEST:
			return { likeing: true, manga: action.manga };

		case likeConstants.like_SUCCESS:
			return { likeed: true, manga: action.likes };

		case likeConstants.like_FAILURE:
			return { likeed: false, manga: action.error };

			
		default: 
			return state;

		

		
	}
}
