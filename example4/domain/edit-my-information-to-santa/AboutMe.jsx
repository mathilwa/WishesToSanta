import React from 'react';
import TextInputWithLabel from '../../components/text-input/TextInputWithLabel';
import RadioToggle from '../../components/radio-toggle/RadioToggle';

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

            <RadioToggle
                question="I am a..."
                label1="Boy"
                toggleValue1="boy"
                label2="Girl"
                toggleValue2="girl"
                value={gender}
                onChange={event => onMeChange({ ...me, gender: event.target.value })}
            />

            <TextInputWithLabel
                label="My address is:"
                placeholder="Where do you live?"
                value={address}
                onChange={event => onMeChange({ ...me, address: event.target.value })}
            />

            <RadioToggle
                question="I have a fireplace?"
                label1="Yes"
                toggleValue1={true}
                label2="No"
                toggleValue2={false}
                value={hasFireplace}
                onChange={event => onMeChange({ ...me, hasFireplace: event.target.value })}
            />

            <RadioToggle
                question="This year I have been naughty or nice?"
                label1="Naughty"
                toggleValue1="naughty"
                label2="Nice"
                toggleValue2="nice"
                value={naughtyOrNice}
                onChange={event => onMeChange({ ...me, naughtyOrNice: event.target.value })}
            />
        </div>
    );
};

export default AboutMe;
