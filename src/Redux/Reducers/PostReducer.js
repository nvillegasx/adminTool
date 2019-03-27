import{FETCH_POSTS} from '../Actions/Types'
import{FETCH_COMMENTS} from '../Actions/Types'

const initialState={
    
    items:[],
};

export default function(state = initialState,action){

    switch(action.type){
      case FETCH_POSTS:
       return{
           ...state,
           items:action.payload
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
