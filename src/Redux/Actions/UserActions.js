import {CHANGE_USERNAME} from './Types'


//dispatches the action to the store

export const passUsername = username =>({

    type: CHANGE_USERNAME,
    payload:username
     
      //does not need username since the payload is being passed from
      //the login user enters
  
    
}) 
