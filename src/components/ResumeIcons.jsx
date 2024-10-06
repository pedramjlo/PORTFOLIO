import React, { useEffect } from 'react';


import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


import '../styles/resumeicons.css';

import Quera from '../icons/quera.svg';
import Github from '../icons/github.svg';



const ResumeIcons = () => {
    
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
    }, []);

    return(
        <div className="container">
            <div className="d-flex justify-content-center">
                <div>
                    <a href="#"><img id='github-icon' src={Github} alt="Github" /></a>
                    <a href="#"><img id='quera-icon' src={Quera} alt="Quera" /></a>
                </div>
            </div>
    </div>

    );
};

export default ResumeIcons;