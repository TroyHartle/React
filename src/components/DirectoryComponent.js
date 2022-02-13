import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            races: [
                {
                    id: 0,
                    name: 'Mississippi Blues Marathon',
                    date: 'February 19, 2022',
                    location: "Jackson, MS"
                },
                {
                    id: 1,
                    name: 'Austin Marathon',
                    date: 'February 20, 2022',
                    location: "Austin, TX"
                },
                {
                    id: 2,
                    name: 'Washington Birthday Marathon',
                    date: 'February 20, 2022',
                    location: 'Greenbelt, MD'
                },
                {
                    id: 3,
                    name: 'Wilmington Marathon',
                    date: 'February 26, 2022',
                    location: "Wrightsville Beach, NC"
                },
            ],
        };
    }

    render() {
        const directory = this.state.races.map(race => {
            return (
                <div className="col">
                    <h2>{race.name}</h2>
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

export default Directory;