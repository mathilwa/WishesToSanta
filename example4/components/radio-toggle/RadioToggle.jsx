import React from 'react';

const RadioToggle = ({ question, label1, toggleValue1, label2, toggleValue2, value, onChange }) => (
    <fieldset>
        <legend>{question}</legend>
        <label>
            <input type="radio" value={toggleValue1} checked={value === toggleValue1} onChange={onChange} />
            {label1}
        </label>
        <label>
            <input type="radio" value={toggleValue2} checked={value === toggleValue2} onChange={onChange} />
            {label2}
        </label>
    </fieldset>
);

export default RadioToggle;
