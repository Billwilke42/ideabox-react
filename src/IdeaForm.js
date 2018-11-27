import React, { Component } from 'react';

export default class IdeaForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  resetState = () => {
    this.setState({
      title: '',
      body: ''
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addIdea(this.state);
    this.resetState();
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name='title' 
          value={title} 
          placeholder='Title'
          onChange={this.handleInputChange}
        />
        <input 
          type="text" 
          name='body' 
          value={body} 
          placeholder='Body'
          onChange={this.handleInputChange}
         />
        <button>Add Idea</button>
      </form>
    );
  }
}
