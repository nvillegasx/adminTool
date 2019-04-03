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
       <p>{post.firstName}</p>
        <p>{post.lastName}</p>
        <p>{post.email}</p>
        </div>

    ))

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

//maps the state to the props (sort of like creating props from the state)
const mapStateToProps= state =>({

    posts:state.posts.items
})

export default connect(mapStateToProps,{fetchPosts,fetchComments})(Posts);
