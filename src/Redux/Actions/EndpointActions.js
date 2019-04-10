import axios from "axios"
import{GET_ENDPOINTS} from './Types'


export const getEndpoints=()=> dispatch =>{

    // will change the value by having it be the current selected app
    let params = {
        type: "allEndpoints",
        value: "3"
    }
    axios.get('https://integratedservices.amr.net/msat/api/v1/apiEndpoints', {params})
    .then(
        (response) =>
        {dispatch({
        type: GET_ENDPOINTS,
        payload: response.data.endpoints
        })
        }
    );

}

export const createNewEndpointRoute=(routeData)=> dispatch => {
    // {
    //     "endpointID": "1",
    //     "adminID": "1",
    //     "requestType": "GET",
    //     "description": "Returns all the terms and conditions",
    //     "exCall": "api/v1/terms"
    // }
}
