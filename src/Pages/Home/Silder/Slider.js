import React from 'react';
import img1 from '../../../Assets/SliderImage/img1.jpg';
import img2 from '../../../Assets/SliderImage/img2.jfif';
import img3 from '../../../Assets/SliderImage/img3.jpg';
import SliderItem from './SliderItem';


const sliderData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    },
];

const Slider = () => {
    return (
        <div className="carousel w-full h-screen ">
            {
                sliderData.map(slide => <SliderItem
                    key={slide.id}
                    slide={slide}
                ></SliderItem>)
            }

        </div>
    );
};

export default Slider;