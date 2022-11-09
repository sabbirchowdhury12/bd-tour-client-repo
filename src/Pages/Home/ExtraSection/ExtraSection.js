import React from 'react';
import img1 from '../../../Assets/ExtraImage/img1.jfif';
import img2 from '../../../Assets/ExtraImage/img2.jfif';
import img3 from '../../../Assets/ExtraImage/img3.jfif';

const ExtraSection = () => {
    return (
        <div className='container mx-auto py-10'>
            <h2 className='text-center font-bold text-2xl my-4 text-yellow-900'>Meet With Our Team</h2>
            <div className='text-center grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div>
                    <img src={img1} alt="" />
                    <h2 className='text-xl font-bold my-1'>Alvy</h2>
                    <p >Photographer| 5 years of exprerience</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h2 className='text-xl font-bold my-1' >Lucifer</h2>
                    <p>Photographer| 5 years of exprerience</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h2 className='text-xl font-bold my-1'>Katrina</h2>
                    <p>Photographer| 5 years of exprerience</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;