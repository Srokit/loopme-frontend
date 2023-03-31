import './WaveformArea.css';

import Waveform from "../Waveform/Waveform";
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';

const WaveformArea = ({isPlaying, playPauseOnClick}) => {
    return (
        <div className="waveformArea">
            <Waveform />
            <PlayPauseButton isPlaying={isPlaying} onClick={playPauseOnClick}/>
        </div>
    )
};

export default WaveformArea;