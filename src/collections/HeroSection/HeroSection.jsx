/* eslint-disable @next/next/no-img-element */
import { Button } from '../../components';

export const HeroSection = () => {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col space-y-8'>
        <h1 className='text-2xl lg:text-5xl'>The future of sustainable cryptocurrency</h1>
        <p className='text-secondary'>
          Eco-friendly mining and innovative staking options for maximum returns
        </p>
        <div>
          <Button>Buy Now</Button>
        </div>
      </div>
      <div>
        <img src='/images/eco-friendly-hero.png' alt='img' />
      </div>
    </div>
  );
};
