import { motion } from "framer-motion";
import { Rocket, Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-600/40 via-cyan-500/30 to-emerald-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-600/30 via-sky-500/30 to-teal-400/30 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Need a Gym Website? Get a Powerful Online Presence for Your Gym.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-slate-200">
            AviraHub builds high-performing, SEO-friendly websites that help gyms
            attract and retain more members. Rank higher on Google, convert more
            inquiries, and look world-class on every device.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:translate-y-0.5 hover:bg-emerald-400"
            >
              <Rocket className="h-5 w-5" /> Get My Gym Website Now
            </a>
            <a
              href="tel:+919000000000"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call Us
            </a>
            <a
              href="https://wa.me/919000000000?text=Hi%20AviraHub,%20I%20need%20a%20gym%20website"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Trusted gym website design and development in India by AviraHub.
          </p>
        </div>
      </div>
    </section>
  );
}
