import './App.css';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Header from '../Header/Header';
import MainArea from '../MainArea/MainArea';

import config from '../../config';
import { apiGetNextLoop } from '../../api';

import { Component, createRef } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.audioPlayerRef = createRef();
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickDownload = this.onClickDownload.bind(this);
    this.onClickPlayPause = this.onClickPlayPause.bind(this);
    this.state = {
      isPlaying: false,
      loopInfo: {name: '', tempo: '', key: ''},
    };
  }
  componentDidMount() {
    apiGetNextLoop().then((loopInfo) => {
      this.changeLoop(loopInfo);
    });
  }
  onClickPlayPause() {
    if (!this.audioPlayerRef.current.isPlaying) {
      this.audioPlayerRef.current.play();
    } else {
      this.audioPlayerRef.current.pause();
    }
    this.setState({isPlaying: !this.state.isPlaying});
  }
  onClickNext() {
    apiGetNextLoop().then((loopInfo) => {
      this.changeLoop(loopInfo);
      this.audioPlayerRef.current.play();
      this.setState({isPlaying: true});
    });
  }
  onClickDownload() {
    // TODO
  }
  changeLoop(loopInfo) {
    const loopUrl = config.apiBaseUrl + loopInfo.url;
    const newLoopInfo = {
      name: loopInfo.name,
      tempo: loopInfo.tempo,
      key: loopInfo.key,
    };
    this.audioPlayerRef.current.pause();
    this.audioPlayerRef.current.setSrc(loopUrl);
    this.audioPlayerRef.current.load();
    this.setState({loopInfo: newLoopInfo});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MainArea loopInfo={this.state.loopInfo} isPlaying={this.state.isPlaying} onClickDownload={this.onClickDownload} onClickNext={this.onClickNext} onPlayPauseClick={this.onClickPlayPause} />
        <AudioPlayer ref={this.audioPlayerRef} />
      </div>
    );
  }
};

export default App;
