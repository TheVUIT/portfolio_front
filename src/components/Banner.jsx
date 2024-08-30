import React from 'react'
import imagesPack from '../utils/ImagesContant';


const Banner = () => {
    return (

        <div className='mt-16 lg:mt-10 h-screen w-full p-4 md:p-10'>
            <main className="flex h-5/6 w-full bg-cover bg-re bg-center" style={{ backgroundImage: `url(${imagesPack.BANNERIMAGE})` }}>

            </main>
        </div>
    );
};

export default Banner;