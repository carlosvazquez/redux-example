import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    // Call actions
    this.props.createPost(post);
  }
  render() {
    return (
      <div className="posts__add-post">
          <h3 className="title">Add post</h3>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Title</label>
              <input type="text" onChange={this.onChange} name="title" value={this.state.title}/>
            </div>
            <div>
              <label>Boyd</label>
              <textarea name="body" onChange={this.onChange} value={this.state.body}/>
            </div>
            <button className="btn" type="submit">Submit</button>
          </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
