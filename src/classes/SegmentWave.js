// SegmentWave is a wave that dances around to make it look like a sound file

// Inspo vide: https://www.youtube.com/watch?v=LLfhY4eVwDY

export const waveEqn = (t, f, phase=0) => {
    return (Math.sin(Math.PI * 2.0 * t * f + phase) + 1) / 2;
}

class SegmentWave {
    constructor(maxHeight, minHeight, numSegs, initWaveFreq, moveFreq) {
        this.initTimeTs = performance.now();
        // TODO: See if you can figure out how to change these
        this.maxHeight = maxHeight;
        this.minHeight = minHeight;
        this.amp = maxHeight - minHeight;
        this.segHeights = new Array(numSegs).fill(0);
        this.initWaveFreq = initWaveFreq;
        this.moveFreq = moveFreq;
        this.numSegs = numSegs;
        this.setInitHeights();
        this.isPaused = false;
        this.pauseTs = 0;
    }
    // Return the height of segment in the wave at this index
    getOffsetForSeg(index) {
        return this.segHeights[index];
    }

    update(newTs /*is ms*/) {
        let tsInMs = newTs - this.initTimeTs;
        if (this.isPaused) {
            tsInMs = this.pauseTs;
        }
        const tsInS = tsInMs * 1.0 / 1000;

        // console.log("numsegs", this.numSegs);
        for (let i = 0; i < this.numSegs; i++) {
            const initPhase = (i * 1.0 * this.initWaveFreq / this.numSegs * 2 * Math.PI);
            const newHeight = Math.floor(waveEqn(tsInS, this.moveFreq, initPhase) * this.amp + this.minHeight);
            this.segHeights[i] = newHeight;
        }
    }
    setInitHeights() {
        // Create wave shape in segments to start
        for (let i = 0; i < this.numSegs; i++) {
            this.segHeights[i] = Math.floor(waveEqn(i * 1.0 * this.initWaveFreq / this.numSegs * 2 * Math.PI) * this.amp + this.minHeight);
        }
    }

    pause() {
        const currTs = performance.now() - this.initTimeTs;
        this.pauseTs = currTs;
        this.isPaused = true;
    }

    resume() {
        this.initTimeTs = performance.now() - this.pauseTs;
        this.isPaused = false;
    }
}

export default SegmentWave;