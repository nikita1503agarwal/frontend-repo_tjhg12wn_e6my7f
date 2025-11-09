import { useEffect } from "react";
import Hero from "./components/Hero";
import BenefitsFeatures from "./components/BenefitsFeatures";
import ProcessPortfolio from "./components/ProcessPortfolio";
import TestimonialsContactFooter from "./components/TestimonialsContactFooter";

function App() {
  useEffect(() => {
    document.title = "Need Gym Website | Gym Website Design Service in India – AviraHub";

    const ensureMeta = (attr, content) => {
      let el = document.querySelector(`meta[${attr}]`);
      if (!el) {
        el = document.createElement("meta");
        const [k, v] = attr.split("=");
        el.setAttribute(k, v.replaceAll('"', ''));
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    ensureMeta(
      'name="description"',
      "Looking for a gym website? AviraHub creates powerful, SEO-optimized gym websites in India that bring more clients and growth. Contact us now."
    );
    ensureMeta(
      'name="keywords"',
      "need gym website, gym website design India, gym website builder, fitness website developer, create gym website, AviraHub"
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <BenefitsFeatures />
      <ProcessPortfolio />
      <TestimonialsContactFooter />
    </div>
  );
}

export default App;
