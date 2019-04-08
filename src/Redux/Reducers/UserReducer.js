import{CHANGE_USERNAME} from '../Actions/Types'

const initialState = {
    //userName:"" 
   account:""
};

export default function(state = initialState,action){


    switch(action.type){
        case CHANGE_USERNAME:
        return {
            ...state,
            //userName:action.payload
            account:action.payload
        }
        default:
        return state;

    }
}