import { Routes, Route } from "react-router-dom";
import { SiteHeader } from "@/header/site-header";
import SiteFooter from "@/footer/site-footer";
import Contact from "@/Pages/Contact/Contact";
import LandingPage from "@/Pages/LandingPage/LandingPage";
import BTechCSE from "@/Pages/Programs/BTechCSE";
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
      {/* <SiteHeader /> */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/programs/btech" element={<BTechCSE />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
