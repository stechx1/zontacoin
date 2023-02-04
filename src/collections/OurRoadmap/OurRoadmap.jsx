import { RoadmapCard } from '../../components';

export const OurRoadmap = () => {
  const redFeatures = [
    {
      id: 1,
      feature: 'Exchange Listing',
    },
    {
      id: 2,
      feature: 'Loans',
    },
    {
      id: 3,
      feature: 'Hedge Funds',
    },
    {
      id: 4,
      feature: 'Trading',
    },
    {
      id: 5,
      feature: 'Real Estate',
    },
  ];

  const greenFeatures = [
    {
      id: 1,
      feature: 'Website',
    },
    {
      id: 2,
      feature: 'Web Wallet',
    },
    {
      id: 3,
      feature: 'Pre-Sale',
    },
    {
      id: 4,
      feature: 'Sell and Buy Zonta Crypto',
    },
    {
      id: 5,
      feature: 'Staking',
    },
  ];
  const blueFeatures = [
    {
      id: 1,
      feature: 'Cross Chain Bridging',
    },
    {
      id: 2,
      feature: 'Credit Card',
    },
    {
      id: 3,
      feature: 'Merchant',
    },
    {
      id: 4,
      feature: 'Digital Estate',
    },
    {
      id: 5,
      feature: 'Mobile Applications',
    },
  ];
  const yellowFeatures = [
    {
      id: 1,
      feature: 'NFT',
    },
    {
      id: 2,
      feature: 'Digital Land',
    },
    {
      id: 3,
      feature: 'Land Mining',
    },
    {
      id: 4,
      feature: 'Marketplace',
    },
  ];

  return (
    <div className='flex flex-col space-y-16 items-center justify-center'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Our Roadmap</h2>
      </div>

      <div className='flex space-x-6'>
        <RoadmapCard
          phaseNum={'1'}
          stageColor={'Green'}
          para={`Zero inflation will make overall level of prices for goods and services remain stable, with no overall increase or decrease.`}
          featureList={greenFeatures}
        />
        <RoadmapCard
          phaseNum={'2'}
          stageColor={'Red'}
          para={`Zero inflation will make overall level of prices for goods and services remain stable, with no overall increase or decrease.`}
          featureList={redFeatures}
        />
        <RoadmapCard
          phaseNum={'3'}
          stageColor={'Blue'}
          para={`Zero inflation will make overall level of prices for goods and services remain stable, with no overall increase or decrease.`}
          featureList={blueFeatures}
        />
        <RoadmapCard
          phaseNum={'4'}
          stageColor={'Yellow'}
          para={`Zero inflation will make overall level of prices for goods and services remain stable, with no overall increase or decrease.`}
          featureList={yellowFeatures}
        />
      </div>
    </div>
  );
};
