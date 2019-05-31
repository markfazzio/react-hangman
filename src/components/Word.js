import React, { Component } from 'react';

import './Word.css';

class Word extends Component {
    render() {

        const { guessedWord } = this.props;

        return (
            <div className="word">
                { guessedWord }
            </div>
        )
    }
}

export default Word;