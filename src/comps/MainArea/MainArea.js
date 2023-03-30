import './MainArea.css';
import '../../debug_style.css';

import ButtonsArea from '../ButtonsArea/ButtonsArea';
import BeatInfo from '../BeatInfo/BeatInfo';
import Waveform from '../Waveform/Waveform';

const MainArea = ({onClickDownload, onClickNext}) => {
    return (
        <div className="mainArea debugOutline">
            <BeatInfo />
            <Waveform />
            <ButtonsArea onClickDownload={onClickDownload} onClickNext={onClickNext} />
        </div>
    );
};

export default MainArea;