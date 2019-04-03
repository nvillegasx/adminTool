import axios from "axios"
import{GET_APPLICATIONS_ID} from './Types'


export const getApplications=()=> dispatch =>{

    // will change the value by having it be the current selected app
    // value will change based on the current application selected
    // https://integratedservices.amr.net/msat/api/v1/apiEndpoints
    //parameters ?type=allEndpoints&value=3
    
    let params = {
        type: "allApplications",
    
    }
    axios.get('https://integratedservices.amr.net/msat/api/v1/applications', {params})
    .then(
        (response) =>
        {dispatch({
        type: GET_APPLICATIONS_ID,
        payload: response.data.applications
        })
        }
    );

}
