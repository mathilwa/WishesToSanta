import React, { useState } from 'react';
import TextInputWithLabel from '../../components/text-input/TextInputWithLabel';
import WishList from '../../components/wish-list/WishList';
import RadioToggle from '../../components/radio-toggle/RadioToggle';

const EditMyInformationToSanta = ({ topWishList }) => {
    const [searchWord, setSearchWord] = useState('');
    const [filteredWishList, setWishList] = useState([]);
    const [sort, setSort] = useState('popularity');

    return (
        <div>
            <h1>Top 100 wished gifts this year</h1>
            <TextInputWithLabel
                label="Search for a wish"
                placeholder="car, lego, a puppy.."
                value={searchWord}
                onChange={event => {
                    setSearchWord(event.target.value);
                    setWishList(topWishList.filter(wish => wish.includes(searchWord)));
                }}
            />

            <RadioToggle
                question="Sort by"
                label1="Popularity"
                toggleValue1="popularity"
                label2="Alphabetically"
                toggleValue2="alphabetically"
                value={sort}
                onChange={event => setSort(event.target.value)}
            />

            <WishList wishList={searchWord ? filteredWishList : topWishList} />
        </div>
    );
};

export default EditMyInformationToSanta;
