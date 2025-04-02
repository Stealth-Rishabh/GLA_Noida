import { SiteHeader } from "@/header/site-header";
import SiteFooter from "@/footer/site-footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Your page content goes here */}
        <div className="container py-12 text-center">
          <h1 className="text-3xl font-bold">Welcome to GLA University</h1>
          <p className="mt-4 text-muted-foreground">
            This is a demo page showing the header and footer components.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
