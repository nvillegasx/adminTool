import React, { Component } from 'react'
import{connect} from 'react-redux'

import {fetchPosts,fetchComments} from '../Redux/Actions/PostActions'



 class Posts extends Component {
 
constructor(props){
  super(props);
  this.state={
    title:''
  }
}




componentWillMount(){

    //this.props.fetchPosts();
    console.log(this.props);
    //if the route is on the path of screen one call this.props.fetchComments
    if(this.props.pathScreenOne){
    this.props.fetchComments();
    }
    else
    this.props.fetchPosts();
}
    
render() {
    const postItems= this.props.posts.map(post =>(
        <div key={post.id}>
        <p>{post.id}</p>
       <p>{post.title}</p>
        <p>{post.body}</p>
        <p>{post.email}</p>
        </div>

    ))

    return (
      <div>
        <h1>Endpoint</h1>
        <p>endpoint description</p>
        <p>api call: https://api.com/v1/admins</p>
        <div>
          <p>Example call</p>
          <p>Example response</p>
        </div>
        <div>
          <h3>Path Params</h3>
          <p>param 1</p>
        </div>
        <div>
          <h3>Body Params</h3>
          <p>param 1</p>
        </div>
        <div>
          <h3>Responses</h3>
          <div>
            <h4>200 OK</h4>
          </div>
        </div>
        {/* {postItems} */}
      </div>
    )
  }
}

//maps the state to the props (sort of like creating props from the state)
const mapStateToProps= state =>({

    posts:state.posts.items
})

export default connect(mapStateToProps,{fetchPosts,fetchComments})(Posts);
