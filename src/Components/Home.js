import React from "react";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";

const Home = () => (
 <div style ={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
   <h1>The Bloggiest Blog </h1>
    <BlogForm />
    <BlogList />
    </div>
  
)

export default Home;

