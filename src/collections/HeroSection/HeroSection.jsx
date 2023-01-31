/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Button } from '../../components';

export const HeroSection = () => {
  return (
    <div className='flex items-center space-x-18'>
      <div className='flex flex-col space-y-8'>
        <h1 className='text-2xl lg:text-5xl font-bold'>
          The future of sustainable cryptocurrency
        </h1>
        <p className='text-secondary max-w-[500px]'>
          Eco-friendly mining and innovative staking options for maximum returns
        </p>
        <div>
          <Button>Buy Now</Button>
        </div>
      </div>
      <div>
        {/* <Image src='/images/eco-friendly-hero.png' alt='img' /> */}
        <div
          class='h-screen bg-cover bg-center  w-[700px]'
          style={{ backgroundImage: `url(/images/eco-friendly-hero.png)` }}
        ></div>
      </div>
    </div>
  );
};
