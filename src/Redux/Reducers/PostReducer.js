import{FETCH_POSTS} from '../Actions/Types'
import{FETCH_COMMENTS} from '../Actions/Types'
import{GET_APPS} from '../Actions/Types'
import{FETCH_ADMINS} from '../Actions/Types'


const initialState={
    
    items:[],
    apps: []
};

export default function(state = initialState,action){

    switch(action.type){
      case FETCH_ADMINS:
       return{
           ...state,
           items:action.payload
        }
      case GET_APPS:
        return {
            ...state,
            apps: action.payload
        }
      case FETCH_COMMENTS:
            return{
                ...state,
                items:action.payload
                }
      default:
        return state;
    }


}
