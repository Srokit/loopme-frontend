import './MainArea.css';
import '../../debug_style.css';

import ButtonsArea from '../ButtonsArea/ButtonsArea';
import BeatInfo from '../BeatInfo/BeatInfo';
import WaveformArea from '../WaveformArea/WaveformArea';

const MainArea = ({loopDLLink, loopInfo, onClickDownload, onClickNext, onPlayPauseClick}) => {
    return (
        <div className="mainArea debugOutline">
            <BeatInfo loopInfo={loopInfo} />
            <WaveformArea playPauseOnClick={onPlayPauseClick} />
            <ButtonsArea loopDLLink={loopDLLink} onClickDownload={onClickDownload} onClickNext={onClickNext} />
        </div>
    );
};

export default MainArea;