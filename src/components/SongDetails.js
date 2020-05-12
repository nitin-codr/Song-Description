import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    return (
        <div>
            {(props.song) ? props.song.title : null} <br/>
            {(props.song) ? props.song.duration : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetails);