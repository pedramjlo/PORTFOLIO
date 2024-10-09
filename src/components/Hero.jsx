import React, { useEffect, useState } from 'react';
import useMediaQuery from './MediaQuery';
import { useTranslation } from 'react-i18next';


import Man from '../images/man.svg';
import Call from '../images/call.svg';
import Mail from '../images/mail.svg';
import Home from '../images/home.svg';



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
                    <Modal.Header closeButton className="modal-header-centered">
                        <Modal.Title>
                            <span style={{ color: "#000000" }}>{t('contact')}</span>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='modal-body' style={{ backgroundColor: "#36454F", direction: "ltr" }}>
                        <div className='modal-row'>
                            <a href="tel:+989336335973">
                                <img src={Call} alt="" />
                            </a>
                            <span style={{ color: "#ffffff" }}>
                                +98933 633 5973
                            </span>
                        </div>

                        <div className='modal-row'>
                            <a href="mailto:pedram_sif@tuta.io"><img src={Mail} alt="mail"/> </a>
                            <span style={{ color: "#ffffff" }}>
                                pedram_sif@tuta.io
                            </span>
                        </div>

                        <div className='modal-row'>
                            <a href={Home}><img id="home-icon" src={Home} alt="call" /></a>
                            <span>Iran, Kerman</span>
                        </div>
                    </Modal.Body>
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
