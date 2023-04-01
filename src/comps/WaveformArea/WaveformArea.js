import './WaveformArea.css';

import Waveform from "../Waveform/Waveform";
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';
import { Component, createRef } from 'react';

class WaveformArea extends Component {
    constructor(props) {
        super(props);
        this.playPauseOnClick = props.playPauseOnClick;
        this.wfRef = createRef();
    }
    pauseOrResumeWaveform() {
        this.wfRef.current.pauseOrResume();
    }
    render() {
        return (
            <div className="waveformArea">
                <Waveform ref={this.wfRef} />
                <PlayPauseButton onClick={this.playPauseOnClick} />
            </div>
        )
    }
};

export default WaveformArea;