import React from 'react';

const TextInputWithLabel = ({ label, value, placeholder, onChange }) => (
    <label>
        <span>{label}</span>}
        <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
    </label>
);

export default TextInputWithLabel;
