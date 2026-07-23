import { About } from "@/components/About";
import { Categories } from "@/components/Categories";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Instagram } from "@/components/Instagram";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Categories />
      <Gallery />
      <Instagram />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
