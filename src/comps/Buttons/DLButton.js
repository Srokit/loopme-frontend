import './Buttons.css';

const DLButton = ({loopDLLink}) => {
    return (
        <div className="button dlButton">
            <a href={loopDLLink} download="Loop_FromLoopMe.mp3" target="_blank">
                <div className="dlButtonImg"></div>
            </a>
        </div>
    )
};

export default DLButton;
