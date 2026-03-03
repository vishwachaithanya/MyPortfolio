import { Navbar } from "../components/layouts/Navbar";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-foreground selection:text-background">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
