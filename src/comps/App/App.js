import './App.css';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Header from '../Header/Header';
import MainArea from '../MainArea/MainArea';
import Copyright from '../Copyright/Copyright';

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
    // Start on 4 so that it wraps around to 0 on first call
    this.loopIndexForGetCall = '4';
    this.state = {
      isPlaying: false,
      loopInfo: {name: '', tempo: '', key: ''},
      loopUrl: '',
    };
  }
  componentDidMount() {
    apiGetNextLoop(this.loopIndexForGetCall).then((loopInfo) => {
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
    apiGetNextLoop(this.loopIndexForGetCall).then((loopInfo) => {
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
    this.audioPlayerRef.current.pause();
    this.audioPlayerRef.current.setSrc(loopUrl);
    this.audioPlayerRef.current.load();
    this.setState({loopInfo: loopInfo.info, loopUrl: loopUrl});
    this.loopIndexForGetCall = loopInfo.index;
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MainArea loopDLLink={this.state.loopUrl} loopInfo={this.state.loopInfo} isPlaying={this.state.isPlaying} onClickDownload={this.onClickDownload} onClickNext={this.onClickNext} onPlayPauseClick={this.onClickPlayPause} />
        <Copyright />
        <AudioPlayer ref={this.audioPlayerRef} />
      </div>
    );
  }
};

export default App;
