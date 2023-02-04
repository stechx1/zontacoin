import { HoverableIcon } from '../../components/HoveableIcon';

/* eslint-disable @next/next/no-img-element */
export const OurPartners = () => {
  return (
    <div className='flex flex-col justify-center items-center my-16 space-y-6'>
      <p className='text-2xl'>Our Partners</p>
      <div className='flex flex-col md:flex-row space-x-10'>
        <HoverableIcon
          walmart
          image='/images/logos/walmart.svg'
          cImage='/images/logos/walmart-c.svg'
        />
        <HoverableIcon
          image='/images/logos/amazon.svg'
          cImage='/images/logos/amazon-c.svg'
        />
        <HoverableIcon
          image='/images/logos/bestbuy.svg'
          cImage='/images/logos/bestbuy-c.svg'
        />
        <HoverableIcon
          image='/images/logos/newegg.svg'
          cImage='/images/logos/newegg-c.svg'
        />
        <HoverableIcon
          walmart={true}
          image='/images/logos/boa.svg'
          cImage='/images/logos/boa-c.svg'
        />
        <HoverableIcon
          image='/images/logos/3m.svg'
          cImage='/images/logos/3m-c.svg'
        />
      </div>
    </div>
  );
};
