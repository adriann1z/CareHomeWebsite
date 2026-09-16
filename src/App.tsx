import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { MobileCallBtn } from './components/MobileCallBtn';
import { RouteAnalytics } from './components/RouteAnalytics';
import { StructuredData } from './components/seo/StructuredData';
import { CookieConsentBanner } from './components/cookies/CookieConsentBanner';
import { CookiePreferencesModal } from './components/cookies/CookiePreferencesModal';
import { ConsentProvider } from './context/ConsentContext';
import { buildLocalBusinessJsonLd } from './lib/structuredData';
import { ROUTES } from './lib/routes';
import Home from './pages/Home';
import About from './pages/About';
import Care from './pages/Care';
import TheHome from './pages/TheHome';
import Funding from './pages/Funding';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ConsentProvider>
        <StructuredData data={buildLocalBusinessJsonLd()} />
        <RouteAnalytics />
        <div className="min-h-screen flex flex-col relative w-full selection:bg-sage-light selection:text-white">
          <Navigation />

          <main className="flex-1 w-full">
            <Routes>
              <Route path={ROUTES.home} element={<Home />} />
              <Route path={ROUTES.about} element={<About />} />
              <Route path={ROUTES.care} element={<Care />} />
              <Route path={ROUTES.theHome} element={<TheHome />} />
              <Route path={ROUTES.funding} element={<Funding />} />
              <Route path={ROUTES.contact} element={<Contact />} />
              <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
              <Route path={ROUTES.cookiePolicy} element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          <MobileCallBtn />
          <CookieConsentBanner />
          <CookiePreferencesModal />
        </div>
      </ConsentProvider>
    </BrowserRouter>
  );
}
