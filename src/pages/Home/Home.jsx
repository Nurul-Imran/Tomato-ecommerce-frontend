import React, { useState } from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

const Home = () => {
    const [category, setCategory] = useState("all");
    return (
        <>
            <Banner />
            <ExploreMenu category={category} setCategory={setCategory} />
        </>
    )
}

export default Home