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

    const languages = ['fa', 'en', 'de'];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    const resumeIcons = {
        github: Github,
        quera: Quera,
    };

    const languageIcons = {
        fa: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#4d9e4a"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#c92a1d"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M18.061,16.805c.39-1.199,.021-2.514-.934-3.337,1.038,1.536,.664,3.611-.825,4.692l.104-2.56v-2.015c-.161-.077-.301-.194-.405-.34-.104,.145-.243,.262-.405,.34v2.015l.104,2.56c-1.489-1.081-1.864-3.156-.825-4.692-.956,.822-1.324,2.138-.934,3.337,.263,.809,.825,1.437,1.523,1.803-.427,.156-.883,.227-1.342,.204,.539,.175,1.091,.195,1.608,.086l.004,.108,.267,.367,.267-.367,.004-.108c.517,.109,1.069,.089,1.608-.086-.459,.022-.915-.049-1.342-.204,.699-.366,1.26-.994,1.523-1.803Z" fill="#c92a1d"></path><path d="M19.077,14.634c-.355-.614-.943-1.058-1.631-1.23,1.513,1.138,1.818,3.287,.68,4.801-.002,.003-.004,.005-.006,.008,1.252-.724,1.681-2.326,.957-3.578Z" fill="#c92a1d"></path><path d="M14.554,13.404c-.688,.172-1.277,.616-1.631,1.23-.724,1.252-.295,2.854,.957,3.578-.002-.003-.004-.005-.006-.008-1.138-1.513-.833-3.663,.68-4.801Z" fill="#c92a1d"></path><path d="M15.311,13.215c.223,.157,.532,.103,.689-.12,.157,.223,.466,.277,.689,.12,.187-.132,.26-.375,.175-.588-.048,.254-.292,.421-.546,.373-.134-.025-.25-.107-.318-.225-.068,.118-.184,.2-.318,.225-.254,.048-.498-.119-.546-.373-.085,.213-.013,.456,.175,.588Z" fill="#c92a1d"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>,
        en: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>,
        de: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#cc2b1d" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#f8d147"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
    };


    const renderLanguageButtons = () => {
        return (
            <div className='language-container' style={{ display: "flex" }}>
                {languages.map((lng) => (
                    <p key={lng}>
                        <a onClick={() => changeLanguage(lng)} className="link-opacity-75" href="#">
                            {languageIcons[lng]}
                        </a>
                    </p>
                ))}
            </div>
        );
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
