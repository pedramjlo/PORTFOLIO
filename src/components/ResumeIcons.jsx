import React from 'react';

import '../styles/resumeicons.css';

import Quera from '../icons/quera.svg';
import Github from '../icons/github.svg';



const ResumeIcons = () => {
    return(
        <div className='resume-icons'>
            <a href="#"><img  src={Quera} alt="Quera" /></a>
            <a href="#"><img id='github'  src={Github} alt="Github" /></a>
        </div>
    );
};

export default ResumeIcons;