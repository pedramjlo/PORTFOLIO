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
                <div>
                    
                </div>

            ): (
                <div>

                </div>
            )}
        </div>
    );
};

export default Projects;