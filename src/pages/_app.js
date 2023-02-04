import '../../styles/globals.css';
import { Poppins } from '@next/font/google';
import { Navbar } from '../components';
import { Footer } from '../components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300',
  display: 'fallback',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
