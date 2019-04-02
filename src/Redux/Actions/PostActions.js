import axios from "axios"
import{FETCH_POSTS,FETCH_COMMENTS} from './Types'




export const fetchPosts=()=> dispatch =>{

    axios.get('https://integratedservices.amr.net/msat/api/v1/admins?type=allAdmins')
    .then(response=>dispatch({
        // with axios returns more layers such as data,status,headers,
        //config 
        // payload needs to be response.data to get the data from the api
        type:FETCH_POSTS,
        //have to go a layer extra for admins
        payload:response.data.admins

    })
    );

}

export const fetchComments=()=> dispatch =>{

    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response=>dispatch({
        // with axios returns more layers such as data,status,headers,
        //config 
        // payload needs to be response.data to get the data from the api
        type:FETCH_COMMENTS,
        payload:response.data

    })
    );

}