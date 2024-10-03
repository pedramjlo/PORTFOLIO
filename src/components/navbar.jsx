import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import '../styles/navbar.css';
import LanguageSwitcher from './LanguageSwitcher';




const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');


    const { t } = useTranslation();

    const currentLanguage = (lng) => {
        if (lng === "fa") {
            document.body.style.direction = "rtl";
            document.body.classList.add('fa')
            document.body.classList.remove('en');
        } else {
            document.body.style.direction = "ltr";
            document.body.classList.add('en')
            document.body.classList.remove('fa');

        }
    };

    useEffect(() => {
        currentLanguage(i18n.language);
    }, [i18n.language]);

    

    return(
        <div>
            {isMobile ? (
                <div>
                    <nav className='nav'>
                        <a href="/" id='logo'>{t('logo')}</a>
                        <LanguageSwitcher id="language-switcher" />
                    </nav>
                </div>

                
            ) : (
                <nav className='nav'>
                    <a href="/" id='logo'>{t('logo')}</a>
                    <LanguageSwitcher />
                </nav>
            )}
        </div>
    );
};


export default Navbar;