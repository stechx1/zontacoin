import { Button } from '../Button';

/* eslint-disable @next/next/no-img-element */
export const AdditionalFeatureCard = ({
  subheading,
  heading,
  para,
  imgSrc,
}) => {
  return (
    <div className='bg-[#23262F] flex justify-between items-center rounded-lg max-w-[80%] mx-auto'>
      {/* Content */}
      <div className='p-12 space-y-6 w-[60%] flex flex-col'>
        <div className='space-y-2'>
          <h3 className='text-sm text-secondary uppercase'>{subheading}</h3>
          <h2 className='text-xl font-bold'>{heading}</h2>
          <p className='text-secondary'>{para}</p>
        </div>
        <div>
          <Button size='small' type={'secondary'}>
            Buy Now
          </Button>
        </div>
      </div>
      {/* Image */}
      <div className='w-[40%]'>
        <img src={`/images/${imgSrc}`} alt='loan-pool' />
      </div>
    </div>
  );
};
