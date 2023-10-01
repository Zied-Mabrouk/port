import '@/styles/globals.css'
import { Languages } from '@/utils/Languages';
import type { AppProps } from 'next/app'
import React from 'react';
import SideBar from "../components/modules/SideBar/SideBar";
import NavBar from "../components/modules/NavBar/NavBar";
import { useRouter } from 'next/router';

export const LanguageContext = React.createContext([{}, (language: string) => { }]);

export default function App({ Component, pageProps }: AppProps) {
  let [language, setLanguage] = React.useState<'EN' | 'FR'>('EN');
  let [active, setActive] = React.useState(false);
  let [selected, setSelected] = React.useState("History");
  return (
    <LanguageContext.Provider value={[Languages[language], setLanguage]}>

      <div className='container'>
        <SideBar />

        <Component {...pageProps} />
        {/* <NavBar
            active={active}
            setActive={setActive}
            setSelected={setSelected}
            selected={selected}
          /> */}
      </div >
    </LanguageContext.Provider>

  )
}

