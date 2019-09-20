import { followConstants } from '../_constants';


export function follows(state = {}, action) {
	switch(action.type) {
		case followConstants.GETALL_REQUEST:
			return { loading: true };

		case followConstants.GETALL_SUCCESS:
			return { items: action.follows };

		case followConstants.GETALL_FAILURE:
			return { error: action.error };

		case followConstants.FOLLOW_REQUEST:
			return { following: true, manga: action.manga };

		case followConstants.FOLLOW_SUCCESS:
			return { followed: true, manga: action.follows };

		case followConstants.FOLLOW_FAILURE:
			return { followed: false, manga: action.error };

			
		default: 
			return state;

		

		
	}
}

export function checkIsFollow(state = {}, action) {
	switch(action.type) {
		case followConstants.ISFOLLOW_REQUEST:
			return { isfollowing: true };

		case followConstants.ISFOLLOW_SUCCESS:
			return { isFollow: action.theodoi };

		case followConstants.ISFOLLOW_FAILURE:
			return {  };
		

			
		default: 
			return state;
	}
}