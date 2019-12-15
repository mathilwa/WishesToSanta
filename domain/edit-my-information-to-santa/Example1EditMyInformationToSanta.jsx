import React, { useState } from 'react';
import { saveMyInformationToSanta } from '../../api/santa-api';

const EditMyInformationToSanta = ({ person }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState(null);
    const [address, setAddress] = useState('');
    const [hasFireplace, setHasFireplace] = useState(null);
    const [hasBeenNice, setHasBeenNice] = useState(null);
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

                <label>
                    <span>Name</span>}
                    <input
                        type="text"
                        value={name}
                        placeholder="Your name"
                        onChange={event => setName(event.target.value)}
                        inputMode={inputMode}
                    />
                </label>

                <label>
                    <span>How old are you?</span>}
                    <input
                        type="text"
                        value={age}
                        placeholder="Your age"
                        onChange={event => setAge(event.target.value)}
                        inputMode={inputMode}
                    />
                </label>

                <div>
                    <span>Boy or girl?</span>
                    <input
                        type="radio"
                        value="girl"
                        checked={gender === 'girl'}
                        onChange={event => setGender(event.target.value)}
                    />
                    <input
                        type="radio"
                        value="boy"
                        checked={gender === 'boy'}
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

                <label>
                    Has a fireplace:
                    <input type="checkbox" checked={person.hasFireplace} />
                </label>

                <div>
                    <span>Do you have a fireplace?</span>
                    <label>Yes</label>
                    <input
                        type="radio"
                        value={true}
                        checked={hasFireplace}
                        onChange={event => setHasFireplace(event.target.value)}
                    />
                    <label>No</label>
                    <input
                        type="radio"
                        value={false}
                        checked={hasFireplace === false}
                        onChange={event => setHasFireplace(event.target.value)}
                    />
                </div>

                <div>
                    <span>Have you been naughty or nice?</span>
                    <label>Naughty</label>
                    <input
                        type="radio"
                        value={true}
                        checked={hasBeenNice}
                        onChange={event => setHasBeenNice(event.target.value)}
                    />
                    <label>Nice</label>
                    <input
                        type="radio"
                        value={false}
                        checked={hasBeenNice === false}
                        onChange={event => setHasBeenNice(event.target.value)}
                    />
                </div>

                <textarea
                    onChange={event => {
                        setLetterToSanta(event.target.value);
                    }}
                    value={letterToSanta}
                />

                <div>
                    <h2>Your wishes this year</h2>
                    <input
                        type="text"
                        value={wish}
                        placeholder="Enter your wish"
                        onChange={event => setWish(event.target.value)}
                    />

                    <button
                        type="button"
                        onClick={() => {
                            setWishList(wishList.concat(wish));
                            setWish('');
                        }}
                    />

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
