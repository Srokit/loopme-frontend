import './ButtonsArea.css';

import NextButton from '../Buttons/NextButton';
import DLButton from '../Buttons/DLButton';

const ButtonsArea = ({loopDLLink, onClickNext}) => {
    return (
        <div className="buttonsArea">
            <div className="buttonsAreaWithButton">
                <DLButton loopDLLink={loopDLLink}/>
            </div>
            <div className="buttonsAreaWithButton">
                <NextButton onClick={onClickNext} />
            </div>
            <div className="buttonsAreaFiller"></div>
        </div>
    );
};

export default ButtonsArea;