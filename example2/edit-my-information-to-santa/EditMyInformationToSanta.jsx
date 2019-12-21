import React, { useState } from 'react';
import { saveMyInformationToSanta } from '../../api/santa-api';
import TextInputWithLabel from './TextInputWithLabel';
import RadioToggle from './RadioToggle';

const EditMyInformationToSanta = () => {
    const [name, setName] = useState('');

    const [age, setAge] = useState('');
    const [gender, setGender] = useState(null);
    const [address, setAddress] = useState('');
    const [hasFireplace, setHasFireplace] = useState(null);
    const [naughtyOrNice, setNaughtyOrNice] = useState(null);
    const [letterToSanta, setLetterToSanta] = useState('');
    const [wish, setWish] = useState('');
    const [wishList, setWishList] = useState([]);

    const submitMyInformationToSanta = async event => {
        event.preventDefault();

        await saveMyInformationToSanta({
            name,
            age,
            gender,
            address,
            hasFireplace,
            naughtyOrNice,
            letterToSanta,
            wishList,
        });
    };

    return (
        <div>
            <h1>Hi, Santa! This is me</h1>
            <form>
                <h2>About me</h2>

                <TextInputWithLabel
                    label="My name is:"
                    placeholder="Write your name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <TextInputWithLabel
                    label="My age is:"
                    placeholder="Tell Santa your age"
                    value={age}
                    onChange={event => setAge(event.target.value)}
                />

                <RadioToggle
                    question="I am a..."
                    label1="Boy"
                    toggleValue1="boy"
                    label2="Girl"
                    toggleValue2="girl"
                    value={gender}
                    onChange={event => setGender(event.target.value)}
                />

                <TextInputWithLabel
                    label="My address is:"
                    placeholder="Where do you live?"
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                />

                <RadioToggle
                    question="I have a fireplace?"
                    label1="Yes"
                    toggleValue1={true}
                    label2="No"
                    toggleValue2={false}
                    value={hasFireplace}
                    onChange={event => setHasFireplace(event.target.value)}
                />

                <RadioToggle
                    question="This year I have been naughty or nice?"
                    label1="Naughty"
                    toggleValue1="naughty"
                    label2="Nice"
                    toggleValue2="nice"
                    value={naughtyOrNice}
                    onChange={event => setNaughtyOrNice(event.target.value)}
                />

                <div>
                    <h2>My wishes this year:</h2>
                    <TextInputWithLabel
                        label="I want:"
                        placeholder="Write a wish"
                        value={wish}
                        onChange={event => setWish(event.target.value)}
                    />

                    <button
                        type="button"
                        value="Add wish"
                        onClick={() => {
                            setWishList(wishList.concat(wish));
                            setWish('');
                        }}
                    />

                    <h3>My wish list:</h3>
                    <ul>
                        {wishList.map(wish => (
                            <li>{wish}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>Santa, I also want to tell you...</h2>
                    <textarea
                        placeholder="Do you want to say something to Santa?"
                        onChange={event => setLetterToSanta(event.target.value)}
                        value={letterToSanta}
                    />
                </div>

                <button type="submit" onClick={submitMyInformationToSanta} />
            </form>
        </div>
    );
};

export default EditMyInformationToSanta;
