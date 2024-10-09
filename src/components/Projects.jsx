import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import DaeiAli from '../images/daeiALi.webp';
import Django from '../images/django.webp'


import '../styles/projects.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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

    const renderProject = (imgSrc, title, ingreds, date, explain) => (
        <div className='section-content'>
            <img src={imgSrc} alt={title} />
            <span className='project-title'>{title}</span>
            <p className='project-ingreds'>{ingreds}</p>
            {date && <span className='project-date'>{date}</span>}
            <span className='project-exp'>{explain}</span>
        </div>
    );


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

                        <div className='section-content-btns'>
                            <p><a class="link-opacity-100 btn" href="https://daei-fastfood-ali.ir" style={{ color: "#ffffff" }}>{t('gotoButton')}</a></p>
                            <p><a class="link-opacity-100" href="https://github.com/pedramjlo/Daei-Ali-ORG.git">{t('sourceCode')}</a></p>
                        </div>
                    </div>

                    <hr />
                    <div className='section-content'>
                        <img src={Django} alt="Django" />
                        <span className='project-title'>{t('blogApp')}</span>
                        <p className='project-ingreds'>{t('blogAppingreds')}</p>
                        <span className='project-exp'>{t('blogAppExplain')}</span>

                        <div className='section-content-btns'>
                            <p><a class="link-opacity-100 btn" href="https://github.com/pedramjlo/alketas_blog.git" style={{ color: "#ffffff" }}>{t('sourceCode')}</a></p>
                        </div>
                    </div>
                    
                    <hr />
                    <div className='section-content'>
                        <img src={Django} alt="Django" />
                        <span className='project-title'>{t('todoApp')}</span>
                        <p className='project-ingreds'>{t('todoAppingreds')}</p>
                        <span className='project-exp'>{t('todoAppExplain')}</span>
                    </div>

                    <div className='section-content-btns'>
                            <p><a class="link-opacity-100 btn" href="https://github.com/pedramjlo/alketas_blog.git" style={{ color: "#ffffff" }}>{t('sourceCode')}</a></p>
                    </div>

                </div>

            ) : (
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

                    <div className='section-content-btns'>
                        <p><a class="link-opacity-100 btn" href="https://daei-fastfood-ali.ir" style={{ color: "#ffffff" }}>{t('gotoButton')}</a></p>
                        <p><a class="link-opacity-100" href="https://github.com/pedramjlo/Daei-Ali-ORG.git">{t('sourceCode')}</a></p>
                    </div>
                </div>

                <hr />
                <div className='section-content'>
                    <img src={Django} alt="Django" />
                    <span className='project-title'>{t('blogApp')}</span>
                    <p className='project-ingreds'>{t('blogAppingreds')}</p>
                    <span className='project-exp'>{t('blogAppExplain')}</span>

                    <div className='section-content-btns'>
                        <p><a class="link-opacity-100 btn" href="https://github.com/pedramjlo/alketas_blog.git" style={{ color: "#ffffff" }}>{t('sourceCode')}</a></p>
                    </div>


                </div>
                
                <hr />
                <div className='section-content'>
                    <img src={Django} alt="Django" />
                    <span className='project-title'>{t('todoApp')}</span>
                    <p className='project-ingreds'>{t('todoAppingreds')}</p>
                    <span className='project-exp'>{t('todoAppExplain')}</span>

                    <div className='section-content-btns'>
                        <p><a class="link-opacity-100 btn" href="https://github.com/pedramjlo/alketas_blog.git" style={{ color: "#ffffff" }}>{t('sourceCode')}</a></p>
                    </div>

                </div>

                


            </div>


            )}
        </div>
    );
};

export default Projects;