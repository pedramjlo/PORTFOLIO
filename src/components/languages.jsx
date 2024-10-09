import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import '../styles/languages.css';


const Languages = () => {

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
                    <span className='section-title'>{t('languages')}</span>
                </div>

                <div className='skill-item'>
                    <span className='skill-title'>{t('english')}</span>
                    <span className='skill-exp'>{t('english-exp')}</span>
                </div>

                <div className='skill-item'>
                    <span className='skill-title'>{t('farsi')}</span>
                    <span className='skill-exp'>{t('farsi-exp')}</span>
                </div>

                <div className='skill-item'>
                    <span className='skill-title'>{t('deutsch')}</span>
                    <span className='skill-exp'>{t('deutsch-exp')}</span>
                </div>


            </div>

            ):(
                <div className='section-container'>
                    <div className='section-title-container'>
                        <span className='section-title'>{t('languages')}</span>
                    </div>

                    <div className='skills-body'>
                            <div className='skill-item'>
                                <span className='skill-title'>{t('english')}</span>
                                <span className='skill-exp'>{t('english-exp')}</span>
                            </div>


                            <div className='skill-item'>
                                <span className='skill-title'>{t('farsi')}</span>
                                <span className='skill-exp'>{t('farsi-exp')}</span>
                            </div>

                            <div className='skill-item'>
                                <span className='skill-title'>{t('deutsch')}</span>
                                <span className='skill-exp'>{t('deutsch-exp')}</span>
                            </div>

                    </div>

                </div>

            )}
        </div>
    );
};


export default Languages;