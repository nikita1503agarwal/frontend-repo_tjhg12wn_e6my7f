import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const Step = ({ number, title, desc }) => (
  <div className="flex gap-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">{number}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  </div>
);

export default function ProcessPortfolio() {
  const items = [1, 2, 3];
  return (
    <section className="bg-slate-50 py-20" id="process">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing & Process</h2>
            <p className="mt-2 text-slate-600">We customize each gym website based on your needs — from ₹4,999 onward.</p>
            <div className="mt-8 space-y-6">
              <Step number={1} title="Share your gym details" desc="Tell us your brand, services, photos, and target audience." />
              <Step number={2} title="We design" desc="You review designs and content crafted for conversions and SEO." />
              <Step number={3} title="Go live in 48 hours" desc="Fast launch with hosting, domain, analytics, and on-page SEO." />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Portfolio</h2>
            <p className="mt-2 text-slate-600">Sample gym website layouts we can tailor to your brand.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((i) => (
                <motion.a
                  key={i}
                  href="#contact"
                  className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  initial={{ scale: 0.98, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={`https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop`}
                    alt="Gym website sample"
                    className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <Check className="h-4 w-4" />
                      <span className="text-sm">Responsive • SEO • Leads</span>
                    </div>
                    <h4 className="mt-2 font-semibold">Fitness Pro {i}</h4>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
