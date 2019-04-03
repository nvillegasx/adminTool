import axios from "axios"
import{GET_ENDPOINTS} from './Types'


export const getEndpoints=()=> dispatch =>{

    // will change the value by having it be the current selected app
    // value will change based on the current application selected
    // https://integratedservices.amr.net/msat/api/v1/apiEndpoints
    //parameters ?type=allEndpoints&value=3
    
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
