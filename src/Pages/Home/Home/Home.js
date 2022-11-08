import React from 'react';
import ExtraServices from '../ExtraServices/ExtraServices';
import Services from '../Services/Services';
import Slider from '../Silder/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <ExtraServices></ExtraServices>
        </div>
    );
};

export default Home;