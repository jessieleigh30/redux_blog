import React from "react";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";
import styled from "styled-components";

const Home = () => (
 <div>
   <BlogTitle>The Bloggiest Blog </BlogTitle>
    <BlogForm />
    <BlogList />
    </div>
  
)

const BlogTitle = styled.h1 `
  color: #05386B;
  font-size: 70px;
  padding-top: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;


`

export default Home;

