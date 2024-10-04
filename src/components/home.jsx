import React, { useEffect } from 'react';
import useMediaQuery from './MediaQuery';

import Navbar from './Navbar';
import PrimarySkills from './PrimarySkills';
import Languages from './languages';

import { useTranslation } from 'react-i18next';
import Hero from './Hero';
import Projects from './Projects';
import Certificate from './Certs';



const Home = () => {


    const { t, i18n } = useTranslation();

    const isMobile = useMediaQuery('(max-width: 768px)');


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
                <div className='container main'>
                    <Navbar />
                    <Hero />
                    <br />
                    <hr />
                    <PrimarySkills />
                    <hr />
                    <Languages />
                    <hr />
                    <Projects />
                    <hr />
                    <Certificate />
                </div>

            ) : (

                <div>
                    <header>
                        <Navbar />
                    </header>
                </div>
                
            )}
        </div>
    );
};

export default Home;