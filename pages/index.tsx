import React, { Key } from 'react';
import Button from '../components/cores/Button/Button'
import Image from 'next/image';
import { LanguageContext } from './_app';
import ServiceCard from '@/components/cores/ServiceCard/ServiceCard';


export default function Home() {
  const [language, setLanguage] = React.useContext(LanguageContext);

  const { home } = language;
  console.log(home)
  return (
    <div className="w-full">
      <div className='relative w-full aspect-[2.2/1]'>
        <Image src='/img/bg.jpg' alt='background' className='w-full h-full' width={1000} height={582} objectFit='cover' />
        <div className='flex flex-col justify-center gap-4 h-full absolute top-0 left-[10%] w-[60%]'>
          <h1 className='text-white text-bg leading-[1.2] font-bold capitalize text-[50px]'>Discover my amazing Art Space !</h1>
          <Button title={'explore now'} />
        </div>
      </div>
      <h1 className='mt-12 text-2xl font-sans mb-8'>Services I offered in the past</h1>
      <div className='grid grid-cols-3 gap-5'>
        {home.services.cards.map((service: any, key: Key) => (
          <ServiceCard key={key} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  )
}
