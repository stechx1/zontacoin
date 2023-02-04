/* eslint-disable @next/next/no-img-element */
export const GoalCard = ({ imgSrc, heading, para }) => {
  return (
    <div className='flex flex-col space-y-2 mt-4 items-center md:items-start'>
      <img width='100px' src={`/images/${imgSrc}`} alt='number' />
      <h2 className='text-xl font-bold'>{heading}</h2>
      <p className='text-secondary'>{para}</p>
    </div>
  );
};
