import{GET_ENDPOINTS} from '../Actions/Types'

const initialState = {
    endpoints: []
};

export default function(state = initialState,action){


    switch(action.type){
        case GET_ENDPOINTS:
        return {
            ...state,
            endpoints: action.payload
        }
        default:
        return state;

    }
}