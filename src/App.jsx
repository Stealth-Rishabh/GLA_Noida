import { Routes, Route, useLocation } from "react-router-dom";
import { SiteHeader } from "@/header/site-header";
import SiteFooter from "@/footer/site-footer";
import Contact from "@/Pages/Contact/Contact";
import LandingPage from "@/Pages/LandingPage/LandingPage";
import BtechCS from "@/Pages/Programs/BtechCS";
import BCA from "@/Pages/Programs/BCA";
import MBA from "@/Pages/Programs/MBA";
import BBA from "@/Pages/Programs/BBA";
import AIML from "@/Pages/Programs/AIML";
import Stepper from "@/Pages/Programs/Stepper";
import Thankyou from "@/Pages/Thankyou";
import About from "@/Pages/About/About";

export default function App() {
  const location = useLocation();
  const isThankYouPage = location.pathname === '/thankyou';

  const routesWithoutHeaderFooter = ['/thankyou'];
  const isExcludedRoute = routesWithoutHeaderFooter.includes(location.pathname);

  return (
    <>
      {!isExcludedRoute && <SiteHeader />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/programs/btech" element={<BtechCS />} />
          <Route path="/programs/bca" element={<BCA />} />
          <Route path="/programs/mba" element={<MBA />} />
          <Route path="/programs/bba" element={<BBA />} />
          <Route path="/programs/aiml" element={<AIML />} />
          <Route path="/programs/stepper" element={<Stepper />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </main>
      {!isExcludedRoute && <SiteFooter />}
    </>
  );
}
