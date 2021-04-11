import React from 'react';
import WishList from '../../components/wish-list/WishList';

const MyInformationToSanta = ({ person }) => (
    <div>
        <h1>Hi, Santa! This is me</h1>

        <h2>About me:</h2>
        <div>My name is {person.name}</div>
        <div>I am {person.age} years old</div>
        <div>I am a {person.gender}</div>
        <div>I live at {person.address}</div>
        <div>
            {person.hasFireplace
                ? "I do have a fireplace, so it's just for you to come by"
                : "I don't have a fireplace, but I'll hope you come by anyway!"}
        </div>

        <div>{`I have been ${person.naughtyOrNice ? 'nice' : 'naughty'} this year`}</div>

        <div>
            <h2>My wishes this year:</h2>
            <WishList wishList={person.wishList} />
        </div>

        <div>
            <div>And Santa, I also want you to know this:</div>
            <div>{person.letterToSanta}</div>
        </div>
    </div>
);

export default MyInformationToSanta;
