import React, { useEffect, useState } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import '../styles/gotobtn.css';


const GoToButton = (value) => {

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
                <button type="button" class="btn btn-secondary" style={{ backgroundColor: "#58B2FE" }}>{t('gotoButton')}</button>
            ) : (
                <div>

                </div>
            )}
        </div>
    );
};

export default GoToButton;
