
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';
import TrustSection from '../components/TrustSection';
import MindMirronTopics from '../components/MindMirronTopics';
import FaqSection from '../components/FaqSection';
import bannerImage from '../assets/mind-mirror-banner.jpg'
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <TrustSection />
      <MindMirronTopics />
      <FaqSection />

      <div className="">
        <img
          src={bannerImage} 
          alt="Mind Mirror Banner"
          className="rounded shadow-lg  object-cover"
        />
      </div>

      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default Home;
