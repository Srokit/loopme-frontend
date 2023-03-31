import './BeatInfo.css';

const BeatInfo = ({loopInfo}) => {
    return (
        <div className="beatInfo">
            <div className="beatInfoSpacerLeft"></div>
            <div className="beatInfoMainArea">
                <div className="beatName">
                    <span className='beatNameText'>{loopInfo.name}</span>
                </div>
                <span className="tempoAndKey">
                    <span className="tempoAndKeyText">
                        {loopInfo.tempo}
                    </span>
                    <span className='tempoAndKeySpacer'></span>
                    <span className="tempoAndKeyText">
                        &#x2022;
                    </span>
                    <span className='tempoAndKeySpacer'></span>
                    <span className="tempoAndKeyText">
                        {loopInfo.key}
                    </span>
                </span>
            </div>
        </div>
    )
};

export default BeatInfo;