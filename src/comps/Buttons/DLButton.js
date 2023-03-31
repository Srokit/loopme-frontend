import './Buttons.css';

import dlSvgImg from '../../images/dl.svg';

const DLButton = ({loopDLLink}) => {
    return (
        <button className="button centeredButton">
            <a href={loopDLLink} download="Loop_FromLoopMe.mp3" target="_blank">
                <img src={dlSvgImg} className="dlSvg"></img>
                <div className="buttonSpacer"></div>
                <span className='buttonText smallButtonText'>Download</span>
            </a>
        </button>
    )
};

export default DLButton;
