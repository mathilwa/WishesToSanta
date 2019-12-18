import React from 'react';

const WishList = ({ wishList }) => (
    <ul>
        {wishList.map(wish => (
            <li>{wish}</li>
        ))}
    </ul>
);

export default WishList;
