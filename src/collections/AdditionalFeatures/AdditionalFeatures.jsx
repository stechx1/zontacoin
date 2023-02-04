import { AdditionalFeatureCard } from '../../components';

/* eslint-disable @next/next/no-img-element */
export const AdditionalFeatures = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-8'>
      {/* Logo */}
      <div className='flex-col space-y-2 justify-center items-center'>
        <div className='flex space-x-2 justify-center items-center'>
          <img className='h-8' src='/images/logo-inverted.png' alt='logo' />
          <p>Zonta Coin</p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-2'>
          <h2 className='text-3xl font-bold'>Features of Zonta Coin</h2>
          <p className='text-secondary'>
            Decentralised cryptocurrency that is built on the EOS blockchain
          </p>
        </div>
      </div>

      <div className='flex flex-col space-y-16'>
        <AdditionalFeatureCard
          subheading={'Loan Pool'}
          heading='Financial solutions, Personalised for you '
          para={`Zonta provides personal loans to individual borrowers for personal
          use. These loans can be used for a variety of purposes such as
          consolidating debt, paying for home improvements, financing a big
          purchase, or covering unexpected expenses. Zonta evaluates the
          borrower's creditworthiness, income, and debt-to-income ratio to
          determine the loan amount, interest rate, and repayment terms.
          Personal loans can be unsecured or secured, and the repayment period
          can range from a few months to several years. Zonta also provides a
          platform to apply for loan, check status of loan and make repayment.`}
          imgSrc='loan-pool.png'
        />
        <AdditionalFeatureCard
          subheading={'Hedge funds'}
          heading='Never worry about your funds'
          para={`Zonta provides hedge funds acts as the manager of hedge funds, and is responsible for making investment decisions, managing risk, and overseeing the day-to-day operations of the funds. Zonta also provide administrative and compliance services, such as preparing financial statements and reports, and ensuring that the fund is in compliance with relevant regulations. Zonta also provides services such as investment research, portfolio management, and risk management.
          `}
          imgSrc='hedge-funds.png'
        />
      </div>
    </div>
  );
};
