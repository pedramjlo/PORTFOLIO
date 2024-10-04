import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import Call from '../icons/call.svg';
import Mail from '../icons/mail.svg';
import Home from '../icons/home.svg';

import '../styles/footer.css';


const Footer = () => {
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
                <div className='footer'>

                    <div className='footer-row'>
                        
                        <a href="tel:+989336335973"><img src={Call} alt="call" /><span>+98933 633 5973</span></a>
                    </div>

                    <div className='footer-row'>
                        
                        <a href="mailto:pedram_sif@tuta.io"><img src={Mail} alt="mail" />pedram_sif@tuta.io</a>
                    </div>

                    <div className='footer-row'>
                        
                        <img src={Home} alt="call" /><span>Iran, Kerman</span>
                    </div>

                </div>
            ) : (
                <div>

                </div>
            )}
        </div>
    );
};


export default Footer;