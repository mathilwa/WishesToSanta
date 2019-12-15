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
    const [naugtyOrNice, setNaughtyOrNice] = useState(null);
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
            hasBeenNice,
            letterToSanta,
            wishList,
        });
    };

    return (
        <div>
            <h1>Hi, santa! This is me</h1>
            <form>
                <h2>About me</h2>

                <TextInputWithLabel
                    label="Name"
                    placeholder="Your name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <TextInputWithLabel
                    label="How old are you?"
                    placeholder="Your age"
                    value={age}
                    onChange={event => setAge(event.target.value)}
                />

                <div>
                    <span>Boy or girl?</span>

                    <RadioToggle
                        label1="Boy"
                        toggleValue1="boy"
                        label2="Girl"
                        toggleValue2="girl"
                        value={gender}
                        onChange={event => setGender(event.target.value)}
                    />
                </div>

                <label>
                    <span>Where do you live?</span>}
                    <input
                        type="text"
                        value={address}
                        placeholder="Your address"
                        onChange={event => setAddress(event.target.value)}
                        inputMode={inputMode}
                    />
                </label>

                <div>
                    <span>Do you have a fireplace?</span>

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
                    <span>Have you been naughty or nice this year?</span>

                    <RadioToggle
                        label1="Naughty"
                        toggleValue1="naughty"
                        label2="Nice"
                        toggleValue2="nice"
                        value={naugtyOrNice}
                        onChange={event => setNaughtyOrNice(event.target.value)}
                    />
                </div>

                <textarea
                    onChange={event => {
                        setLetterToSanta(event.target.value);
                    }}
                    value={letterToSanta}
                />

                <div>
                    <TextInputWithLabel
                        label="Your wishes this year"
                        placeholder="Enter a wish"
                        value={wish}
                        onChange={event => setWish(event.target.value)}
                    />

                    <button
                        type="button"
                        onClick={() => {
                            setWishList(wishList.concat(wish));
                            setWish('');
                        }}
                    />

                    <span>Your wish list</span>
                    <ul>
                        {wishList.map(wish => (
                            <li>{wish}</li>
                        ))}
                    </ul>
                </div>

                <button type="submit" onClick={() => submitMyInformationToSanta()} />
            </form>
        </div>
    );
};

export default EditMyInformationToSanta;
