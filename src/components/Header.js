import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {

        const { 
            numWrong
        } = this.props;

        return (
            <div className="game__nav container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h4>Wrong Answers: <span className="text-warning">{numWrong}</span></h4>
                    </div>
                    <div className="col-md-4 text-right">
                        <button className="btn btn-success">
                            Play Again
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;