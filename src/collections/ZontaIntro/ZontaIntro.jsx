import { Button, FeatureCard } from '../../components';

export const ZontaIntro = () => {
  return (
    <div className='flex flex-col p-4 justify-center items-center space-y-14'>
      <div className='flex flex-col space-y-4 justify-center items-center'>
        <h2 className='text-3xl font-bold'>Zonta Intro</h2>
        <p className='text-secondary'>
          We&quot;ve got everything you need to start trading.
        </p>
      </div>

      <div className='flex space-x-4'>
        <FeatureCard
          imgSrc={'zero-inflation.svg'}
          heading='Zero Inflation'
          para={
            'Experience Zero Inflation and Maximum Security with Zontacoin Cryptocurrency'
          }
        />
        <FeatureCard
          imgSrc={'zero-transaction.svg'}
          heading='Zero Transaction Fees'
          para={`Eliminate Transaction Fees and Maximise Your Earnings with Zontacoin's Zero-Fee Transactions`}
        />
        <FeatureCard
          imgSrc={'real-time.svg'}
          heading='Real Time Settlement'
          para={`Experience Real-Time Settlement and Instant Transactions with Zontacoin's Advanced Blockchain Technology`}
        />
      </div>

      <div>
        <Button>Buy Now</Button>
      </div>
    </div>
  );
};
