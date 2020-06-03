import "./app.css";
import Router from "next/router";
import { useEffect } from "react";
import { getLocale, LocaleProvider } from "../lib/internationalization";
import PageLayout from "../ui/PageLayout";

export default ({ Component, pageProps }) => {
  const { lang } = pageProps;
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.replace("/[lang]", `/${getLocale()}`);
    }
  }, []);

  return (
    <LocaleProvider lang={lang}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </LocaleProvider>
  );
};
