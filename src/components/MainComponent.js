import React, { Component } from 'react';
import Directory from './DirectoryComponent';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const directory = this.state.races.map(race => {
            return (
                <div className="col">
                    <p>{race.name}</p>
                    <p>{race.location}</p>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }

}
export default Main;