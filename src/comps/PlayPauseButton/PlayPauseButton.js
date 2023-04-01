import './PlayPauseButton.css';
import playImgSrc from '../../images/play.png';
import pauseImgSrc from '../../images/pause.png';
import { useContext } from 'react';

import AppContext from '../../AppContext';

const PlayPauseButton = () => {
    const {isPlaying, playOrPause} = useContext(AppContext);
    const bgImgFn = (isPlaying) ? pauseImgSrc : playImgSrc;
    const style = {'backgroundImage': `url(${bgImgFn})`};
    return (
        <div className="playPauseButton" style={style} onClick={playOrPause}></div>
    );
};

export default PlayPauseButton;
