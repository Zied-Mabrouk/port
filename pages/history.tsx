import React, { Key } from 'react';
import { LanguageContext } from './_app';
import EducationCard from '@/components/cores/EducationCard/EducationCard';


export default function History() {
  const [language, setLanguage] = React.useContext(LanguageContext);

  const { history } = language;
  return (
    <div className="w-full">

      <h1 className='mt-2 text-2xl font-sans font-semibold mb-4'>My journey</h1>
      <div className='grid grid-cols-1 gap-5 @[600px]:grid-cols-2'>
        {history.cards.map((card: any, key: Key) => (
          <EducationCard card={card} key={key} />
        ))}
      </div>
    </div>
  )
}
