import React from 'react';

import TextInputWithLabel from '../../example4/components/text-input/TextInputWithLabel';
import RadioToggle from '../../example4/components/radio-toggle/RadioToggle';

const AboutMe = ({ me, onMeChange }) => {
    const { name, age, gender, address, hasFireplace, hasBeenNice } = me;
    return (
        <div>
            <h2>About me</h2>

            <TextInputWithLabel
                label="My name is:"
                placeholder="Write your name"
                value={name}
                onChange={event => onMeChange({ ...me, name: event.target.value })}
            />

            <TextInputWithLabel
                label="My age is:"
                placeholder="Tell Santa your age"
                value={age}
                onChange={event => onMeChange({ ...me, age: event.target.value })}
            />

            <div>
                <span>I am a...</span>

                <RadioToggle
                    label1="Boy"
                    toggleValue1="boy"
                    label2="Girl"
                    toggleValue2="girl"
                    value={gender}
                    onChange={event => onMeChange({ ...me, gender: event.target.value })}
                />
            </div>

            <TextInputWithLabel
                label="My address is:"
                placeholder="Where do you live?"
                value={address}
                onChange={event => onMeChange({ ...me, address: event.target.value })}
            />

            <div>
                <span>I have a fireplace?</span>

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
                <span>This year I have been naughty or nice?</span>

                <RadioToggle
                    label1="Naughty"
                    toggleValue1="naughty"
                    label2="Nice"
                    toggleValue2="nice"
                    value={hasBeenNice}
                    onChange={event => onMeChange({ ...me, hasBeenNice: event.target.value })}
                />
            </div>
        </div>
    );
};

export default AboutMe;
