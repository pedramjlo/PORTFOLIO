import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import Navbar from './Navbar';

import { useTranslation } from 'react-i18next';
import Hero from './Hero';


const Home = () => {


    const { t, i18n } = useTranslation();

    const isMobile = useMediaQuery('(max-width: 768px)');


    const currentLanguage = (lng) => {
        if (lng === "fa") {
            document.body.style.direction = "rtl";
        } else {
            document.body.style.direction = "ltr";
        }
    };

    useEffect(() => {
        currentLanguage(i18n.language);
    }, [i18n.language]);

    return(
        <div>
            {isMobile ? (
                <div className='container main'>
                    <Navbar />
                    <Hero />
                    <hr className="hr-text" />
                    
                </div>

            ) : (

                <div>
                    <header>
                        <Navbar />
                    </header>
                </div>
                
            )}
        </div>
    );
};

export default Home;