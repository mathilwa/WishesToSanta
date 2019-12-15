import React from 'react';

import TextInputWithLabel from '../../components/text-input/TextInputWithLabel';
import RadioToggle from '../../components/radio-toggle/RadioToggle';

const AboutMe = ({ me, onMeChange }) => {
    const { name, age, gender, address, hasFireplace, naughtyOrNice } = me;
    return (
        <div>
            <h2>About me</h2>

            <TextInputWithLabel
                label="Name"
                placeholder="Your name"
                value={name}
                onChange={event => onMeChange({ ...me, name: event.target.value })}
            />
            <TextInputWithLabel
                label="How old are you?"
                placeholder="Your age"
                value={age}
                onChange={event => onMeChange({ ...me, age: event.target.value })}
            />

            <div>
                <span>Boy or girl?</span>

                <RadioToggle
                    label1="Boy"
                    toggleValue1="boy"
                    label2="Girl"
                    toggleValue2="girl"
                    value={gender}
                    onChange={event => onMeChange({ ...me, gender: event.target.value })}
                />
            </div>

            <label>
                <span>Where do you live?</span>}
                <input type="text" value={address} placeholder="Your address" onChange={onAddressChange} />
            </label>

            <div>
                <span>Do you have a fireplace?</span>

                <RadioToggle
                    label1="Yes"
                    toggleValue1={true}
                    label2="No"
                    toggleValue2={false}
                    value={hasFireplace}
                    onChange={event => onMeChange({ ...me, hasFireplace: event.target.value })}
                />
            </div>

            <div>
                <span>Have you been naughty or nice this year?</span>

                <RadioToggle
                    label1="Naughty"
                    toggleValue1="naughty"
                    label2="Nice"
                    toggleValue2="nice"
                    value={naughtyOrNice}
                    onChange={event => onMeChange({ ...me, naughtyOrNice: event.target.value })}
                />
            </div>
        </div>
    );
};

export default AboutMe;
