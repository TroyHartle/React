import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
    
    render() {
      return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table>
                            <thead>
                                <h1 style={{textAlign: "center"}}>UPCOMING UNITED STATES RACES</h1>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <Directory />
        </React.Fragment>  
      );
    };
}

export default App;