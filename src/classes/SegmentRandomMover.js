// RandomlyMoves a segment up or down and then back

import { waveEqn } from "./SegmentWave";

class SegmentRandomMover {

    constructor(numSegs, odds, startNewOscilationIntervalMs, minAmp, maxAmp, minFreq, maxFreq) {
        this.minFreq = minFreq;
        this.maxFreq = maxFreq;
        this.minAmp = minAmp;
        this.maxAmp = maxAmp;
        this.odds = odds;
        this.numSegs = numSegs;
        this.segDiffs = new Array(numSegs).fill(0);
        this.startTs = performance.now();
        this.tsWhenLastOscCheckHappened = this.startTs;
        this.startNewOscilationIntervalMs = startNewOscilationIntervalMs;
        this.oscIsOcurring = new Array(numSegs).fill(false)
        this.oscFreqs = new Array(numSegs).fill(0);
        this.oscAmps = new Array(numSegs).fill(0);
        this.oscStartTsInS = new Array(numSegs).fill(0);
        this.isPaused = false;
        this.pauseTs = 0;
    }
 
    update(newTs) {
        let elapsMs = newTs - this.startTs;
        if (this.isPaused) {
            elapsMs = this.pauseTs;
        }
        const elapsS = elapsMs * 1.0 / 1000;
        if (elapsMs - this.tsWhenLastOscCheckHappened > this.startNewOscilationIntervalMs) {
            this.tsWhenLastOscCheckHappened = elapsMs;
            for (let i = 0; i < this.numSegs; i++) {
                if (this.testOdds(this.odds)) {
                    const randFreq = this.pickRandomFreq();
                    const randAmp = this.pickRandomAmp();
                    this.oscFreqs[i] = randFreq;
                    this.oscAmps[i] = randAmp;
                    this.oscIsOcurring[i] = true;
                    this.oscStartTsInS[i] = elapsS;
                }
            }
        }

        for (let i = 0; i < this.numSegs; i++) {
            if (this.oscIsOcurring[i]) {
                const oscTimeDiff = elapsS - this.oscStartTsInS[i];
                const thisOscMaxDur = 1.0 / this.oscFreqs[i];
                if (oscTimeDiff > thisOscMaxDur) {
                    this.oscIsOcurring[i] = false;
                }
                else {
                    this.segDiffs[i] = waveEqn(oscTimeDiff, this.oscFreqs[i]) * this.oscAmps[i];
                }
            }
        }
    }

    getOffsetForSeg(index) {
        if (this.oscIsOcurring[index]) {
            return this.segDiffs[index];
        }
        return 0;
    }

    pickRandomFreq() {
        const amp = this.maxFreq - this.minFreq;
        return Math.random() * amp + this.minFreq;
    }

    pickRandomAmp() {
        const amp = this.maxAmp - this.minAmp;
        return Math.random() * amp + this.minAmp;
    }

    testOdds(odds) {
        return Math.random() < odds;
    }

    pause() {
        const currTs = performance.now() - this.startTs;
        this.pauseTs = currTs;
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
        this.startTs = performance.now();
    }
};

export default SegmentRandomMover;