import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import { useTranslation } from 'react-i18next';




const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');


    const { t } = useTranslation();

    

    return(
        <header>
            {isMobile ? (
                <div>
                    <a href="/" id='logo'>{t('logo')}</a>
                </div>
            ) : (
                <div>
                    <a href="/" id='logo'>{t('logo')}</a>
                </div>
            )}
        </header>
    );
};


export default Navbar;