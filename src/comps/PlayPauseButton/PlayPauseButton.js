import './PlayPauseButton.css';
import playImgSrc from '../../images/play.png';
import pauseImgSrc from '../../images/pause.png';
import playIconSrc from '../../images/play_icon_1.png';
import pauseIconSrc from '../../images/pause_icon_1.png';
import { useContext } from 'react';

import AppContext from '../../AppContext';

const PlayPauseButton = () => {
    const {isPlaying, playOrPause} = useContext(AppContext);
    // const bgImgFn = (isPlaying) ? pauseImgSrc : playImgSrc;
    const bgImgFn = (isPlaying) ? pauseIconSrc : playIconSrc;
    const playPauseStyle = (isPlaying) ? {'marginLeft': '25px', 'width': '90px', 'height': '100px'} : null;
    return (
        <div className="playPauseButtonContainer">
            <div className="playPauseButton" onClick={playOrPause} style={playPauseStyle}>
                <img src={bgImgFn} />
            </div>
        </div>
    );
};

export default PlayPauseButton;
