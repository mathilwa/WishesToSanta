import React, { useState } from 'react';
import { saveMyInformationToSanta } from '../../api/santa-api';

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
                <h2>About me:</h2>

                <label>
                    <span>My name is:</span>
                    <input
                        type="text"
                        value={name}
                        placeholder="Write your name"
                        onChange={event => setName(event.target.value)}
                    />
                </label>

                <label>
                    <span>My age is:</span>
                    <input
                        type="text"
                        value={age}
                        placeholder="Tell Santa your age"
                        onChange={event => setAge(event.target.value)}
                    />
                </label>

                <fieldset>
                    <legend>I am a...</legend>
                    <label>
                        <input
                            type="radio"
                            value="boy"
                            checked={gender === 'boy'}
                            onChange={event => setGender(event.target.value)}
                        />
                        Boy
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="girl"
                            checked={gender === 'girl'}
                            onChange={event => setGender(event.target.value)}
                        />
                        Girl
                    </label>
                </fieldset>

                <label>
                    <span>My address is:</span>
                    <input
                        type="text"
                        value={address}
                        placeholder="Where do you live?"
                        onChange={event => setAddress(event.target.value)}
                    />
                </label>

                <fieldset>
                    <legend>I have a fireplace?</legend>
                    <label>
                        <input
                            type="radio"
                            value={true}
                            checked={hasFireplace}
                            onChange={event => setHasFireplace(event.target.value)}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value={false}
                            checked={hasFireplace === false}
                            onChange={event => setHasFireplace(event.target.value)}
                        />
                        No
                    </label>
                </fieldset>

                <fieldset>
                    <legend>This year I have been naughty or nice?</legend>
                    <label>
                        <input
                            type="radio"
                            value="naughty"
                            checked={naughtyOrNice === 'naughty'}
                            onChange={event => setNaughtyOrNice(event.target.value)}
                        />
                        Naughty
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="nice"
                            checked={naughtyOrNice === 'nice'}
                            onChange={event => setNaughtyOrNice(event.target.value)}
                        />
                        Nice
                    </label>
                </fieldset>

                <div>
                    <h2>My wishes this year:</h2>
                    <label>
                        <span>I want:</span>
                        <input
                            type="text"
                            value={wish}
                            placeholder="Write a wish"
                            onChange={event => setWish(event.target.value)}
                        />
                    </label>

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

                <button type="submit" value="Here you go, Santa" onClick={submitMyInformationToSanta} />
            </form>
        </div>
    );
};

export default EditMyInformationToSanta;
