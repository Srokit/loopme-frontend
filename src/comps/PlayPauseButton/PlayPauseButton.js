import './PlayPauseButton.css';
import playImgSrc from '../../images/play.png';
import pauseImgSrc from '../../images/pause.png';

const PlayPauseButton = ({isPlaying, onClick}) => {
    const bgImgFn = (isPlaying) ? pauseImgSrc : playImgSrc;
    const style = {'backgroundImage': `url(${bgImgFn})`};
    return (
        <div className="playPauseButton" style={style} onClick={onClick}></div>
    );
};

export default PlayPauseButton;
