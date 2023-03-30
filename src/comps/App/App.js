import './App.css';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Header from '../Header/Header';

import config from '../../config';
import { apiGetNextLoopUrl } from '../../api';

import { Component, createRef } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.audioPlayerRef = createRef();
    this.onClickPlayButton = this.onClickPlayButton.bind(this);
    this.onClickNextButton = this.onClickNextButton.bind(this);
  }
  onClickPlayButton() {
    console.log("OnClickPlayButton");
    if (!this.audioPlayerRef.current.isPlaying) {
      this.audioPlayerRef.current.load();
      this.audioPlayerRef.current.play();
    }
  }
  onClickNextButton() {
    apiGetNextLoopUrl().then((url) => {
      this.changeLoop(url);
    });
  }
  changeLoop(url) {
    const loopUrl = config.apiBaseUrl + url;
    this.audioPlayerRef.current.setSrc(loopUrl);
    this.audioPlayerRef.current.load();
    this.audioPlayerRef.current.play();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AudioPlayer ref={this.audioPlayerRef} />
        <div onClick={this.onClickPlayButton}>Play</div>
        {/* Next Button */}
        <div onClick={this.onClickNextButton}>Next</div>
      </div>
    );
  }
};

export default App;
