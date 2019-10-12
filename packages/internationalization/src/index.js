import I18n from 'i18n-js';
import ptBR from './pt-BR';
import enUS from './en-US';
import frFR from './fr-FR';

I18n.translations = {
  pt_BR: ptBR,
  en_US: enUS,
  fr_FR: frFR,
};

const _defaultLanguage = 'pt_BR';

export const setLanguage = (language = _defaultLanguage) => {
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(language);

  if (iHaveThisLanguage) I18n.locale = language;
  else I18n.defaultLocale = _defaultLanguage;
};

export const getCurrent = () => I18n.locale;

export const getLanguages = () => Object.getOwnPropertyNames(I18n.translations);

setLanguage();

export const translate = (key, args) => I18n.t(key, args);
