import { motion } from "framer-motion";
import { HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineCube } from "react-icons/hi";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/ui/Button";

const values = [
  {
    title: "100% Transparency",
    description: "Every link, every placement, and every campaign is fully documented and reported in real-time.",
    icon: HiOutlineCube
  },
  {
    title: "White-Hat Integrity",
    description: "We follow Google's guidelines strictly. No PBNs, no spam, no shortcuts. Just pure authority building.",
    icon: HiOutlineShieldCheck
  },
  {
    title: "Data-Driven ROI",
    description: "We focus on metrics that matter: traffic, rankings, and conversions. Link building with a business mindset.",
    icon: HiOutlineSparkles
  },
  {
    title: "Human Partnerships",
    description: "We value long-term relationships over one-off transactions. Your success is our reputation.",
    icon: HiOutlineUserGroup
  }
];

const team = [
  {
    name: "Waqas Rai",
    role: "Founder & Lead Strategist",
    bio: "Link building veteran with 10+ years of experience helping SaaS and eCommerce brands scale globally.",
    photo: "WR"
  },
  {
    name: "Emma Thorne",
    role: "Head of Digital PR",
    bio: "Former journalist who knows exactly what it takes to get national news outlets talking about your brand.",
    photo: "ET"
  },
  {
    name: "Ahmadi K.",
    role: "Outreach Director",
    bio: "Master of relationship building, maintaining a network of 5,000+ high-tier editorial contacts across US/UK.",
    photo: "AK"
  }
];

export default function AboutPage() {
  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-20 bg-foundry-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="Our Story"
            title="The Team Behind Your SEO Success"
            description="Since 2015, LinksFoundry has been at the forefront of the link building revolution, bridging the gap between Pakistan's talent and the UK/US markets."
          />
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
               <h2 className="text-4xl md:text-5xl font-outfit font-black text-foundry-navy mb-8 leading-tight">
                 We started with a simple belief: <br/> <span className="text-solar-gold">Quality beats quantity. Every time.</span>
               </h2>
               <div className="space-y-6 text-lg text-foundry-slate font-inter leading-relaxed">
                  <p>In a world saturated with spammy outreach and automated link farms, we saw an opportunity to build something different. Something lasting.</p>
                  <p>LinksFoundry was born out of a desire to provide top-tier SEO agencies in London and New York with a fulfillment partner they could actually trust. We spent years building genuine relationships with editors, journalists, and site owners.</p>
                  <p>Today, we're a team of link building specialists, PR experts, and data analysts dedicated to help your brand achieve indestructible organic authority.</p>
               </div>
            </div>
            <div className="flex-1 w-full bg-foundry-navy aspect-4/3 rounded-[3rem] relative overflow-hidden group">
               <div className="absolute inset-0 bg-solar-gold/10 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-9xl font-black opacity-10">2015</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-foundry-navy rounded-t-[5rem]">
         <div className="container mx-auto px-4 md:px-6">
           <SectionHeading 
             light
             subtitle="Our DNA"
             title="The Principles That Guide Us"
             description="We don't just build links; we follow a strict code of ethics to ensure your brand's long-term safety and success."
           />
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-solar-gold text-foundry-navy rounded-2xl flex items-center justify-center mb-6">
                    <v.icon size={28} />
                  </div>
                  <h3 className="text-xl font-outfit font-bold text-white mb-4">{v.title}</h3>
                  <p className="text-slate-400 font-inter text-sm leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              ))}
           </div>
         </div>
      </section>

      {/* Team Profiles */}
      <section className="py-32">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
              subtitle="The Experts"
              title="Meet the Strategists"
              description="Our diverse team brings together creativity, technical SEO knowledge, and old-school relationship building."
            />
            <div className="grid md:grid-cols-3 gap-12">
               {team.map((m, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group"
                 >
                   <div className="aspect-3/4 bg-foundry-light rounded-[2.5rem] mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 bg-[#cbd5e1] group-hover:scale-110 transition-transform duration-700 opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center text-4xl font-outfit font-black text-slate-300">
                        {m.photo}
                      </div>
                   </div>
                   <h3 className="text-2xl font-outfit font-bold text-foundry-navy mb-1">{m.name}</h3>
                   <p className="text-solar-gold font-outfit font-bold text-sm uppercase tracking-widest mb-4">{m.role}</p>
                   <p className="text-foundry-slate font-inter text-sm leading-relaxed">
                     {m.bio}
                   </p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-foundry-light">
         <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-outfit font-bold text-foundry-navy mb-8">Want to work with a partner who cares about your growth?</h2>
            <Button size="lg" variant="primary">Join the Foundry Family</Button>
         </div>
      </section>
    </div>
  );
}
