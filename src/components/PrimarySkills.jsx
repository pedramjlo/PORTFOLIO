import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


import '../styles/primaryskills.css';
import LanguageSwitcher from './LanguageSwitcher';


const PrimarySkills = () => {
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

    return(
        <div>
            {isMobile ? (

                <div className='section-container'>

                    <div className='section-title-container'>
                        <span className='section-title'>{t('primarySkills')}</span>
                    </div>

                    <div className='section-item'>
                        <span className='skill-title'>{t('python')}</span>
                        <span className='skill-explain'>{t('python-exp')}</span>
                    </div>

                    <div className='section-item'>
                        <span className='skill-title'>{t('django')}</span>
                        <span className='skill-explain'>{t('django-exp')}</span>
                    </div>

                    <div className='section-item'>
                        <span className='skill-title'>{t('sql')}</span>
                        <span className='skill-explain'>{t('sql-exp')}</span>
                    </div>

                    <div className='section-item'>
                        <span className='skill-title'>{t('javascript')}</span>
                        <span className='skill-explain'>{t('javascript-exp')}</span>
                    </div>

                    <div className='section-item'>
                        <span className='skill-title'>{t('react')}</span>
                        <span className='skill-explain'>{t('react-exp')}</span>
                    </div>

                    <div className='section-item'>
                        <span className='skill-title'>HTML/CSS</span>
                        <span className='skill-explain'>{t('html-exp')}</span>
                    </div>

                    <div className='section-item'>
                        <span className='skill-title' style={{ direction: "ltr" }}>C#</span>
                        <span className='skill-explain'>{t('csharp-exp')}</span>
                    </div>

                    <div className='section-item'>
                        <span className='skill-title'>Bootstrap</span>
                        <span className='skill-explain'>{t('javascript-exp')}</span>
                    </div>


                </div>

            ) : (
                <div>

                </div>
            )}
        </div>
    );
};

export default PrimarySkills;