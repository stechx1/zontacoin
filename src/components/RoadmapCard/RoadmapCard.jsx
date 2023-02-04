/* eslint-disable @next/next/no-img-element */
export const RoadmapCard = ({ phaseNum, stageColor, para, featureList }) => {
  return (
    <div className='flex flex-col space-y-8 bg-[#202020] p-6 rounded-lg'>
      {/* Phase */}
      <div>
        <h3 className='text-sm uppercase text-secondary'>Phase {phaseNum}</h3>
      </div>
      {/* Stage */}
      <div className='space-y-2'>
        <h2 className='text-2xl font-bold'>Stage {stageColor}</h2>
        <p className='text-secondary'>{para}</p>
      </div>

      <div>
        <img src='/images/divider-new.svg' alt='divider' />
      </div>

      {/* Features */}

      <div className='flex flex-col space-y-2'>
        {featureList.map((feature) => (
          <div key={feature.id} className='flex space-x-2'>
            <img src='/images/tick-mark.svg' alt='tick' />
            <p>{feature.feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
