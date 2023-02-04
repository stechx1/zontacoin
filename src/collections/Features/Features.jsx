import { FeatureCardWithImage } from '../../components';

export const Features = () => {
  return (
    <div className='flex flex-col space-y-4 justify-between items-center'>
      <h2 className='text-2xl font-bold'>Zonta Earn</h2>
      <p className='text-secondary'>
        Stacks is a production-ready library of stackable content blocks built
        in React Native.
      </p>

      <div className='flex flex-col space-y-8'>
        <FeatureCardWithImage
          img='staking.png'
          numImg={'01.svg'}
          heading={'Staking'}
          para={`Staking Zonta Coin is expected to provide a return of 3-5% annually. This is due to the coin's consensus mechanism, which rewards Stakers with a steady stream of new tokens at a rate of 3-5%. The longer the staking period, the higher the potential return on investment. Many investors are turning to Zonta Coin staking as a way to earn passive income and grow their wealth in the long term.`}
        />
        <FeatureCardWithImage
          img='rewards.png'
          numImg={'02.svg'}
          heading={'Rewards'}
          para={`The Zonta Coin is offering a generous rewards program for all of its customers. Customers can earn Upto 16% rewards on every purchase. This is significantly higher than traditional payment system and makes Zonta Coin an attractive choice for everyone . The rewards program is open to all customers, making it accessible for anyone to participate and earn a substantial and earn rewards`}
          reverse
        />
        <FeatureCardWithImage
          img='zonta-investment.png'
          numImg={'03.svg'}
          heading={'Zonta Investment'}
          para={`Zonta offers an investment opportunities that not only allow you to earn and re-invest, but also guarantees a competitive return on investment through its advanced algorithm. Zonta Coin's unique algorithm ensures that your returns are always among the best in the market.          `}
        />
        <FeatureCardWithImage
          img='trading-service-token.png'
          numImg={'04.svg'}
          heading={'Trading Service Token'}
          para={`Trading Zonta's service token is easy and user-friendly, providing an accessible way for investors to profit. The unique features of the token offer a wide range of benefits and potential returns, making it a valuable addition to any trading portfolio.`}
          reverse
        />
      </div>
    </div>
  );
};
