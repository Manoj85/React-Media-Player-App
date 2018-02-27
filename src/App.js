import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Playlist from "./components/Playlist"

const App = () => {
    return (
        <div className="app">
            <NavBar/>

            <Playlist/>

            <div className="media-player-wrapper">
                {/*<MediaPlayer
                    ref={c => this._mediaPlayer = c}
                    src={currentTrack.src}
                    autoPlay={autoPlay}
                    loop={repeatTrack}
                    currentTrack={currentTrack.label}
                    repeatTrack={repeatTrack}
                    onPrevTrack={() => this._navigatePlaylist(-1)}
                    onNextTrack={() => this._navigatePlaylist(1)}
                    onRepeatTrack={() => { this.setState({ repeatTrack: !repeatTrack }) }}
                    onPlay={() => !autoPlay && this.setState({ autoPlay: true })}
                    onPause={() => this.setState({ autoPlay: false })}
                    onEnded={() => !repeatTrack && this._navigatePlaylist(1)}
                />
                <Playlist
                    tracks={playlist}
                    currentTrack={currentTrack}
                    onTrackClick={this._handleTrackClick}
                />
                */}
            </div>
        </div>
    )
}

export default App;