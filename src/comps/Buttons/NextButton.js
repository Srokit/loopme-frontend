import './Buttons.css';

const NextButton = ({onClick}) => {
    return (
        <div className="button nextButton" onClick={onClick}>
            <p className="nextButtonText">Next</p>
        </div>
    )
}

export default NextButton;