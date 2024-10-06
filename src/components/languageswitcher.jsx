import React from 'react';
import { useTranslation } from 'react-i18next';

import Farsi from '../icons/iran.svg';
import English from '../icons/britain.svg';
import Deutsch from '../icons/germany.svg';

import '../styles/languageswitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const languages = ['fa', 'en', 'de'];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languageIcons = {
    fa: Farsi,
    en: English,
    de: Deutsch
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        {languages.filter(lng => lng !== i18n.language).map(lng => (
          <button key={lng} onClick={() => changeLanguage(lng)} className="language-button">
            <img src={languageIcons[lng]} alt={`${lng} flag`} className="language-icon" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
