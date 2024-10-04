import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import DaeiAli from '../images/daeiALi.webp';
import Django from '../images/django.webp'


import '../styles/projects.css';
import GoToButton from './GoToBtn';


const Projects = () => {

    const { t } = useTranslation();

    const isMobile = useMediaQuery('(max-width: 768px)');

    return(
        <div>
            {isMobile ? (
                <div className='section-container'>
                    <div className='section-title-container'>
                        <span className='section-title'>{t('primarySkills')}</span>
                    </div>
                    <div className='section-content'>
                        <img src={DaeiAli} alt="DaeiAli" />
                        <span className='project-title'>{t('daeiAli')}</span>
                        <p className='project-ingreds'>{t('daeiAliingreds')}</p>
                        <span className='project-date'>{t('daeiAliDelivery')}</span>
                        <span className='project-exp'>{t('daeiAliExplain')}</span>
                    </div>
                    <GoToButton />
                </div>

            ) : (
                <div>

                </div>
            )}
        </div>
    );
};

export default Projects;