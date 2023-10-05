import { useContext } from 'react';
import Button from '../components/cores/Button/Button'
import { LanguageContext } from './_app';
import Image from 'next/image';


export default function Home() {
  let [language] = useContext(LanguageContext);
  // const home = language['home'];
  return (
    <div className="w-full">
      <div className='relative w-full aspect-[2.2/1]'>
        <Image src='/img/bg.jpg' alt='background' className='w-full h-full' width={1000} height={582} objectFit='cover' />
        <div className='flex flex-col justify-center gap-4 h-full absolute top-0 left-[10%] w-[60%]'>
          <h1 className='text-white text-bg leading-[1.2] font-bold capitalize text-[50px]'>Discover my amazing Art Space !</h1>
          <Button title={'explore now'} />
        </div>
      </div>
    </div>
  )
}
