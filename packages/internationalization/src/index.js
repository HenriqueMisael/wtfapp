import I18n from 'i18n-js';
import pt from './pt-BR';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR'
};

I18n.translations = {
  pt_BR: pt
};

const _defaultLanguage = 'pt_BR';

const setLanguageToI18n = (language = _defaultLanguage) => {
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(
    translateNormalize
  );

  if (iHaveThisLanguage) I18n.locale = translateNormalize;
  else I18n.defaultLocale = _defaultLanguage;
};

setLanguageToI18n();

export const translate = key => I18n.t(key);

export const toMoney = value =>
  I18n.toNumber(value, { delimiter: '.', separator: ',', precision: 2 });
