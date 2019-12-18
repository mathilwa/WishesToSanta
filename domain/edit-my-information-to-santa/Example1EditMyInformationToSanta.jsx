import React, { useState } from 'react';
import { saveMyInformationToSanta } from '../../api/santa-api';

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
            hasBeenNice,
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

                <div>
                    <span>I am a...</span>
                    <label>Boy</label>
                    <input
                        type="radio"
                        value="boy"
                        checked={gender === 'boy'}
                        onChange={event => setGender(event.target.value)}
                    />
                    <label>Girl</label>
                    <input
                        type="radio"
                        value="girl"
                        checked={gender === 'girl'}
                        onChange={event => setGender(event.target.value)}
                    />
                </div>

                <label>
                    <span>My address is:</span>
                    <input
                        type="text"
                        value={address}
                        placeholder="Where do you live?"
                        onChange={event => setAddress(event.target.value)}
                    />
                </label>

                <div>
                    <span>I have a fireplace?</span>
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
                    <span>This year I have been naughty or nice?</span>
                    <label>Naughty</label>
                    <input
                        type="radio"
                        value={false}
                        checked={naughtyOrNice === false}
                        onChange={event => setNaughtyOrNice(event.target.value)}
                    />

                    <label>Nice</label>
                    <input
                        type="radio"
                        value={true}
                        checked={naughtyOrNice}
                        onChange={event => setNaughtyOrNice(event.target.value)}
                    />
                </div>

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
