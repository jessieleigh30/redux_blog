import React from 'react';
import { connect, } from 'react-redux';
import Blog from "./Blog";

const BlogList = ({ blogs }) => (
  <ul style ={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
    { 
       blogs.map (blog => {
        return ( <Blog key={blog.id} {...blog} /> )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(BlogList);