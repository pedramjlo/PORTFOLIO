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
                        <span className='section-title'>{t('projects')}</span>
                    </div>

                    <div className='section-body'>
                        <img src={DaeiAli} alt="Daei Ali" />
                        <div className='section-item'>
                            <span className='project-title'>{t('daeiAli')}</span>
                            <span className='project-ingreds'>{t('daeiAliingreds')}</span>
                            <span className='project-date'>{t('daeiAliDelivery')}</span>
                            <span className='project-explain'>{t('daeiAliExplain')}</span>
                            <GoToButton />
                        </div>
                        
                    </div>

                    <div class="separator"></div>

                    <div className='section-body'>
                        <img src={Django} alt="Blog app" />
                        <div className='section-item'>
                            <span className='project-title'>{t('blogApp')}</span>
                            <span className='project-ingreds'>{t('blogAppingreds')}</span>
                            <span className='project-explain'>{t('blogAppExplain')}</span>
                            <GoToButton />
                        </div>
                        
                    </div>

                    <div className='section-body'>
                        <img src={Django} alt="todo list" />
                        <div className='section-item'>
                            <span className='project-title'>{t('todoApp')}</span>
                            <span className='project-ingreds'>{t('todoAppingreds')}</span>
                            <span className='project-explain'>{t('todoAppExplain')}</span>
                            <GoToButton />
                        </div>
                        
                    </div>

                    <div class="separator"></div>
                    
                </div>
            ): (
                <div>

                </div>
            )}
        </div>
    );
};

export default Projects;