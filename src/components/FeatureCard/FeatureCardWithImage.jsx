/* eslint-disable @next/next/no-img-element */
export const FeatureCardWithImage = ({ numImg, img, heading, para, reverse }) => {
  return (
    <div className={`${reverse? "flex-row-reverse":"flex-row"} flex justify-between`}>
      <div className='flex flex-col space-y-4 justify-center  w-[40%]'>
        <img width={"120px"} src={`/images/${numImg}`} alt={`${numImg} img`} />
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-secondary">{para}</p>
      </div>
      <div className='w-1/2'>
        <img src={`/images/${img}`} alt={`images ${img}`} />
      </div>
    </div>
  );
};
