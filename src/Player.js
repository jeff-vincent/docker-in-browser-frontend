import ReactPlayer from "react-player";
import React, { Component } from'react';

class Player extends Component {
    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width='100%'
            height='100%'
          />
        </div>
      )
    }
  }

  export default Player