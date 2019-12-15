import React from 'react';

import TextInputWithLabel from '../../components/text-input/TextInputWithLabel';

const MyWishes = ({ wish, wishList, onWishChange, onWishListChange }) => (
    <div>
        <TextInputWithLabel
            label="Your wishes this year"
            placeholder="Enter a wish"
            value={wish}
            onChange={event => onWishChange(event.target.value)}
        />

        <button
            type="button"
            onClick={() => {
                onWishListChange(wishList.concat(wish));
                onWishChange('');
            }}
        />
        <span>Your wish list</span>
        <ul>
            {wishList.map(wish => (
                <li>{wish}</li>
            ))}
        </ul>
    </div>
);

export default MyWishes;
