import React from 'react';

const RadioToggle = ({ label1, toggleValue1, label2, toggleValue2, value, onChange }) => (
    <>
        <label>{label1}</label>
        <input type="radio" value={toggleValue1} checked={value === toggleValue1} onChange={onChange} />
        <label>{label2}</label>
        <input type="radio" value={toggleValue2} checked={value === toggleValue2} onChange={onChange} />
    </>
);

export default RadioToggle;
