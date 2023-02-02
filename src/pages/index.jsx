import Head from 'next/head';
import Image from 'next/image';
import { HeroSection, OurPartners, ZontaIntro } from '../collections';
import { Navbar } from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>ZontaCoin</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='container mx-auto'>
        <section>
          <HeroSection />
        </section>
        <section>
          <OurPartners className="my-10" />
        </section>
        <section className='my-10'>
          <ZontaIntro />
        </section>
      </main>
    </>
  );
}
