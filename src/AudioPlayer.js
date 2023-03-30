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
        console.log("AudioPlayer::play()");
        this.audioRef.current.play();
        this.isPlaying = true;
    }
    render() {
        return <audio ref={this.audioRef} hidden></audio>
    }
};

export default AudioPlayer;