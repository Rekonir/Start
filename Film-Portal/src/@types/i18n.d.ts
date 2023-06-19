import "i18next";
import ru from '../locales/ru/translation.json'

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "ru";
    resources: {
      ru: typeof ru;
    };
    allowObjectInHTMLChildren: true
  }
}