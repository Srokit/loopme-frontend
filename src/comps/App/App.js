import './App.css';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Header from '../Header/Header';
import MainArea from '../MainArea/MainArea';
import Copyright from '../Copyright/Copyright';

import AppContext from '../../AppContext';

import { apiGetNextLoop } from '../../api';
import { Component, createRef } from 'react';


// Make name more readable by only taking first word
const truncateName = (name) => {
  let nextWordI = name.length;
  // Find first captial that isn't first letter and cut there
  for (let i = 1; i < name.length; i++) {
    if (name.charAt(i) === name.charAt(i).toUpperCase()) {
      nextWordI = i;
      break;
    }
  }
  return name.slice(0, nextWordI);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.audioPlayerRef = createRef();
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPlayPause = this.onClickPlayPause.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
    this.state = {
      // Uncomment to get placeholder for beat info
      // loopInfo: {name: 'Randomname', tempo: '165', key: 'G#'},
      loopInfo: {name: '', tempo: '', key: ''},
      loopUrl: '',
      isPlaying: false,
    };
    this.mainAreaRef = createRef();
  }
  componentDidMount() {
    apiGetNextLoop().then((loopInfo) => {
      console.log(loopInfo);
      this.changeLoop(loopInfo);
    });
  }
  onClickPlayPause() {
    if (!this.audioPlayerRef.current.isPlaying) {
      this.audioPlayerRef.current.play();
    } else {
      this.audioPlayerRef.current.pause();
    }
    this.mainAreaRef.current.pauseOrResumeWaveform();
  }
  onClickNext() {
    apiGetNextLoop().then((loopInfo) => {
      this.changeLoop(loopInfo);
      this.audioPlayerRef.current.play();
      if (this.state.isPlaying) return;
      this.setState({isPlaying: true});
      this.mainAreaRef.current.pauseOrResumeWaveform();
    });
  }
  playOrPause() {
    if (!this.audioPlayerRef.current.isPlaying) {
      this.audioPlayerRef.current.play();
    } else {
      this.audioPlayerRef.current.pause();
    }
    this.setState({isPlaying: !this.state.isPlaying});
    this.mainAreaRef.current.pauseOrResumeWaveform();
  }
  changeLoop(loopInfo) {
    const loopUrl = loopInfo.url;
    this.audioPlayerRef.current.pause();
    this.audioPlayerRef.current.setSrc(loopUrl);
    this.audioPlayerRef.current.load();
    loopInfo.info.name = truncateName(loopInfo.info.name);
    this.setState({loopInfo: {...loopInfo.info}, loopUrl: loopUrl});
  }
  render() {
    console.log("Redrawing");
    return (
      <div className="App">
        <AppContext.Provider value={{
          isPlaying: this.state.isPlaying,
          playOrPause: this.playOrPause,
          onClickNext: this.onClickNext,
          }}>
          <Header />
          <MainArea loopDLLink={this.state.loopUrl} loopInfo={this.state.loopInfo} onClickNext={this.onClickNext} onPlayPauseClick={this.onClickPlayPause} ref={this.mainAreaRef} />
          <Copyright />
          <AudioPlayer ref={this.audioPlayerRef} />
        </AppContext.Provider>
      </div>
    );
  }
};

export default App;
