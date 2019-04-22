import React, { Component } from 'react';

import Meme from './Meme';

export default class Profile extends Component {
  render() {
    const { user, memes } = this.props;

    const userMemes = memes.filter(meme => meme.authorId === user.id);

    return (
      <div className="meme-profile-wrapper">
        <p>
          Username: <strong>{user.username}</strong>
        </p>
        {userMemes.length > 0 ? (
          <React.Fragment>
            <h2>User memes:</h2>
            <hr />
            {/* <div className="grid"> */}
            {userMemes.map(meme => (
              <Meme key={meme.id} meme={meme} />
            ))}
            {/* </div> */}
          </React.Fragment>
        ) : (
          <h2>It's empty here</h2>
        )}
      </div>
    );
  }
}
