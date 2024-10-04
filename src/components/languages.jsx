import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


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
                <div>

                </div>
            ):(
                <div>

                </div>
            )}
        </div>
    );
};


export default Languages;