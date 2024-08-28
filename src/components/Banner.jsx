import React from 'react'
import imagesPack from '../utils/ImagesContant';


const Banner = () => {
    return (
        <>
            <div className='h-8 w-screen bg-background_primary'>

            </div>
            <div className='h-screen w-full p-16 md:p-10 sm:p-4'>
                <main className=" flex h-5/6 w-full bg-cover bg-re bg-center" style={{ backgroundImage: `url(${imagesPack.BANNERIMAGE})` }}>

                </main>
            </div>
        </>
    );
};

export default Banner;


// /* Frame 59 */

// /* Auto layout */
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// padding: 100px 0px;
// gap: 54px;

// width: 1935px;
// height: 432px;

// background: #F4F4F4;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
