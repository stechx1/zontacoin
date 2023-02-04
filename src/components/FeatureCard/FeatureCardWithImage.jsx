/* eslint-disable @next/next/no-img-element */
export const FeatureCardWithImage = ({ numImg, img, heading, para, reverse }) => {
  return (
    <div className={`${reverse? "flex-col md:flex-row-reverse":"flex-col md:flex-row"} flex justify-between`}>
      <div className='flex flex-col space-y-4 justify-center w-[100%]  md:w-[40%] items-center md:items-start'>
        <img width={"120px"} src={`/images/${numImg}`} alt={`${numImg} img`} />
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-secondary">{para}</p>
      </div>
      <div className='mt-6 md:mt-0 md:w-1/2'>
        <img src={`/images/${img}`} alt={`images ${img}`} />
      </div>
    </div>
  );
};
