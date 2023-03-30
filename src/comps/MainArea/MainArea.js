import './MainArea.css';
import '../../debug_style.css';

import ButtonsArea from '../ButtonsArea/ButtonsArea';
import BeatInfo from '../BeatInfo/BeatInfo';
import Waveform from '../Waveform/Waveform';

const MainArea = ({loopInfo, isPlaying, onClickDownload, onClickNext, onPlayPauseClick}) => {
    return (
        <div className="mainArea debugOutline">
            <BeatInfo loopInfo={loopInfo} />
            <Waveform isPlaying={isPlaying} playPauseOnClick={onPlayPauseClick} />
            <ButtonsArea onClickDownload={onClickDownload} onClickNext={onClickNext} />
        </div>
    );
};

export default MainArea;