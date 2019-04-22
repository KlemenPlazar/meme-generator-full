import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: 'img/aliens-guy.jpg',
      memeText: '',
      fontSize: '25px',
      color: 'white',
    };
  }

  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleImageChange = e => {
    this.setState({ selectedImage: e.target.src });
  };

  handleCreate = e => {
    e.preventDefault();
    const { createMeme, user } = this.props;
    const meme = {
      id: Math.floor(Math.random() * 10000000),
      text: this.state.memeText,
      img: this.state.selectedImage,
      fontSize: this.state.fontSize,
      color: this.state.color,
      upvotes: 0,
      createdAt: new Date().toLocaleDateString(),
      author: user.username,
      authorId: user.id,
    };

    createMeme(meme);
    this.props.history.push('/');
  };

  render() {
    const { selectedImage, memeText, fontSize, color } = this.state;

    return (
      <div className="meme-create-wrapper">
        <div className="meme-create-list">
          <img
            onClick={this.handleImageChange}
            src={`${window.location.origin}/img/aliens-guy.jpg`}
            alt="aliens guy"
          />
          <img
            onClick={this.handleImageChange}
            src={`${window.location.origin}/img/be-like-bill.jpg`}
            alt="Bill"
          />
          <img
            onClick={this.handleImageChange}
            src={`${window.location.origin}/img/science-guy.jpg`}
            alt="science guy"
          />
          <img
            onClick={this.handleImageChange}
            src={`${window.location.origin}/img/third-world.jpg`}
            alt="third world kid"
          />
          <img
            onClick={this.handleImageChange}
            src={`${window.location.origin}/img/we-smart.jpg`}
            alt="we smart meme"
          />
        </div>
        <form>
          <div className="selected-image-relative">
            <img
              className="meme-selected-img"
              src={selectedImage}
              alt="selected meme"
            />
            <div className="meme-selected-text" style={this.state}>
              {memeText}
            </div>
          </div>
          <div className="d-flex flex-column">
            <input
              className="input-group-text"
              type="text"
              placeholder="Some hilarious text goes here"
              value={memeText}
              onChange={e => this.handleInputChange('memeText', e.target.value)}
            />
          </div>
          <div className="row">
            <input
              className="input-group-text"
              type="text"
              placeholder="Font size"
              value={fontSize}
              onChange={e => this.handleInputChange('fontSize', e.target.value)}
            />
            <input
              className="input-group-text"
              type="text"
              placeholder="Font color"
              value={color}
              onChange={e => this.handleInputChange('color', e.target.value)}
            />
          </div>
          <div className="meme-create-buttons">
            <button className="btn" onClick={this.handleCreate}>
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Create);
