import './App.css';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Header from '../Header/Header';
import MainArea from '../MainArea/MainArea';

import config from '../../config';
import { apiGetNextLoopUrl } from '../../api';

import { Component, createRef } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.audioPlayerRef = createRef();
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickDownload = this.onClickDownload.bind(this);
    this.onClickPlayPause = this.onClickPlayPause.bind(this);
  }
  onClickPlayPause() {
    if (!this.audioPlayerRef.current.isPlaying) {
      this.audioPlayerRef.current.load();
      this.audioPlayerRef.current.play();
    } else {
      this.audioPlayerRef.current.pause();
    }
  }
  onClickNext() {
    apiGetNextLoopUrl().then((url) => {
      this.changeLoop(url);
    });
  }
  onClickDownload() {
    // TODO
  }
  changeLoop(url) {
    const loopUrl = config.apiBaseUrl + url;
    this.audioPlayerRef.current.pause();
    this.audioPlayerRef.current.setSrc(loopUrl);
    this.audioPlayerRef.current.load();
    this.audioPlayerRef.current.play();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MainArea onClickDownload={this.onClickDownload} onClickNext={this.onClickNext} />
        <AudioPlayer ref={this.audioPlayerRef} />
      </div>
    );
  }
};

export default App;
