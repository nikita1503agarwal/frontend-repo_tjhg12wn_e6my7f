import { motion } from "framer-motion";
import { Globe, CheckCircle2, Zap, MessageSquare, Image, Search } from "lucide-react";

const Card = ({ icon: Icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ y: 24, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    <div className="mb-3 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{desc}</p>
  </motion.div>
);

export default function BenefitsFeatures() {
  return (
    <section className="relative bg-white py-20" id="benefits">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why Every Gym Needs a Website
        </h2>
        <p className="mt-2 text-slate-600">
          Be discoverable, build credibility, and convert visitors into loyal members.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card icon={Globe} title="24/7 Visibility" desc="Show up when people search 'need gym website', 'gym near me', or your brand name—day or night." />
          <Card icon={MessageSquare} title="Online Inquiries" desc="Integrated contact and WhatsApp to capture leads instantly and keep conversations flowing." delay={0.1} />
          <Card icon={CheckCircle2} title="Credibility" desc="A professional website builds trust and sets you apart from local competitors." delay={0.2} />
          <Card icon={Zap} title="Client Engagement" desc="Share schedules, offers, transformations, and classes to keep members engaged." delay={0.3} />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Gym Website Features
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card icon={Globe} title="Responsive Design" desc="Looks stunning on mobile, tablet, and desktop—optimized for conversions." />
            <Card icon={MessageSquare} title="Membership Forms" desc="Lead forms with validation, CRM-friendly data, and instant notifications." delay={0.1} />
            <Card icon={Search} title="SEO Optimization" desc="Clean semantic HTML, meta tags, schema, and blazing performance to rank on Google." delay={0.2} />
            <Card icon={Zap} title="Fast Loading" desc="Vite + Tailwind + optimized media ensures top Core Web Vitals." delay={0.3} />
            <Card icon={MessageSquare} title="WhatsApp Button" desc="One-tap WhatsApp chats to answer questions and increase walk-ins." delay={0.4} />
            <Card icon={Image} title="Gallery & Blog" desc="Highlight transformations, facilities, and guides to attract search traffic." delay={0.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
