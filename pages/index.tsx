import Head from "next/head";
import { useState } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

import Card from "../ui/Card";
import Button from "../ui/Button";

type Theme = "light" | "dark";

/* const getBrowserTheme = (): Theme => {
  return window && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
} */

export default () => {
  const [themeMode, setThemeMode] = useState<Theme>("dark");

  return (
    <div
      className={`flex flex-col h-screen theme-${themeMode} rhanb-background-primary text-font-primary transition duration-200 ease-in-out`}
    >
      <Head>
        <title>Rhanb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex items-center justify-between flex-wrap p-4">
        <Button>Rhanb</Button>
        <Button>Projects</Button>

        <Button
          onClick={() => {
            setThemeMode(themeMode === "dark" ? "light" : "dark");
          }}
        >
          {themeMode === "light" ? <IoIosSunny /> : <IoIosMoon />}
        </Button>
      </nav>

      <main className="flex-1 flex container items-center justify-center mx-auto">
        <Card />
      </main>

      <footer></footer>
    </div>
  );
};
