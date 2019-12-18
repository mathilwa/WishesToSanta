import React from 'react';

import TextInputWithLabel from '../../components/text-input/TextInputWithLabel';
import WishList from '../../components/wish-list/WishList';

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

        <span>Your wish list</span>
        <WishList wishList={wishList} />
    </div>
);
export default MyWishes;
