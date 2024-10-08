import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import Man from '../images/man.svg'

import ContactBtn from './ContactBtn';


import '../styles/hero.css';


const Hero = () => {

    const { t, i18n } = useTranslation();

    const isMobile = useMediaQuery('(max-width: 768px)');


    return(
        <main className='container'>
            {isMobile ? (
                <div className='hero'>
                    <img src={Man} alt="Man" />
                    <div className='hero-texts'>
                        <span id='welcome-text'>{t('welcome')}</span>
                        <p id='hero-description'>{t('description')}</p>
                        <ContactBtn />
                    </div>
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