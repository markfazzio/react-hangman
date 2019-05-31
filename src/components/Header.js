import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {

        const { 
            numWrong,
            maxWrong,
            reset
        } = this.props;

        return (
            <div className="game__nav container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h4>Wrong Guesses: <span className="text-warning">{numWrong}/{maxWrong}</span></h4>
                    </div>
                    <div className="col-md-4 text-right">
                        <button className="btn btn-success" onClick={reset}>
                            New Game
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;