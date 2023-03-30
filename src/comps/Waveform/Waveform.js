import './Waveform.css';

import PlayPauseButton from '../PlayPauseButton/PlayPauseButton';

const Waveform = ({isPlaying, playPauseOnClick, playFraction}) => {

    return (
        <div className="waveform">
            <div className="waveformImg"></div>
            <PlayPauseButton isPlaying={isPlaying} onClick={playPauseOnClick}/>
        </div>
    );
};

export default Waveform;