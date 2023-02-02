import { Model } from './Model';

/* eslint-disable @next/next/no-img-element */
export const TradingModel = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex w-[40%] flex-col space-y-12'>
        <div className='flex-col'>
          <h2 className='text-2xl font-bold'>Zonta Trading Model</h2>
          <p className='text-secondary'>Locked & flexible trading</p>
        </div>
        <div className='flex-col space-y-10'>
          <Model
            iconSrc={'blockchain.svg'}
            heading={'Block-Chain Technology'}
            para='A staking model is a type of consensus mechanism used in blockchain
          technology to validate transactions and add new blocks to the chain.'
          />

          <img src='/images/divider.svg' alt='divider' />

          <Model
            iconSrc={'proof-ownership.svg'}
            heading='Proof of Ownership'
            para={`In a staking model, instead of using computational power (as in Proof of Work) or ownership of a certain amount of cryptocurrency (as in Proof of Ownership), validators "stake" or lock up a certain amount of the cryptocurrency as collateral.`}
          />
        </div>
      </div>
      <div className='w-1/2'>
        <img src='/images/trading-model.png' alt='trading-model' />
      </div>
    </div>
  );
};
