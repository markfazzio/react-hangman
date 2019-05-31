import React, { Component } from 'react';

import './StickMan.css';

class StickMan extends Component {
    render() {

        const { numWrong } = this.props;

        return (
            <div className="hangman__container">
                <div className="pole">
                    <div className="noose"></div>
                </div>
                <div className="hangman">
                    { numWrong >= 1 && <div className="head"></div> }
                    { numWrong >= 2 && <div className="torso"></div> }
                    { numWrong >= 3 && <div className="leftarm"></div> }
                    { numWrong >= 4 && <div className="rightarm"></div> }
                    { numWrong >= 5 && <div className="leftleg"></div> }
                    { numWrong >= 6 && <div className="rightleg"></div> }
                    {/* <div className="rightfoot"></div>
                    <div className="leftfoot"></div> */}
                </div>
            </div>
        )
    }
}

export default StickMan;