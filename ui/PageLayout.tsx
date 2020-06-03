import { useState, useContext } from "react";
import Head from "next/head";
import Button from "./Button";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useRouter } from "next/router";
import { LocaleContext } from "../lib/internationalization";

type Theme = "light" | "dark";

export default ({ children }) => {
  const [themeMode, setThemeMode] = useState<Theme>("dark");
  const router = useRouter();
  const { locale } = useContext(LocaleContext);

  return (
    <div
      className={`flex flex-col h-screen theme-${themeMode} rhanb-background-primary text-font-primary transition duration-200 ease-in-out`}
    >
      <Head>
        <title>Rhanb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex items-center justify-between flex-wrap p-4">
        <Button onClick={() => router.push(`/${locale}/`)}>Rhanb</Button>
        <Button onClick={() => router.push(`/${locale}/experiences`)}>Experiences</Button>

        <Button
          onClick={() => {
            setThemeMode(themeMode === "dark" ? "light" : "dark");
          }}
        >
          {themeMode === "light" ? <IoIosSunny /> : <IoIosMoon />}
        </Button>
      </nav>

      <main className="flex-1 flex container items-center justify-center mx-auto">
        {children}
      </main>

      <footer></footer>
    </div>
  );
};
