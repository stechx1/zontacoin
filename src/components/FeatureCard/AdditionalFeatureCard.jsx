import { useRouter } from 'next/router';
import { Button } from '../Button';

/* eslint-disable @next/next/no-img-element */
export const AdditionalFeatureCard = ({
  subheading,
  heading,
  para,
  imgSrc,
}) => {
  const router = useRouter();
  return (
    <div className='bg-[#23262F] flex flex-col md:flex-row justify-between items-center rounded-lg max-w-[80%] mx-auto'>
      {/* Content */}
      <div className='p-12 space-y-6 md:w-[60%] flex flex-col'>
        <div className='space-y-2'>
          <h3 className='text-sm text-secondary uppercase'>{subheading}</h3>
          <h2 className='text-xl font-bold'>{heading}</h2>
          <p className='text-secondary'>{para}</p>
        </div>
        <div>
          <Button onClick={() => router.push("/ico")} size='small' type={'secondary'}>
            Buy Now
          </Button>
        </div>
      </div>
      {/* Image */}
      <div className='md:w-[40%]'>
        <img src={`/images/${imgSrc}`} alt='loan-pool' />
      </div>
    </div>
  );
};
