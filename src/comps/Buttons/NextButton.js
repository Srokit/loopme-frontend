import './Buttons.css';

import arrowRightIconImgSrc from '../../images/arrow_right_svg.svg';

const NextButton = ({onClick}) => {
    return (
        <button className="button centeredButton" onClick={onClick}>
            <div className="arrowRightCont">
                <img className='arrowRightImg' src={arrowRightIconImgSrc} />
            </div>
            <div className="buttonSpacer"></div>
            <p className="buttonText">Next</p>
        </button>
    )
}

export default NextButton;