/* AudioPlayer is a component that
 * doesn't appear on the screen, but
 * plays audio via the audio element.
 */

import { Component, createRef } from "react";

class AudioPlayer extends Component {
    constructor(props) {
        super(props);
        this.audioRef = createRef();
        this.isLoaded = false;
        this.isPlaying = false;
    }
    setSrc(newSrc) {
        this.audioRef.current.src = newSrc;
    }
    isLoaded() {
        return this.isLoaded;
    }
    load() {
        this.audioRef.current.load();
        this.isLoaded = true;
    }
    isPlaying() {
        return this.isPlaying;
    }
    play() {
        this.audioRef.current.play();
        this.isPlaying = true;
    }
    pause() {
        this.audioRef.current.pause();
        this.isPlaying = false;
    }
    render() {
        return <audio ref={this.audioRef} hidden loop></audio>
    }
};

export default AudioPlayer;