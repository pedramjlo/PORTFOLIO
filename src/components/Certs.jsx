import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import Django from '../images/certs/django-cert.jpg';
import Python from '../images/certs/python-cert.jpg';
import SQL from '../images/certs/sql-cert.jpg';
import DP from '../images/certs/dp-cert.jpg';






const Certificate = () => {

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
                <div className='section-container'>

                <div className='section-title-container'>
                    <span className='section-title'>{t('certs')}</span>
                </div>

                <div className='section-content'>
                    <img src={Django} alt="Django" />
                    <span className='cert-title'>{t('djangoCertExplain')}</span>
                </div>


                <hr />
                <div className='section-content'>
                    <img src={Python} alt="Python" />
                    <span className='cert-title'>{t('pythonCertExplain')}</span>
                </div>

                <hr />
                <div className='section-content'>
                    <img src={SQL} alt="SQL" />
                    <span className='cert-title'>{t('sqlCertExplain')}</span>
                </div>

                <hr />
                <div className='section-content'>
                    <img src={DP} alt="Design Patterns" />
                    <span className='cert-title'>{t('deisgnPCertExplain')}</span>
                </div>


            </div>

        
        </div>
    );
};


export default Certificate;