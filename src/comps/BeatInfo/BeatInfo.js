import './BeatInfo.css';

const BeatInfo = () => {
    return (
        <div className="beatInfo">
            <div className="beatName">
                <p>Linda</p>
            </div>
            <div className="tempoAndKey">
                <div className="tempo">
                    <p>135BPM</p>
                </div>
                <div className="key">
                    <p>C#m</p>
                </div>
            </div>
        </div>
    )
};

export default BeatInfo;