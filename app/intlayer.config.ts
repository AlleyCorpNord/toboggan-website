import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.FRENCH,
      Locales.SPANISH,
    ],
    defaultLocale: Locales.ENGLISH,
  },
  editor: {
    applicationURL: "http://localhost:3000",
    clientId: process.env.INTLAYER_CLIENT_ID,
    clientSecret: process.env.INTLAYER_CLIENT_SECRET,
    cmsURL: "https://intlayer.org",
  }
};

export default config;