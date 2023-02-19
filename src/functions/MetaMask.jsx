import { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { Button } from '../components';

export function MetaMask({ amount, type, children }) {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    async function detectProvider() {
      const detectedProvider = await detectEthereumProvider();
      if (detectedProvider) {
        setProvider(detectedProvider);
      } else {
        console.log('Please install MetaMask to make a payment.');
      }
    }
    detectProvider();
  }, []);

  async function handlePayment() {
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const transaction = {
        to: '0xF78ad46Bb037B104Bc6c8055c042a2cd5f3Bd9Af',
        value: amount
      };
      const result = await provider.request({ method: 'eth_sendTransaction', params: [transaction] });
      console.log('Payment sent: ', result);
    } catch (error) {
      console.log('Payment failed: ', error);
    }
  }

  return (
    <Button type={type} onClick={handlePayment}>{children}</Button>
  );
}
