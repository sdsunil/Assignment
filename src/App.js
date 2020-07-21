import React, { useState, useEffect } from 'react';
import Campagins from './components/campaigns';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const [languageValue, setLanguage] = useState('en')
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(languageValue);
  }, [languageValue])

  function onlanguagechange(e) {
    setLanguage(e.target.value);
    e.preventDefault();
  }
  return (
    <div>
    <meta name="viewport"></meta>
      <div className='header'>
        <div className='language-dropdown'>
          <label className="formSelectLabel">{t('Language')}</label>
          <select className="selectBox" name='language' onChange={onlanguagechange}>
            <option value='en'>English</option>
            <option value='ch'>Chinese</option>
            <option value='ja'>Japanise</option>
          </select>
        </div>
      </div>
      <div className='title-text'>{t('Manage Campaigns')}</div>
      <div className='camp-main-div'>
        <Campagins />
      </div>
    </div>
  );
}

export default App;
