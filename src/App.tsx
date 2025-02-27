import { Achievements } from './components/Achievements';
import { Calender } from './components/Calender';
import { Clients } from './components/Clients';
import { Community } from './components/Community';
import { CommunityUpdates } from './components/CommunityUpdates';
import { Customers } from './components/Customers';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PreFooter } from './components/PreFooter';
import { Unlock } from './components/Unlock';

export function App() {
  return (
    <>
      <div className="w-full h-screen font-Inter">
        <Header />
        <HeroSection />
        <Clients />
        <Community />
        <Unlock />
        <Achievements />
        <Calender />
        <Customers />
        <CommunityUpdates />
        <PreFooter />
        <Footer />
      </div>
    </>
  );
}
