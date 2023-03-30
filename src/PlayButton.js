// Pushing this button plays the beat

const PlayButton = ({onPlayButtonClick}) => {

    return (
        <div onClick={onPlayButtonClick}>
            Play
        </div>
    );
};

export default PlayButton;