import React from 'react';
import { useTranslation } from 'react-i18next';

import Farsi from './icons/iran.svg';
import English from './icons/britain.svg';
import Deutsch from './icons/germany.svg';

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
    <div>
      {languages.filter(lng => lng !== i18n.language).map(lng => (
        <button key={lng} onClick={() => changeLanguage(lng)} style={{ border: 'none', background: 'none', cursor: 'pointer'}}>
          <img src={languageIcons[lng]} alt={`${lng} flag`} style={{width: '26px', height: '26px', borderRadius: '50%'}}  />
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
