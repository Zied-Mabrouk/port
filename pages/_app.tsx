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
  let [activeNavbar, setActiveNavbar] = React.useState(false);
  const swapLanguage = () => {
    if (language === 'EN') {
      setLanguage('FR')
    } else {
      setLanguage('EN')
    }
  }
  return (
    <LanguageContext.Provider value={[Languages[language], setLanguage]}>

      <div className='container'>
        <SideBar />

        <div className={"h-full overflow-y-auto w-[min(100vw-402px,1070px)] transition-all"}>
          <Component {...pageProps} />
        </div>
        <NavBar
          active={activeNavbar}
          setActive={setActiveNavbar}
          swapLanguage={swapLanguage}
        />
      </div >
    </LanguageContext.Provider>

  )
}

