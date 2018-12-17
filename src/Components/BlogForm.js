import React from 'react';
import { connect, } from 'react-redux';

class BlogForm extends React.Component {
  state = { title: '', body: "" };

  handleChange = ({target: {name, value}}) => {
    this.setState({ 
      [name]: value 
     })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const { title, body } = this.state;
    const blog = { title, body, id, complete: false }
    dispatch({ type: "ADD_BLOG", blog: { title, body } });
    dispatch({ type: "INC_ID"});
    this.setState({ title: '', body: "" });
  }


  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>Add A Blog Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input name = "title" value={title} placeholder = "Title" onChange={this.handleChange} />
        </form>
        <form onSubmit={this.handleSubmit}>
          <input name = "body" value={body} placeholder = "Blog Post" onChange={this.handleChange} />
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId, };
}


export default connect(mapStateToProps)(BlogForm);