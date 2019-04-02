import axios from "axios"
import{FETCH_POSTS,FETCH_COMMENTS, GET_APPS} from './Types'




export const fetchPosts=()=> dispatch =>{

    axios.get('https://integratedservices.amr.net/msat/api/v1/admins?type=allAdmins')
    .then((response) => console.log(response));
    //     response=>dispatch({
    //     // with axios returns more layers such as data,status,headers,
    //     //config 
    //     // payload needs to be response.data to get the data from the api
    //     type:FETCH_POSTS,
    //     payload:response.admins

    // }
    // )
    // );

    // axios.get('https://integratedservices.amr.net/msat/api/v1/admins', { type: 'allAdmins'})
    // .then(response => console.log(response))

}

// export const selectedApp =()=> dispatch =>{

//     axios.get('https://integratedservices.amr.net/msat/api/v1/applications?type=allApplications')
//     .then(
//         (response) => dispatch({
//             type: GET_APPS,
//             payload: response.data.applications
//         })
//     );


// }


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