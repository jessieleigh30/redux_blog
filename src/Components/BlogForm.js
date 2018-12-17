import React from 'react';
import { connect, } from 'react-redux';

class BlogForm extends React.Component {
  state = { title: '',  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const { title, } = this.state;
    dispatch({ type: 'ADD_BLOG', blog: title, });
    this.setState({ title: '', });
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value, });
  }

  render() {
    const { title, } = this.state;

    return (
      <div>
        <h3>Add A Blog Post</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={title} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default connect()(BlogForm);