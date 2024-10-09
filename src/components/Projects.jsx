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
                <div className='section-container'>
                    <div className='section-title-container'>
                        <span className='section-title'>{t('projects')}</span>
                    </div>
                    <div className='section-content'>
                        <img src={DaeiAli} alt="DaeiAli" />
                        <span className='project-title'>{t('daeiAli')}</span>
                        <p className='project-ingreds'>{t('daeiAliingreds')}</p>
                        <span className='project-date'>{t('daeiAliDelivery')}</span>
                        <span className='project-exp'>{t('daeiAliExplain')}</span>
                        <GoToButton />
                    </div>

                    <br />
                    <hr />
                    <div className='section-content'>
                        <img src={Django} alt="Django" />
                        <span className='project-title'>{t('blogApp')}</span>
                        <p className='project-ingreds'>{t('blogAppingreds')}</p>
                        <span className='project-exp'>{t('blogAppExplain')}</span>
                        <GoToButton />
                    </div>
                    
                    <br />
                    <hr />
                    <div className='section-content'>
                        <img src={Django} alt="Django" />
                        <span className='project-title'>{t('todoApp')}</span>
                        <p className='project-ingreds'>{t('todoAppingreds')}</p>
                        <span className='project-exp'>{t('todoAppExplain')}</span>
                        <GoToButton />
                    </div>

                    <br />

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

export default Projects;