import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import DownloadCTA from './components/Download';
import AppDesignFeatures from './components/DetailedFeatures';
import FAQSection from './components/FaqComponent';

function App() {
  return (
    <div
      className='App  relative overflow-hidden px-5 bg-gray-100
    
    '
    >
      <Navbar />
      <Hero />
      <Features />
      {/* <DownloadCTA /> */}
      <AppDesignFeatures/>
      <FAQSection/>
      <Footer />
    </div>
  );
}

export default App;
