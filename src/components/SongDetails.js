import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    if(!props.song) {
        return <div>
            Select a song
        </div>
    }
    return (
        <div className="ui container">
            <h3>
                Details For:
            </h3>
            <p>
                {props.song.title} <br/>
                {props.song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetails);