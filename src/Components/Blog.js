import React from 'react';
import { connect, } from 'react-redux';

const Blog = ({ id, title, body, complete, dispatch }) => (
  <div
    onClick={() => dispatch({ type: 'TOGGLE_BLOG', id })}
    style={ complete ? { textDecoration: 'line-through', color: 'grey' } : {} }
  >
    <h3>{ title }</h3>
    <p> { body } </p>
  </div>
)

export default connect()(Blog);