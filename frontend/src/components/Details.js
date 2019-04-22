import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Details extends Component {
  constructor(props) {
    super(props);

    const { memes } = this.props;
    const { id } = this.props.match.params;
    const [currentMeme] = memes.filter(m => m.id === parseInt(id, 10));
    this.state = { meme: currentMeme };
  }
  render() {
    const { meme } = this.state;
    console.log(meme)
    const style = { color: meme.color, fontSize: meme.fontSize };
    return (
      <div className="meme-details-wrapper">
        <div className="meme-details-image">
          <img src={`/${meme.img}`} alt="Details" />
          <div className="meme-text" style={style}>
            {meme.text}
          </div>
        </div>
        <div className="meme-description-wrapper">
          <div className="meme-description-top">
            <span className="meme-description-top-points">
              {meme.upvotes} points
            </span>
            <img
              className="meme-description-top-share"
              src={`${window.location.origin}/img/icon-share.svg`}
              alt="share"
            />
          </div>

          <div className="meme-description-bottom">
            <div className="meme-description-bottom-user">
              <img src="https://via.placeholder.com/30" alt="test" />
              <span>{meme.author}</span>
            </div>
            <span className="meme-description-bottom-time">
              {new Date(meme.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
