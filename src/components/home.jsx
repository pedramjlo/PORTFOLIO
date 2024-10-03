import React from 'react';
import useMediaQuery from './MediaQuery';

import Navbar from './Navbar';


const Home = () => {

    const isMobile = useMediaQuery('max-width: 768px');

    const currentLanguage = (lng) => {
        if (lng === "fa") {
            document.body.style.direction = "rtl";
        } else {
            document.body.style.direction = "ltr";
        }
    };

    return(
        <div className='container'>
            {isMobile ? (
                <div>
                    <Navbar />
                </div>
            ) : (
                <div>
                    <Navbar />
                </div>
            )}
        </div>
    );
};

export default Home;