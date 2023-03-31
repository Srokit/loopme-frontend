import './PlayPauseButton.css';
import playImgSrc from '../../images/play.png';
import pauseImgSrc from '../../images/pause.png';
import { useState } from 'react';

const PlayPauseButton = ({onClick}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const onButtonClick = () => {
        setIsPlaying(!isPlaying);
        onClick();
    }
    const bgImgFn = (isPlaying) ? pauseImgSrc : playImgSrc;
    const style = {'backgroundImage': `url(${bgImgFn})`};
    return (
        <div className="playPauseButton" style={style} onClick={onButtonClick}></div>
    );
};

export default PlayPauseButton;
