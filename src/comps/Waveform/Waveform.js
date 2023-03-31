import './Waveform.css';

import { useEffect, useRef } from 'react';

import SegmentWave from '../../classes/SegmentWave';
import SegmentRandomMover from '../../classes/SegmentRandomMover';

const Waveform = () => {
    const canvRef = useRef();
    const initDraw = () => {
        console.log("init");
        const canvWidth = canvRef.current.width;
        const canvHeight = canvRef.current.height;
        const yPadding = 10;
        const maxSegmentHeight = (canvHeight - 2 * yPadding) / 2;
        const myMaxSegH = maxSegmentHeight - 20;
        const minSegHeight = 20;
        const offsetDelt = 2;
        const numSegs = canvWidth / offsetDelt;
        const segWave = new SegmentWave(myMaxSegH, minSegHeight, numSegs, 3, 2);
        const segWave2 = new SegmentWave(10, 1, numSegs, 35, 10);
        const oddsOfMove = 0.05;
        const oddsOfMove2 = 0.001;
        const segRandMover = new SegmentRandomMover(numSegs, oddsOfMove, 50, 1, 10, 0.5, 1);
        const segRandMover2 = new SegmentRandomMover(numSegs, oddsOfMove2, 50, 15, 20, 0.25, 1);
        const renderFunc = (newTs) => {
            const ctx = canvRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvWidth, canvHeight);
            // ctx.beginPath();
            let xOffset = 0;
            for (let segI = 0; segI < numSegs; segI++) {
                segWave.update(newTs);
                segWave2.update(newTs);
                segRandMover.update(newTs);
                segRandMover2.update(newTs);
                const segH1 = segWave.getSegmentHeightWithIndex(segI);
                const segH2 = segWave2.getSegmentHeightWithIndex(segI);
                const randMove = segRandMover.getOffsetForSeg(segI);
                const rand2 = segRandMover2.getOffsetForSeg(segI);
                console.log(randMove);
                const segH = segH1 + segH2 + randMove + rand2;
                ctx.fillStyle = "darkGrey";
                const topY = yPadding + (maxSegmentHeight - 1 - segH);
                ctx.fillRect(xOffset, topY, 1, segH - 1);
                ctx.fillStyle = "grey";
                ctx.fillRect(1 + xOffset, yPadding + maxSegmentHeight, 1, segH);
                xOffset += offsetDelt;
            }
            requestAnimationFrame(renderFunc);
        };
        requestAnimationFrame(renderFunc);
    };
    useEffect(initDraw);
    console.log("Draw");
    return (
        <canvas ref={canvRef} className="waveformCanvas"></canvas>
    );
};

export default Waveform;