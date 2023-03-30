import './BeatInfo.css';

const BeatInfo = ({loopInfo}) => {
    return (
        <div className="beatInfo">
            <div className="beatName">
                <p>{loopInfo.name}</p>
            </div>
            <div className="tempoAndKey">
                <div className="tempo">
                    <p>{loopInfo.tempo}</p>
                </div>
                <div className="key">
                    <p>{loopInfo.key}</p>
                </div>
            </div>
        </div>
    )
};

export default BeatInfo;