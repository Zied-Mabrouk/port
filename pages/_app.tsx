import '@/styles/globals.css'
import { Languages } from '@/utils/Languages';
import type { AppProps } from 'next/app'
import React from 'react';
import SideBar from "../components/modules/SideBar/SideBar";
import NavBar from "../components/modules/NavBar/NavBar";

export const LanguageContext = React.createContext([Languages['EN'], (language: string) => { }]);

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
  const selectedLanguage: any = Languages[language]
  return (
    <LanguageContext.Provider value={[selectedLanguage, setLanguage]}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&amp;display=swap" rel="stylesheet"></link>

      <div className='main-container'>
        <SideBar />

        <div className={`content @container h-full px-8 overflow-y-auto relative delay-200 ease-in-out transition-all ${activeNavbar ? '-translate-x-32' : 'translate-x-0'
          }
        }`}>
          {
            activeNavbar && <div className='absolute top-0 left-0 w-full h-full bg-[rgba(25,25,35,.4)]'>

            </div>
          }
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

