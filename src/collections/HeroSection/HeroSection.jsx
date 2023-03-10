/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '../../components';
import { MetaMask } from '../../functions/MetaMask';

export const HeroSection = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col md:flex-row items-center space-y-6 md:space-x-18 mt-8 md:mt-0'>
      <div className='flex flex-col space-y-4 md:space-y-8 md:items-stretch items-center'>
        <h1 className='text-2xl lg:text-5xl font-bold'>
          The future of sustainable cryptocurrency
        </h1>
        <p className='text-secondary max-w-[500px]'>
          Eco-friendly mining and innovative staking options for maximum returns
        </p>
        <div>
          <Button onClick={() => router.push('/ico')}>Buy Now</Button>
        </div>
      </div>
      <div>
        {/* <Image src='/images/eco-friendly-hero.png' alt='img' /> */}
        <div
          class='h-80 md:h-screen bg-cover bg-top md:bg-center  w-[700px]'
          style={{ backgroundImage: `url(/images/eco-friendly-hero.png)` }}
        ></div>
      </div>
    </div>
  );
};
