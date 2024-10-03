import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';
import { useTranslation } from 'react-i18next';

import Man from '../images/man.svg'

import '../styles/hero.css';


const Hero = () => {

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
        <main className='container'>
            {isMobile ? (
                <div className='hero-image'>
                    <img src={Man} alt="Man" />
                </div>
            ) : (
                <div>
                    <img src={Man} alt="Man" />
                </div>
            )}
        </main>
    );
};

export default Hero;