import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';

import '../styles/contactbtn.css';



const ContactBtn = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const { t } = useTranslation();

    return(
        <div>
            {isMobile ? (
                <button id='button'>{t('contact')}</button>
            ) : (
                <button type="button" class="btn btn-secondary" style={{ backgroundColor: "#58B2FE" }}>{t('contact')}</button>
            )}
        </div>
    );
};  

export default ContactBtn;