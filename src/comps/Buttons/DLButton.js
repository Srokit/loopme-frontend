import './Buttons.css';

const DLButton = ({loopDLLink}) => {
    return (
        <button className="button centeredButton">
            <a href={loopDLLink} download="Loop_FromLoopMe.mp3" target="_blank">
                <div className="dlButtonImg"></div>
            </a>
        </button>
    )
};

export default DLButton;
