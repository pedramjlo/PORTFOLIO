import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import '../styles/navbar.css';
import Quera from '../icons/quera.svg';
import Github from '../icons/github.svg';

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
    }, [i18n.language]);



    const resumeIcons = {
        github: Github,
        quera: Quera,
    };

    


    return (
        <nav>
            {isMobile ? (
                    <div class="navbar">

                        <div className='navbar-item'><a className='logo' href="/">{t('logo')}</a></div>

                        <div className='navbar-item resume-icons'>
                            <img id='github-icon' src={Github} alt="Github" />
                            <img id='quera-icon' src={Quera} alt="Quera" />
                        </div>

                    </div>
            ) : ( 

                <nav class="navbar">

                    <div className='navbar-item'><a className='logo' href="/">{t('logo')}</a></div>

                    <div className='navbar-item resume-icons'>
                        <img id='github-icon' src={Github} alt="Github" />
                        <img id='quera-icon' src={Quera} alt="Quera" />
                    </div>

                </nav>

            )}
        </nav>
    );
};

export default Navbar;
