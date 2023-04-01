import './ButtonsArea.css';

import NextButton from '../Buttons/NextButton';
import DLButton from '../Buttons/DLButton';
import AppContext from '../../AppContext';
import { useContext } from 'react';

const ButtonsArea = ({loopDLLink}) => {

    const {onClickNext} = useContext(AppContext);
    return (
        <div className="buttonsArea">
            <div className="buttonsAreaSpacer"></div>
            <div className="buttonsAreaDlButton">
                <DLButton loopDLLink={loopDLLink}/>
            </div>
            <div className="buttonsAreaNextButton">
                <NextButton onClick={onClickNext} />
            </div>
            <div className="buttonsAreaFiller"></div>
        </div>
    );
};

export default ButtonsArea;