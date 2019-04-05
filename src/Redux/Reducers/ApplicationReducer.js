import{GET_APPLICATIONS} from '../Actions/Types'
import { GET_APPLICATIONS_ID} from '../Actions/Types'

const initialState = {
    applications: [],
    applicationId:''
};

export default function(state = initialState,action){


    switch(action.type){
        case GET_APPLICATIONS:
        return {
            ...state,
            applications: action.payload
        }

        case  GET_APPLICATIONS_ID:
        return{
            ...state,
            applicationId: action.payload
        }

        default:
        return state;

    }
}