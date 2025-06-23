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
import About from "@/Pages/About/About";
import Awards from "@/Pages/About/Awards";
import AdmissionPage from "@/Pages/Admission/AdmissionPage";
import AdvisoryBoard from "@/Pages/About/AdvisoryBoard";
import Placements from "@/Pages/Placements/Placements";
import Blog from "@/Pages/blog/Blog";
import BlogDetails from "@/Pages/blog/BlogDetails";
import { ReactLenis } from "lenis/react";

export default function App() {
  const location = useLocation();

  const routesWithoutHeaderFooter = ["/thankyou"];
  const isExcludedRoute = routesWithoutHeaderFooter.includes(location.pathname);

  return (
    <ReactLenis root>
      {!isExcludedRoute && <SiteHeader />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/awards-accreditations" element={<Awards />} />
          <Route path="/advisory-board" element={<AdvisoryBoard />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/programs/btech" element={<BtechCS />} />
          <Route path="/programs/aiml" element={<AIML />} />
          <Route path="/programs/bca" element={<BCA />} />
          <Route path="/programs/bba" element={<BBA />} />
          <Route path="/programs/mba" element={<MBA />} />
          <Route path="/admissions" element={<AdmissionPage />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
        </Routes>
      </main>
      {!isExcludedRoute && <SiteFooter />}
    </ReactLenis>
  );
}
