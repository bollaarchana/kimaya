import { Suspense } from "react";
import Loader from "./Loader";

import Hero from "./Hero";
import ServicesHome from "./ServicesHome";
import AboutusHome from "./AboutusHome"
import IndustriesHome from "./IndustriesHome";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <ServicesHome />
      <AboutusHome />
      <section id="industries" className="scroll-mt-24">
  <IndustriesHome />
</section>
    </Suspense>
  );
}
