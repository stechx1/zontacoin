import React, { useState } from 'react';
import { Button } from '../../components';
import { MetaMask } from '../../functions/MetaMask';

const IcoPage = () => {
  const [amount, setAmount] = useState(0);
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center my-20 space-y-8'>
        <h2 className='text-3xl font-bold'>Buy ZontaCoin</h2>
        <div className='bg-gray-700 w-1/2 p-8 rounded'>
          <p className='mb-8'>1 Zonta Coin = 1.25 USDT</p>
          <label
            class='block uppercase tracking-wide text-white text-xs font-bold mb-2'
            for='zonta'
          ></label>
          <input
            class='appearance-none block w-full bg-gray-800 text-gray-300  rounded py-3 px-4 mb-3 leading-tight focus:outline-none'
            id='zonta'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            name='zonta'
            type='number'
            placeholder='5 ZontaCoins'
          />
          <MetaMask amount={amount * 1.25}>Buy Now</MetaMask>
        </div>
      </div>
    </div>
  );
};

export default IcoPage;
