import './Waveform.css';

import { useEffect, useRef } from 'react';

const Waveform = () => {
    const canvRef = useRef();
    useEffect(() => {
        const canvWidth = canvRef.current.width;
        const canvHeight = canvRef.current.height;
        const yPadding = 10;
        const maxSegmentHeight = canvHeight - 2 * yPadding;
        const offsetDelt = 2;
        console.log("initDraw()");
        const ctx = canvRef.current.getContext('2d');
        ctx.fillStyle = "darkGrey";
        ctx.beginPath();
        for (let xOffset = 0; xOffset < canvWidth; xOffset += offsetDelt) {
            // Draw all as max height
            ctx.fillStyle = "darkGrey";
            ctx.fillRect(xOffset, yPadding, 1, maxSegmentHeight / 2 - 1);
            ctx.fillStyle = "grey";
            ctx.fillRect(1 + xOffset, yPadding + maxSegmentHeight / 2, 1, maxSegmentHeight / 2);
        }
    });
    return (
        <canvas ref={canvRef} className="waveformCanvas"></canvas>
    );
};

export default Waveform;