import './MainArea.css';
import '../../debug_style.css';

import ButtonsArea from '../ButtonsArea/ButtonsArea';
import BeatInfo from '../BeatInfo/BeatInfo';
import WaveformArea from '../WaveformArea/WaveformArea';

import { Component, createRef } from 'react';

class MainArea extends Component {
    constructor(props) {
        super(props);
        this.waveformAreaRef = createRef();
    }
    pauseOrResumeWaveform() {
        this.waveformAreaRef.current.pauseOrResumeWaveform();
    }
    render() {
        console.log("mainarearedraw");
        return (
            <div className="mainArea debugOutline">
                <BeatInfo loopInfo={this.props.loopInfo} />
                <WaveformArea ref={this.waveformAreaRef} />
                <ButtonsArea loopDLLink={this.props.loopDLLink} onClickNext={this.props.onClickNext} />
            </div>
        );
    }
};

export default MainArea;