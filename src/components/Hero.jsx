import React, { useEffect, useState } from 'react';
import useMediaQuery from './MediaQuery';
import { useTranslation } from 'react-i18next';
import Man from '../images/man.svg';

import { IR, GB, DE } from 'country-flag-icons/react/3x2';
import '../styles/hero.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Hero = () => {

    const { t, i18n } = useTranslation();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const languages = ['fa', 'en', 'de'];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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

    const languageIcons = {
        fa: <IR title="Iran" className="language-flag" />,
        en: <GB title="United Kingdom" className="language-flag" />,
        de: <DE title="Germany" className="language-flag" />
    };

    const renderButtons = () => {
        return (
            <div className='language-buttons'>
               {languages.map((lng) => (
                    <p key={lng}>
                        <a onClick={() => changeLanguage(lng)} className="link-opacity-75" href="#">
                            {languageIcons[lng]}
                        </a>
                    </p>
                ))}
            </div>
        );
    };

    const modalButton = () => {
        return(
            <div>
            <Button className="custom-button" variant="primary" onClick={handleShow}>
                <span style={{ color: "#ffffff" }}>{t('contact')}</span>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('contact')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    x
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        x
                    </Button>
                </Modal.Footer>
            </Modal>
         </div>
        );
    };

    

    return (
        <div className='hero-container'>
            {isMobile ? (
                <main>
                    {renderButtons()}
                    <div className='hero-content'>
                        
                        <div className='hero-image'>
                            <img src={Man} alt="Pedram Jalali" />
                        </div>

                        <div className='hero-writings'>
                            <div className='welcome-text'>
                                <span>{t('welcome')}</span>
                            </div>

                            <div className='hero-description'>
                                <p>{t('description')}</p>
                                {modalButton()}
                            </div>
                        </div>

                    </div>
                </main>
            ) : (
                <div className='hero-content'>
                    {renderButtons()}
                    <div className="container">

                        <div className="row">


                            <div className="col writings">
                                <span className='welcome-text'>{t('welcome')}</span>
                                <p className='hero-description'>{t('description')}</p>
                                {modalButton()}
                            </div>

                            <div className="col img">
                                <img src={Man} alt="hero-image" />
                            </div>

                            

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
