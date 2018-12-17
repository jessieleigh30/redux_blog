import React from 'react';
import { connect, } from 'react-redux';

const Blog = ({ id, title, complete, dispatch }) => (
  <div
    onClick={() => dispatch({ type: 'TOGGLE_BLOG', id })}
    style={ complete ? { textDecoration: 'line-through', color: 'grey' } : {} }
  >
    { title }
  </div>
)

export default connect()(Blog);