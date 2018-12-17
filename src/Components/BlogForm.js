import React from 'react';
import { connect, } from 'react-redux';

class BlogForm extends React.Component {
  state = { title: '',  };

  handleChange = (e) => {
    this.setState({ title: e.target.value, });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const { title, } = this.state;
    const blog = { title, id, complete: false }
    dispatch({ type: "ADD_BLOG", blog });
    dispatch({ type: "INC_ID"});
    this.setState({ title: '', });
  }


  render() {
    const { title, } = this.state;

    return (
      <div>
        <h3>Add A Blog Post</h3>
        <form onSubmit={this.handleSubmit}>
          <input name = "title" value={title} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId, };
}


export default connect(mapStateToProps)(BlogForm);