import React, { Component } from 'react';
import classnames from 'classnames';

import './Word.css';

class Word extends Component {
    render() {

        const {
            guessedWord,
            gameOver,
            isWinner
        } = this.props;

        const wordClassNames = classnames({
            'word' : true,
            'word--complete' : gameOver || isWinner
        });

        return (
            <div className={wordClassNames}>
                { guessedWord }
            </div>
        )
    }
}

export default Word;