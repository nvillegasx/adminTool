import{GET_APPLICATIONS_ID} from '../Actions/Types'

const initialState = {
    applications: []
};

export default function(state = initialState,action){


    switch(action.type){
        case GET_APPLICATIONS_ID:
        return {
            ...state,
            applications: action.payload
        }
        default:
        return state;

    }
}