import './Waveform.css';

import { Component, createRef } from 'react';

import SegmentWave from '../../classes/SegmentWave';
import SegmentRandomMover from '../../classes/SegmentRandomMover';

class Waveform extends Component{
    constructor() {
        super();
        this.canvRef = createRef();
        this.segEffecters = [];
        this.isPaused = false;
    }
    initDraw() {
        const canvWidth = this.canvRef.current.width;
        const canvHeight = this.canvRef.current.height;
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
        this.segEffecters.push(segWave);
        this.segEffecters.push(segWave2);
        this.segEffecters.push(segRandMover);
        this.segEffecters.push(segRandMover2);
        const renderFunc = (newTs) => {
            if (this.canvRef.current === null) {
                requestAnimationFrame(renderFunc);
                return;
            }
            const ctx = this.canvRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvWidth, canvHeight);
            // ctx.beginPath();
            let xOffset = 0;
            for (let i = 0; i < this.segEffecters.length; i++) {
                this.segEffecters[i].update(newTs);
            }
            for (let segI = 0; segI < numSegs; segI++) {
                let segH = 0;
                for (let i = 0; i < this.segEffecters.length; i++) {
                    this.segEffecters[i].update(newTs);
                    const diff = this.segEffecters[i].getOffsetForSeg(segI);
                    // console.log('sv=', i, diff)
                    segH += diff;
                }
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
    }
    componentDidMount() {
        this.initDraw();
    }
    pauseOrResume() {
        console.log("PuaseOr Resume");
        for (let i = 0; i < this.segEffecters.length; i++) {
            if (!this.isPaused) {
                this.segEffecters[i].pause();
            }
            else {
                this.segEffecters[i].resume();
            }
        }
        this.isPaused = !this.isPaused;
    }
    render() {
        return (
            <canvas ref={this.canvRef} className="waveformCanvas"></canvas>
        );
    }
};

export default Waveform;