import { Routes, Route } from "react-router-dom";
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
// About page component
function About() {
  return (
    <div className="container py-12 text-center">
      <h1 className="text-3xl font-bold">About GLA University</h1>
      <p className="mt-4 text-muted-foreground">
        Learn more about our institution and its history.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
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
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
