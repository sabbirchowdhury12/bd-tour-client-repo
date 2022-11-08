import React from 'react';
import img1 from '../../../Assets/ExtraServicesImage/img1.jfif';
import img2 from '../../../Assets/ExtraServicesImage/img2.png';
import img3 from '../../../Assets/ExtraServicesImage/img3.jfif';
import img4 from '../../../Assets/ExtraServicesImage/img5.jfif';

const ExtraServices = () => {
    return (
        <div className=' p-10'>
            <h2 className='text-3xl text-center font-semibold py-10'>Additional Services We Provide</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                <div className="card" >
                    <img src={img1} alt="Shoes" />
                    <div >
                        <h2 className="card-title py-2">
                            Visa Opening
                        </h2>
                        <p>We provide visa support for citizens of any country. Our experts will advise on all visa issues.</p>
                    </div>
                </div>
                <div className="card ">
                    <img src={img2} alt="Shoes" />
                    <div >
                        <h2 className="card-title py-2">
                            Private Transfer
                        </h2>
                        <p>We can arrange a private transfer at the start or end point, book a hotel or offer a continuation of the rest after a safari.
                        </p>
                    </div>
                </div>
                <div className="card ">
                    <img src={img3} alt="Shoes" />
                    <div >
                        <h2 className="card-title py-2">
                            Photo Report
                        </h2>
                        <p>For an additional fee, you can get a full photo and video report on the trip, as well as a personal photo shoot.
                        </p>
                    </div>
                </div>
                <div className="card ">
                    <img src={img4} alt="Shoes" />
                    <div className="">
                        <h2 className="card-title py-2">
                            Medical Insurance
                        </h2>
                        <p>Reliable medical insurance that really covers the risks if something happens while traveling.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraServices;