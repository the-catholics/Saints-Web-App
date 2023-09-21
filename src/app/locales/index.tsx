import React, { FC } from 'react';
import use from 'i18n-string-templates';
import pt from './pt.json';
import en from './en.json';

const locales: Record<string, Record<string, string>> = {
  pt,
  pt_BR: pt,
  en,
  en_US: en,
};

const supportedLocales = ['en', 'pt'];

const urlParams = new URLSearchParams(window.location.hash || window.location.search);
const browserLocale = locales[navigator.language]
  ? navigator.language
  : locales[navigator.language.substring(0, 2)]
  ? navigator.language.substring(0, 2)
  : 'pt';

const paramLocale = urlParams.get('lang') as unknown as string;
// allow using a URL param to specify the language, otherwise fall back to determined language from browser
export const locale: string = paramLocale && supportedLocales.includes(paramLocale) ? paramLocale : browserLocale;
export const i18n = use(locales, locale);

export const DangerousComponent: FC<{ inner: string }> = ({ inner }) => (
  // eslint-disable-next-line react/no-danger
  <span dangerouslySetInnerHTML={{ __html: inner }} />
);
