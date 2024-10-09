import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


import '../styles/primaryskills.css';


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

                    <div className='section-content'>
                        <span className='skill-title'>{t('python')}</span>
                        <span className='skill-exp'>{t('python-exp')}</span>
                    </div>

                    <div className='section-content'>
                        <span className='skill-title'>{t('django')}</span>
                        <span className='skill-exp'>{t('django-exp')}</span>
                    </div>

                    <div className='section-content'>
                        <span className='skill-title'>{t('sql')}</span>
                        <span className='skill-exp'>{t('sql-exp')}</span>
                    </div>

                    <div className='section-content'>
                        <span className='skill-title'>{t('javascript')}</span>
                        <span className='skill-exp'>{t('javascript-exp')}</span>
                    </div>

                    <div className='section-content'>
                        <span className='skill-title'>{t('html')}</span>
                        <span className='skill-exp'>{t('html-exp')}</span>
                    </div>

                    <div className='section-content'>
                        <span className='skill-title'>{t('csharp')}</span>
                        <span className='skill-exp'>{t('csharp-exp')}</span>
                    </div>

                    <div className='section-content'>
                        <span className='skill-title'>{t('react')}</span>
                        <span className='skill-exp'>{t('react-exp')}</span>
                    </div>

                </div>

            ) : (
                <div className='primary-skills dt'>
                <span className='section-title dt'>{t('primarySkills')}</span>

                <div class="container dt">
                    <div class="grid">
                    <div class="item">
                        <span className='skill-title'>{t('python')}</span>
                        <span className='skills-exp'>{t('python-exp')}</span>
                    </div>
                    <div class="item">
                        <span className='skill-title'>{t('django')}</span>
                        <span className='skills-exp'>{t('django-exp')}</span>
                    </div>
                    <div class="item">
                        <span className='skill-title'>{t('sql')}</span>
                        <span className='skills-exp'>{t('sql-exp')}</span>
                    </div>
                    <div class="item">
                        <span className='skill-title'>{t('javascript')}</span>
                        <span className='skills-exp'>{t('javascript-exp')}</span>
                    </div>
                    <div class="item">
                        <span className='skill-title'>{t('react')}</span>
                        <span className='skills-exp'>{t('react-exp')}</span>
                    </div>
                    <div class="item">
                        <span className='skill-title'>{t('html')}</span>
                        <span className='skills-exp'>{t('html-exp')}</span>
                    </div>
                    <div class="item">
                        <span className='skill-title'>{t('csharp')}</span>
                        <span className='skills-exp'>{t('csharp-exp')}</span>
                    </div>
                    </div>
                </div>
                </div>


            )}
        </div>
    );
};

export default PrimarySkills;