import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import '../styles/navbar.css';
import LanguageSwitcher from './languageswitcher';
import ResumeIcons from './ResumeIcons';



const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');


    const { t } = useTranslation();

    const currentLanguage = (lng) => {
        if (lng === "fa") {
            document.body.style.direction = "rtl";
        } else {
            document.body.style.direction = "ltr";
        }
    };

    useEffect(() => {
        currentLanguage(i18n.language);
    }, []);

    

    return(
        <div>
            {isMobile ? (
                <div>
                    <nav className='nav'>
                        
                        <LanguageSwitcher id="language-switcher" />
                    </nav>
                </div>

                
            ) : (
                <div className="container">
                    <div className="d-flex justify-content-space-around align-items-center">
                        <div><LanguageSwitcher /></div>
                        <div><a href="/"><span id='logo'>{t('logo')}</span></a></div>
                        <div><ResumeIcons /></div>
                    </div>
                </div>



            )}
        </div>
    );
};


export default Navbar;