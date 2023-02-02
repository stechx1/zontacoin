/* eslint-disable @next/next/no-img-element */
export const Model = ({ iconSrc, heading, para }) => {
  return (
    <div className='flex space-x-4'>
      <img src={`/images/${iconSrc}`} alt='trading-model' />
      <div className='flex flex-col'>
        <h2 className='text-lg font-bold'>{heading}</h2>
        <p className='text-secondary'>{para}</p>
      </div>
    </div>
  );
};
