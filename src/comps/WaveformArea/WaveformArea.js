import './WaveformArea.css';

import Waveform from "../Waveform/Waveform";
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';

const WaveformArea = ({playPauseOnClick}) => {
    console.log("Redrawing")
    return (
        <div className="waveformArea">
            <Waveform />
            <PlayPauseButton onClick={playPauseOnClick}/>
        </div>
    )
};

export default WaveformArea;