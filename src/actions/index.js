// Actions Creator 
const selectSong = () => {
    // Return an Action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

