/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import { AboutSection } from '../../collections';
import { Button } from '../../components';

const AboutPage = () => {
  const router = useRouter();
  const abouts = [
    {
      id: 1,
      heading: 'What is ZontaCoin?',
      para: 'Zonta Coin is a decentralized digital currency that is built on the principles of transparency, security, and fairness.',
    },
    {
      id: 2,
      heading: 'Vision and Mission',
      para: 'Our mission is to provide a user-friendly, secure, and accessible platform for individuals and businesses to transact without worrying about transaction fees or inflation.',
    },
    {
      id: 3,
      heading: 'State of Art Technology',
      para: 'Our platform is designed to offer real-time settlements, which means that your transactions are processed instantly without the need for intermediaries. With our state-of-the-art technology, you can be sure that your transactions are secure, transparent, and processed in a matter of seconds.',
    },
    {
      id: 4,
      heading: 'Our Location & Team',
      para: "At Zonta Coin, we are based in Dallas, USA and we're proud to be part of the vibrant and innovative cryptocurrency community here in the US. Our team is made up of experts in blockchain technology, finance, and security, who are passionate about creating a more equitable and fair financial system.",
    },
  ];
  return (
    <>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <h2 className='text-4xl font-bold mt-14'>About Us</h2>
          <img src='/images/logo.png' alt='logo' width={80} />
        </div>

        <section className='my-[90px]'>
          <div className='flex flex-col space-y-20'>
            {abouts.map((about) => (
              <AboutSection
                key={about.id}
                heading={about.heading}
                para={about.para}
              />
            ))}
          </div>
        </section>
      </div>

      <section className='bg-[#18191D] p-32'>
        <div className='flex flex-col space-y-10 justify-center items-center'>
          <h2 className='text-3xl font-black'>No Transaction Fees</h2>
          <p className='text-center w-[80%]'>
            Our platform is designed to offer real-time settlements, which means
            that your transactions are processed instantly without the need for
            intermediaries. With our state-of-the-art technology, you can be
            sure that your transactions are secure, transparent, and processed
            in a matter of seconds.
          </p>
          <Button onClick={() => router.push('/ico')}>Buy Now</Button>
        </div>
      </section>

      <section>
        <div className='flex items-center'>
          <div className='flex flex-col space-y-8 m-10 ml-24 w-1/2'>
            <h2 className='text-3xl font-bold'>
              Thankyou for considering ZontaCoin
            </h2>
            <p>{`We're committed to providing a platform that is secure, accessible, and easy to use. Whether you're an experienced cryptocurrency trader or new to the world of digital currency, we're confident that our platform has something to offer you.`}</p>
            <p>
              Thank you for considering Zonta Coin as your preferred
              cryptocurrency platform. We look forward to working with you to
              create a more transparent, secure, and equitable financial system.
            </p>
          </div>
          <div>
            <img src='/images/thanks.png' alt='thanks' />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
