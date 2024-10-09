import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import DaeiAli from '../images/daeiALi.webp';
import Django from '../images/django.webp'


import '../styles/projects.css';
import GoToButton from './GoToBtn';


const Projects = () => {

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
                <div className='skills-section'>

        <div className='skills-title-container'>
            <span className='skills-title'>{t('primarySkills')}</span>
        </div>

        <div className='skills-grid'>
            <div className='skill-item'>
                <span className='skill-name'>{t('python')}</span>
                <span className='skill-experience'>{t('python-exp')}</span>
            </div>
            <div className='skill-item'>
                <span className='skill-name'>{t('django')}</span>
                <span className='skill-experience'>{t('django-exp')}</span>
            </div>
            <div className='skill-item'>
                <span className='skill-name'>{t('sql')}</span>
                <span className='skill-experience'>{t('sql-exp')}</span>
            </div>
            <div className='skill-item'>
                <span className='skill-name'>{t('javascript')}</span>
                <span className='skill-experience'>{t('javascript-exp')}</span>
            </div>
            <div className='skill-item'>
                <span className='skill-name'>{t('html')}</span>
                <span className='skill-experience'>{t('html-exp')}</span>
            </div>
            <div className='skill-item'>
                <span className='skill-name'>{t('csharp')}</span>
                <span className='skill-experience'>{t('csharp-exp')}</span>
            </div>
            <div className='skill-item'>
                <span className='skill-name'>{t('react')}</span>
                <span className='skill-experience'>{t('react-exp')}</span>
            </div>
        </div>

    </div>

            ) : (
                <div className='skills-section'>

                    <div className='skills-title-container'>
                        <span className='skills-title'>{t('primarySkills')}</span>
                    </div>

                    <div className='skills-grid'>
                        <div className='skill-item'>
                            <span className='skill-name'>{t('python')}</span>
                            <span className='skill-experience'>{t('python-exp')}</span>
                        </div>
                        <div className='skill-item'>
                            <span className='skill-name'>{t('django')}</span>
                            <span className='skill-experience'>{t('django-exp')}</span>
                        </div>
                        <div className='skill-item'>
                            <span className='skill-name'>{t('sql')}</span>
                            <span className='skill-experience'>{t('sql-exp')}</span>
                        </div>
                        <div className='skill-item'>
                            <span className='skill-name'>{t('javascript')}</span>
                            <span className='skill-experience'>{t('javascript-exp')}</span>
                        </div>
                        <div className='skill-item'>
                            <span className='skill-name'>{t('html')}</span>
                            <span className='skill-experience'>{t('html-exp')}</span>
                        </div>
                        <div className='skill-item'>
                            <span className='skill-name'>{t('csharp')}</span>
                            <span className='skill-experience'>{t('csharp-exp')}</span>
                        </div>
                        <div className='skill-item'>
                            <span className='skill-name'>{t('react')}</span>
                            <span className='skill-experience'>{t('react-exp')}</span>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Projects;