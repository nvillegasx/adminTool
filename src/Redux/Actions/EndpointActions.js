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
        // (response)=>
        // console.log( response.data.endpoints)
        (response) =>
        {dispatch({
        type: GET_ENDPOINTS,
        payload: response.data.endpoints
    })
    // console.log(response.data.endpoints)
}
    );

    // axios.get('https://integratedservices.amr.net/msat/api/v1/admins', { type: 'allAdmins'})
    // .then(response => console.log(response))

}