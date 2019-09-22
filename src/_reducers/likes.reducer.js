import { likeConstants } from '../_constants';


export function likes(state = {}, action) {
	switch(action.type) {
		case likeConstants.GETALL_REQUEST:
			return { loading: true };

		case likeConstants.GETALL_SUCCESS:
			return { items: action.likes };

		case likeConstants.GETALL_FAILURE:
			return { error: action.error };

		case likeConstants.LIKE_REQUEST:
			return { liking: true };

		case likeConstants.LIKE_SUCCESS:
			return { 
				liked: action.dathich,
				manga: action.likes };

		case likeConstants.LIKE_FAILURE:
			return { error: action.error };

		case likeConstants.GETALL_FAILURE:
			return { error: action.error };

		case likeConstants.CHECKISLIKE_REQUEST:
			return { checkLiking: true };

		case likeConstants.CHECKISLIKE_SUCCESS:
			return { 
				liked: action.dathich,
				manga: action.likes 
			};

		case likeConstants.CHECKISLIKE_FAILURE:
			return { error: action.error };

		

			
		default: 
			return state;

		

		
	}
}
