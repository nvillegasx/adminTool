import axios from "axios"
import{GET_TYPEREQUEST} from './Types'



export const fetchRequestType=()=> dispatch =>{

    axios.get('https://integratedservices.amr.net/msat/api/v1/apiEndpoints?type=allEndpoints&value=3')
    .then(response=>dispatch({
        // with axios returns more layers such as data,status,headers,
        //config 
        // payload needs to be response.data to get the data from the api
        type:GET_TYPEREQUEST,
        payload:response.data.endpoints

    })
    );

}