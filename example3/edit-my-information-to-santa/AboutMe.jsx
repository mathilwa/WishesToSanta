import React from 'react';
import TextInputWithLabel from './TextInputWithLabel';
import RadioToggle from './RadioToggle';

const AboutMe = ({ me, onMeChange }) => {
    const { name, age, gender, address, hasFireplace, naughtyOrNice } = me;
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

            <fieldset>
                <legend>I am a...</legend>

                <RadioToggle
                    label1="Boy"
                    toggleValue1="boy"
                    label2="Girl"
                    toggleValue2="girl"
                    value={gender}
                    onChange={event => onMeChange({ ...me, gender: event.target.value })}
                />
            </fieldset>

            <TextInputWithLabel
                label="My address is:"
                placeholder="Where do you live?"
                value={address}
                onChange={event => onMeChange({ ...me, address: event.target.value })}
            />

            <fieldset>
                <legend>I have a fireplace?</legend>

                <RadioToggle
                    label1="Yes"
                    toggleValue1={true}
                    label2="No"
                    toggleValue2={false}
                    value={hasFireplace}
                    onChange={event => onMeChange({ ...me, hasFireplace: event.target.value })}
                />
            </fieldset>

            <fieldset>
                <legend>This year I have been naughty or nice?</legend>

                <RadioToggle
                    label1="Naughty"
                    toggleValue1="naughty"
                    label2="Nice"
                    toggleValue2="nice"
                    value={naughtyOrNice}
                    onChange={event => onMeChange({ ...me, naughtyOrNice: event.target.value })}
                />
            </fieldset>
        </div>
    );
};

export default AboutMe;
