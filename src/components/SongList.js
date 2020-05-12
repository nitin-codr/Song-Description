import React, { Component } from 'react';
import {connect} from 'react-redux';

class SongList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.songs.map(song=> {
                        return <li key={song.title}>
                            {song.title} 
                            <br />
                            {song.duration}
                        </li>
                    })}
                </ul>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {songs: state.songs};
}

export default connect(mapStateToProps)(SongList);