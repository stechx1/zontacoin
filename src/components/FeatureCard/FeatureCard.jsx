/* eslint-disable @next/next/no-img-element */
export const FeatureCard = ({ imgSrc, heading, para }) => {
  return (
    <div className='bg-[#23262F] md:max-w-80 md:w-[48%] py-12 px-8 rounded mt-4'>
      <img src={`/images/${imgSrc}`} alt={`${imgSrc} image`} />
      <h2 className="text-lg font-bold">{heading}</h2>
      <p className="text-secondary">{para}</p>
    </div>
  );
};
