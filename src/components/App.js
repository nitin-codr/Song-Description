import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';
const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="ui column eight wide">
                    <SongList />
                </div>
                <div className="ui column eight wide">
                    <div className="ui container">
                        <SongDetails />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;