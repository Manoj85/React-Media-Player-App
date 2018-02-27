import React, { Component } from 'react';

const playlist = [
    { src: '../assets/videos/Thathagaru_1.mp4', label: 'Sri. Talagadadeevi Subba Rao - Version 1' },
    { src: '../assets/videos/Thathagaru_2.mp4', label: 'Sri. Talagadadeevi Subba Rao - Version 2' }

]

class Playlist extends Component {
    _handleTrackClick(track) {
        this.props.onTrackClick(track)
    }

    render() {
        const { tracks, currentTrack } = this.props
        return (
            <aside className="media-playlist">
                <header className="media-playlist-header">
                    <h3 className="media-playlist-title">Playlist</h3>
                </header>
                <ul className="media-playlist-tracks">
                    {playlist.map(track =>
                        <li
                            key={track.label}
                            className={`media-playlist-track ${track === currentTrack ? 'is-active' : ''}`}
                            onClick={this._handleTrackClick.bind(this, track)}
                        >
                            {track.label}
                        </li>
                    )}
                </ul>
            </aside>
        )
    }
}

export default Playlist