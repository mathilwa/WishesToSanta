import React, { useState } from 'react';
import { saveMyInformationToSanta } from '../../api/santa-api';
import TextInputWithLabel from '../../components/text-input/TextInputWithLabel';
import RadioToggle from '../../components/radio-toggle/RadioToggle';

const EditMyInformationToSanta = ({ person }) => {
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

                <div>
                    <span>I am a...</span>

                    <RadioToggle
                        label1="Boy"
                        toggleValue1="boy"
                        label2="Girl"
                        toggleValue2="girl"
                        value={gender}
                        onChange={event => setGender(event.target.value)}
                    />
                </div>

                <TextInputWithLabel
                    label="My address is:"
                    placeholder="Where do you live?"
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                />

                <div>
                    <span>I have a fireplace?</span>

                    <RadioToggle
                        label1="Yes"
                        toggleValue1={true}
                        label2="No"
                        toggleValue2={false}
                        value={hasFireplace}
                        onChange={event => setHasFireplace(event.target.value)}
                    />
                </div>

                <div>
                    <span>This year I have been naughty or nice?</span>

                    <RadioToggle
                        label1="Naughty"
                        toggleValue1="naughty"
                        label2="Nice"
                        toggleValue2="nice"
                        value={naughtyOrNice}
                        onChange={event => setNaughtyOrNice(event.target.value)}
                    />
                </div>

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

                    <span>My wish list:</span>
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
