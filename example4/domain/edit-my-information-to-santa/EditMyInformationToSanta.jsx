import React, { useState } from 'react';
import { saveMyInformationToSanta } from '../../../api/santa-api';
import AboutMe from './AboutMe';
import MyWishes from './MyWishes';
import LetterToSanta from './LetterToSanta';

const EditMyInformationToSanta = () => {
    const [me, setMeState] = useState({
        name: '',
        age: '',
        address: '',
        gender: null,
        hasFireplace: null,
        naughtyOrNice: null,
    });

    const [letterToSanta, setLetterToSanta] = useState('');
    const [wish, setWish] = useState('');
    const [wishList, setWishList] = useState([]);

    const submitMyInformationToSanta = async event => {
        event.preventDefault();

        await saveMyInformationToSanta({
            ...me,
            letterToSanta,
            wishList,
        });
    };

    return (
        <div>
            <h1>Hi, Santa! This is me</h1>
            <form>
                <AboutMe me={me} onMeChange={updatedMeState => setMeState(updatedMeState)} />
                <MyWishes wish={wish} wishList={wishList} onWishChange={setWish} onWishListChange={setWishList} />
                <LetterToSanta letterToSanta={letterToSanta} onLetterChange={setLetterToSanta} />

                <button type="submit" onClick={submitMyInformationToSanta} />
            </form>
        </div>
    );
};

export default EditMyInformationToSanta;
