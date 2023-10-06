import '@/styles/globals.css'
import { Languages, Section } from '@/utils/Languages';
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
  const selectedLanguage: Section = Languages[language]
  return (
    <LanguageContext.Provider value={[selectedLanguage, setLanguage]}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&amp;display=swap" rel="stylesheet"></link>

      <div className='container gap-[16px]'>
        <SideBar />

        <div className={`content h-full overflow-y-auto relative min-w-[73%] w-[73%] delay-200 ease-in-out transition-all ${activeNavbar ? '-translate-x-32' : 'translate-x-0'
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

