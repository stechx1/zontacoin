import { GoalCard } from '../../components';

export const OurGoals = () => {
  return (
    <div className='flex flex-col space-y-16 items-center justify-center'>
      <div className='space-y-2 text-center'>
        <h2 className='text-3xl font-bold'>Our Goals</h2>
        <p className='text-secondary'>{`ZontaCoin's goals are listed bellow`}</p>
      </div>

      <div className='flex space-x-6'>
        <GoalCard
          imgSrc={'01.svg'}
          heading='Zero Inflation'
          para='Zero inflation will make overall level of prices for goods and services remain stable, with no overall increase or decrease.'
        />
        <GoalCard
          imgSrc={'02.svg'}
          heading='Zero Transaction Fees'
          para='Using Zonta Coin, user is not required to pay any additional costs to the network or intermediary for the processing or completion of their transaction.'
        />
        <GoalCard
          imgSrc={'03.svg'}
          heading='Carbon Credits'
          para='Carbon credits are a type of permit that allow Zonta to emit a certain amount of greenhouse gases. They can be bought and sold on carbon markets.'
        />
        <GoalCard
          imgSrc={'04.svg'}
          heading='Eco-Friendly'
          para='The goal of Zonta coin is to reduce the carbon footprint of the cryptocurrency industry which is known to consume large amounts of electricity.'
        />
      </div>
    </div>
  );
};
