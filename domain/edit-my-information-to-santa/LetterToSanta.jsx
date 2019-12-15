import React from 'react';

const LetterToSanta = ({ letterToSanta, onLetterChange }) => (
    <textarea
        onChange={event => {
            onLetterChange(event.target.value);
        }}
        value={letterToSanta}
    />
);

export default LetterToSanta;
