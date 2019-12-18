import React from 'react';

const LetterToSanta = ({ letterToSanta, onLetterChange }) => (
    <textarea
        placeholder="Do you want to say something to Santa?"
        onChange={event => onLetterChange(event.target.value)}
        value={letterToSanta}
    />
);

export default LetterToSanta;
