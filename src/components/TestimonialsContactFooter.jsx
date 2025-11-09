import { motion } from "framer-motion";
import { PhoneCall, MessageCircle } from "lucide-react";

const Testimonial = ({ name, role, quote, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    <p className="text-slate-700">“{quote}”</p>
    <div className="mt-4 text-sm text-slate-500">— {name}, {role}</div>
  </motion.div>
);

export default function TestimonialsContactFooter() {
  return (
    <>
      <section className="bg-white py-20" id="testimonials">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Gym Owners Say</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Testimonial name="Rahul Verma" role="Gym Owner, Pune" quote="AviraHub delivered our site in 48 hours—now we get daily leads from Google and WhatsApp." />
            <Testimonial name="Sneha Kapoor" role="Fitness Studio, Delhi" quote="Clean design, fast loading, and the blog brings organic traffic every week." delay={0.1} />
            <Testimonial name="Arjun Singh" role="CrossFit Box, Bengaluru" quote="Seamless process and excellent SEO setup. Highly recommended!" delay={0.2} />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20" id="contact">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact AviraHub</h2>
          <p className="mt-2 text-slate-600">Tell us about your gym and we’ll craft a site that wins members.</p>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Name</label>
                  <input required type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none" placeholder="Your full name" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Gym Name</label>
                  <input required type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none" placeholder="Your gym or studio" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone</label>
                  <input required type="tel" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none" placeholder="+91" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <input required type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none" placeholder="you@example.com" />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1 block text-sm font-medium">Message</label>
                <textarea rows={4} className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none" placeholder="Tell us about your website needs" />
              </div>
              <button type="submit" className="mt-6 w-full rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white shadow-emerald-500/20 transition hover:bg-emerald-400">Send Request</button>
            </form>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <a href="tel:+919000000000" className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 hover:border-emerald-400">
                  <PhoneCall className="h-5 w-5 text-emerald-600" />
                  <span>Call: +91 90000 00000</span>
                </a>
                <a href="https://wa.me/919000000000?text=Hi%20AviraHub,%20I%20need%20a%20gym%20website" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 hover:border-emerald-400">
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
                <div className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-700">
                  We build SEO-friendly, fast websites for gyms across India. Get your site live in as little as 48 hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} AviraHub. All rights reserved.</p>
          <nav className="flex gap-6 text-sm text-slate-600">
            <a href="#benefits" className="hover:text-emerald-600">Why Website</a>
            <a href="#process" className="hover:text-emerald-600">Process</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
