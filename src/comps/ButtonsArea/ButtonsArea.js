import './ButtonsArea.css';

import NextButton from '../Buttons/NextButton';
import DLButton from '../Buttons/DLButton';

const ButtonsArea = ({onClickDownload, onClickNext}) => {
    return (
        <div className="buttonsArea">
            <div className="buttonsAreaWithButton">
                <DLButton onClick={onClickDownload} />
            </div>
            <div className="buttonsAreaWithButton">
                <NextButton onClick={onClickNext} />
            </div>
            <div className="buttonsAreaFiller"></div>
        </div>
    );
};

export default ButtonsArea;