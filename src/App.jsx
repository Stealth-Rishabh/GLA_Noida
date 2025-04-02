import { Routes, Route } from "react-router-dom";
import { SiteHeader } from "@/header/site-header";
import SiteFooter from "@/footer/site-footer";
import Contact from "@/Pages/Contact/Contact";

// Home page component
function Home() {
  return (
    <div className="container py-12 text-center">
      <h1 className="text-3xl font-bold">Welcome to GLA University</h1>
      <p className="mt-4 text-muted-foreground">
        This is a demo page showing the header and footer components.
      </p>
    </div>
  );
}

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
