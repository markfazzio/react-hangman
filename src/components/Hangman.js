import React, { Component } from 'react';

import './Hangman.css';

class Hangman extends Component {
    render() {

        const {
            numWrong,
            isLoser
        } = this.props;

        return (
            <div className="hangman__container">
                <div className="pole">
                    <div className="noose"></div>
                </div>
                <div className="hangman">
                    { numWrong >= 1 && <div className="body-part head"></div> }
                    { numWrong >= 2 && <div className="body-part torso"></div> }
                    { numWrong >= 3 && <div className="body-part arm arm--left"></div> }
                    { numWrong >= 4 && <div className="body-part arm arm--right"></div> }
                    { numWrong >= 5 && <div className="body-part leg leg--left"></div> }
                    { numWrong >= 6 && <div className="body-part leg leg--right"></div> }
                    {/* <div className="body-part rightfoot"></div>
                    <div className="body-part leftfoot"></div> */}
                </div>
                {isLoser && <div className="game-over"></div>}
            </div>
        )
    }
}

export default Hangman;