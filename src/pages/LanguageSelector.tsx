import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next"; // Import useTranslation from react-i18next
import GlobeIcon from "./GlobeIcon.tsx";
import i18net from 'i18next';
import cookies from 'js-cookie';

const Languages = [
  {
    code: 'ar-001',
    name: 'عربي',
    country_code: 'sa',
    dir: 'rtl'
  },
  {
    code: 'ar-DZ',
    name: 'العربية-الجزائر',
    country_code: 'dz',
    dir: 'rtl'
  },
  {
    code: 'be-BY',
    name: 'беларускі',
    country_code: 'by'
  },
  {
    code: 'bg-BG',
    name: 'български',
    country_code: 'bg'
  },
  {
    code: 'bs-BA',
    name: 'Bosanski',
    country_code: 'ba'
  },
  {
    code: 'cs',
    name: 'čeština',
    country_code: 'cz'
  },
  {
    code: 'da-DK',
    name: 'Dansk',
    country_code: 'dk'
  },
  {
    code: 'de',
    name: 'Deutsch',
    country_code: 'de'
  },
  {
    code: 'de-AT',
    name: 'Deutsch-Österreich',
    country_code: 'at'
  },
  {
    code: 'de-BE',
    name: 'Deutsch-Belgien',
    country_code: 'be'
  },
  {
    code: 'de-CH',
    name: 'Deutsch-Schweiz',
    country_code: 'ch'
  },
  {
    code: 'de-LI',
    name: 'Deutsch-Liechtenstein',
    country_code: 'li'
  },
  {
    code: 'de-LU',
    name: 'Deutsch-Luxemburg',
    country_code: 'lu'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'en-AU',
    name: 'English-Australia',
    country_code: 'au'
  },
  {
    code: 'en-US',
    name: 'English-US',
    country_code: 'us'
  },
  {
    code: 'es-419',
    name: 'Española sudamericana',
    country_code: 'ar'
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'es'
  },
  {
    code: 'fi',
    name: 'Suomalainen',
    country_code: 'fi'
  },
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  },
  {
    code: 'fr-BE',
    name: 'Français-Belgique',
    country_code: 'be'
  },
  {
    code: 'hr',
    name: 'Hrvatski',
    country_code: 'hr'
  },
  {
    code: 'hu',
    name: 'Magyar',
    country_code: 'hu'
  },
  {
    code: 'id-ID',
    name: 'bahasa Indonesia',
    country_code: 'id'
  },
  {
    code: 'it',
    name: 'Italiano',
    country_code: 'it'
  },
  {
    code: 'it-CH',
    name: 'Italiano Svizzera',
    country_code: 'ch'
  },
  {
    code: 'lt',
    name: 'lietuvių',
    country_code: 'lt'
  },
  {
    code: 'lv',
    name: 'latviešu',
    country_code: 'lv'
  },
  {
    code: 'nb',
    name: 'Norsk',
    country_code: 'no'
  },
  {
    code: 'nl-NL',
    name: 'Nederlands',
    country_code: 'nl'
  },
  {
    code: 'nl-BE',
    name: 'Nederlands-België',
    country_code: 'be'
  },
  {
    code: 'pl-PL',
    name: 'Polski',
    country_code: 'pl'
  },
  {
    code: 'pt-BR',
    name: 'Português-Brasil',
    country_code: 'br'
  },
  {
    code: 'pt-PT',
    name: 'Português',
    country_code: 'pt'
  },
  {
    code: 'ro',
    name: 'Română',
    country_code: 'ro'
  },
  {
    code: 'ru-RU',
    name: 'Русский',
    country_code: 'ru'
  },
  {
    code: 'sk-SK',
    name: 'Slovenčina',
    country_code: 'sk'
  },
  {
    code: 'sl',
    name: 'Slovenščina',
    country_code: 'si'
  } 
];


const LanguageSelector = () => {
const currentLanguageCode= cookies.get('i18next') || 'en'
const currentLanguage = Languages.find(l => l.code === currentLanguageCode)
const { t, i18n } = useTranslation(); // Initialize the t function
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title= t('Betvista')
  }, [currentLanguage, t])
  return (
        <div>

          <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

            <GlobeIcon/>{/* Remove width and height props */}
            <span>{t('Language')}</span>
          </button>
          <ul className="dropdown-menu" style={{ maxHeight: '500px', overflowY: 'auto', overflowX: 'hidden'}}>
            <li><span className="dropdown-item-text">{t('Language')}</span></li>
            {Languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button className="dropdown-item" onClick={() => i18net.changeLanguage (code)} disabled ={code === currentLanguageCode}>
                  <span className={`fi fi-${country_code} mx-2`} style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}></span>
                  {t(name)}
                </button>
              </li>
            ))}
          </ul>
        </div>
  );
};

export default LanguageSelector;
