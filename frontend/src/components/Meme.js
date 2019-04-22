import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Meme extends Component {
  render() {
    const {
      meme: { id, img, text, color, fontSize, upvotes, author, createdAt },
      user,
      upvote,
      downvote,
    } = this.props;
    const style = { color, fontSize };
    return (
      <div className="meme-wrapper">
        <div className="meme-image-relative">
          <Link to={`/details/${id}`}>
            <img src={img} alt="meme" />
          </Link>
          <div className="meme-text" style={style}>
            {text}
          </div>
        </div>
        {user && upvote && downvote && (
          <div className="vote-buttons">
            <img
              className="upvote-icon"
              src={`${window.location.origin}/img/upvote.png`}
              alt="upvote"
              onClick={() => upvote(id)}
            />
            <img
              className="downvote-icon"
              src={`${window.location.origin}/img/downvote.png`}
              alt="downvote"
              onClick={() => downvote(id)}
            />
          </div>
        )}

        <div className="meme-description-wrapper">
          <div className="meme-description-top">
            <span className="meme-description-top-points">
              {upvotes} points
            </span>

            <img
              className="meme-description-top-share"
              src={`${window.location.origin}/img/icon-share.svg`}
              alt="share"
            />
          </div>

          <div className="meme-description-bottom">
            <div className="meme-description-bottom-user">
              <img src="https://via.placeholder.com/30" alt="author" />
              <span>{author}</span>
            </div>
            <span className="meme-description-bottom-time">
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
