import { NextPage } from "next";
import { getDisplayName } from "next/dist/next-server/lib/utils";
import { useRouter } from "next/router";
import { createContext, FC, useEffect, useState } from "react";

export type Locale = "fr" | "en";

export const locales = ["fr", "en"];

export const defaultLocale = "fr";

export const isLocale = (value: string): value is Locale => {
  return locales.some((l) => l === value);
};

export const getLocale = (): Locale => {
  const preferredLocale = localStorage.getItem("locale");
  if (preferredLocale && isLocale(preferredLocale)) {
    return preferredLocale;
  }

  const [browserLocale] = navigator.language.split("-");
  if (isLocale(browserLocale)) {
    return browserLocale;
  }

  return defaultLocale;
};

export type LangProps = {
  locale?: Locale;
};

interface ContextProps {
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<ContextProps>({
  locale: "en",
  setLocale: () => null,
});

export const LocaleProvider: FC<{ lang: Locale }> = ({ lang, children }) => {
  const [locale, setLocale] = useState(lang);
  const { query } = useRouter();

  // store the preference
  useEffect(() => {
    if (locale !== localStorage.getItem("locale")) {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  // sync locale value on client-side route changes
  useEffect(() => {
    if (
      typeof query.lang === "string" &&
      isLocale(query.lang) &&
      locale !== query.lang
    ) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const withLocale = (WrappedPage: NextPage<any>) => {
  const WithLocale = ({ locale, ...pageProps }) => {
    /* if (!locale) {
      // no valid locale detected
      return <Error statusCode={404} />;
    } */

    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.getInitialProps = async (ctx) => {
    // retrieve initial props of the wrapped component
    const pageProps =
      (WrappedPage.getInitialProps && WrappedPage.getInitialProps(ctx)) || {};

    if (typeof ctx.query.lang !== "string" || !isLocale(ctx.query.lang)) {
      // in case the value of 'lang' is not a valid locale return it as undefined
      return { ...pageProps, locale: undefined };
    }

    // the locale is valid
    return { ...pageProps, locale: ctx.query.lang };
  };

  // WithLocale.getS

  // pretty display name for the debugger
  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};

export const getStaticPathsWithLocale = (path: string): string[] => {
  return locales.map((l) => `/${l}/${path}`);
};
