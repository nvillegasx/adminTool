import{GET_TYPEREQUEST} from '../Actions/Types'


const initialState={
    
    types:[],
};

export default function(state = initialState,action){

    switch(action.type){
      case GET_TYPEREQUEST:
       return{
           ...state,
           types:action.payload
        }
     
      default:
        return state;
    }


}
