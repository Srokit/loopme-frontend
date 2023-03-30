import './Buttons.css';

const DLButton = ({onClick}) => {
    return (
        <div onClick={onClick} className="button dlButton">
            <div className="dlButtonImg"></div>
        </div>
    )
};

export default DLButton;
