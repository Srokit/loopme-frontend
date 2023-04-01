import './MainArea.css';
import '../../debug_style.css';

import ButtonsArea from '../ButtonsArea/ButtonsArea';
import BeatInfo from '../BeatInfo/BeatInfo';
import WaveformArea from '../WaveformArea/WaveformArea';

import { Component, createRef } from 'react';

class MainArea extends Component {
    constructor(props) {
        super(props);
        this.loopDLLink = props.loopDLLink;
        this.loopInfo = props.loopInfo;
        this.onClickDownload = props.onClickDownload;
        this.onClickNext = props.onClickNext;
        this.onPlayPauseClick = props.onPlayPauseClick;
        this.waveformAreaRef = createRef();
    }
    pauseOrResumeWaveform() {
        this.waveformAreaRef.current.pauseOrResumeWaveform();
    }
    render() {
        return (
            <div className="mainArea debugOutline">
                <BeatInfo loopInfo={this.loopInfo} />
                <WaveformArea playPauseOnClick={this.onPlayPauseClick} ref={this.waveformAreaRef} />
                <ButtonsArea loopDLLink={this.loopDLLink} onClickDownload={this.onClickDownload} onClickNext={this.onClickNext} />
            </div>
        );
    }
};

export default MainArea;