import { Button } from '../../components';

export const EcoFriendly = () => {
  return (
    <div
      className='flex flex-col justify-center h-screen bg-cover bg-center w-full'
      style={{ backgroundImage: `url(/images/eco-friendly-bg.png)` }}
    >
      <div className='container mx-auto flex flex-col space-y-10'>
        <div className='w-[30%] space-y-2'>
          <h2 className='text-4xl font-bold'>Eco Friendly</h2>
          <h3 className='text-lg'>We are Green</h3>
          <p className='text-secondary'>
            {`Staking, as a consensus mechanism in blockchain technology is fully
          eco-friendly than other methods such as proof-of-work (PoW).
          Validators "stake" or lock up a certain amount of the crypto as
          collateral, rather than using computational power. This reduces the
          energy consumption needed to validate transactions and add new blocks
          to the blockchain. It also creates an economic incentive for
          validators to act honestly and disincentives malicious behavior, which
          further increases the security of the network`}
          </p>
        </div>
        <div>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};
