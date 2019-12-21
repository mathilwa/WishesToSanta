import React from 'react';

import TextInputWithLabel from '../../example4/components/text-input/TextInputWithLabel';

const MyWishes = ({ wish, wishList, onWishChange, onWishListChange }) => (
    <div>
        <h2>My wishes this year:</h2>

        <TextInputWithLabel
            label="I want:"
            placeholder="Write a wish"
            value={wish}
            onChange={event => onWishChange(event.target.value)}
        />

        <button
            type="button"
            value="Add wish"
            onClick={() => {
                onWishListChange(wishList.concat(wish));
                onWishChange('');
            }}
        />

        <h3>My wish list:</h3>
        <ul>
            {wishList.map(wish => (
                <li>{wish}</li>
            ))}
        </ul>
    </div>
);
export default MyWishes;
