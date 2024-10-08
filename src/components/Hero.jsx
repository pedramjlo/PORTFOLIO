import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';
import { useTranslation } from 'react-i18next';
import Man from '../images/man.svg';
import { IR, GB, DE } from 'country-flag-icons/react/3x2';
import '../styles/hero.css';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const languages = ['fa', 'en', 'de'];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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

    const languageIcons = {
        fa: <IR title="Iran" className="language-flag" />,
        en: <GB title="United Kingdom" className="language-flag" />,
        de: <DE title="Germany" className="language-flag" />
    };

    const renderButtons = () => {
        return (
            <div className='language-buttons'>
                {languages.filter(lng => lng !== i18n.language).map(lng => (
                    <button key={lng} onClick={() => changeLanguage(lng)} className="language-button">
                        {languageIcons[lng]}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className='hero-container'>
            {isMobile ? (
                <div>
                    {renderButtons()}

                    <div>
                        <img src={Man} alt="hero-image" />
                    </div>

                    <div className='welcome-text'>
                        {t('welcome')}
                    </div>
                </div>
            ) : (
                <div className='hero-container'>
                    {renderButtons()}
                    <div className='hero-image'>
                        <img src={Man} alt="hero-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
