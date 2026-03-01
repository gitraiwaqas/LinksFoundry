import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiCheck, HiShieldCheck, HiOutlineLightBulb, HiOutlineSearch, HiOutlineDocumentText, HiOutlineChatAlt2, HiMinus, HiPlus } from "react-icons/hi";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/ui/Button";
import { cn } from "../lib/utils";
import { services } from "../data/content";
import { useState } from "react";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 bg-foundry-light">
      {/* 1. Header Section */}
      <section className="py-20 animate-fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="The Foundry"
            title="Strategic Link Building Services in the US and UK"
            description="High-quality backlinks are one of the top ranking factors for Google and give it confidence to rank a website higher. This is the reason 92.3% of pages ranking higher on Google have at least 1 backlink from a relevant and trustworthy site. Do you want to boost your website’s rankings with topical and valid links?"
          />
          <div className="flex justify-center mt-8">
            <Button size="lg">Ready to outrank your competitors? Get Your Free Quote Instantly.</Button>
          </div>
        </div>
      </section>

      {/* 2. Intro / Advantage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-outfit font-black text-foundry-navy mb-6">Personalized Link Building for Search Engines & AI Platforms</h2>
              <div className="text-lg text-foundry-slate space-y-6 text-left md:text-center leading-relaxed font-inter">
                <p>Consider our personalized link-building services in the US and the UK that include digital PR, brand mentions, editorial backlinks, and niche guest posts that help your online business gain visibility across search engines, LLMs, and AI platforms such as AI Overviews, chatbot recommendations, and Perplexity AI.</p>
                <p>LinksFoundry is here for you with our experienced link-building experts to build high-quality white hat links on your site, which help you boost your traffic, ROI, sales, and stay stable through Google updates. Our team has 11 years of experience in building up to 25,000+ high authority backlinks for various local and international brands.</p>
                <p className="font-bold text-foundry-navy">Contact us today and let us offer you expert link-building services in the UK & US, which rank your online business at the top of the SERP.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Services List Section */}
      <section className="py-20 bg-foundry-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="High-Impact Link Building Services That Give You Organic Rankings"
            description="LinksFoundry offers you comprehensive backlink building services, which help you dominate the SERP, outranking all of your competitors."
          />
          
          <div className="flex flex-col gap-24 mt-16">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "flex flex-col lg:flex-row gap-12 items-center",
                  i % 2 !== 0 && "lg:flex-row-reverse"
                )}
              >
                {/* Visual / Icon Side */}
                <Link to={`/services/${service.slug}`} className="flex-1 w-full bg-white rounded-[3rem] aspect-square lg:aspect-video flex items-center justify-center border border-slate-100 shadow-xl shadow-foundry-navy/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-solar-gold/5 group-hover:bg-solar-gold/10 transition-colors" />
                  <div className="w-24 h-24 bg-foundry-navy text-solar-gold rounded-full flex items-center justify-center text-5xl font-outfit font-black z-10 group-hover:scale-110 transition-transform">
                    {/* Render icon if it exists, otherwise number */}
                    {service.icon ? <service.icon /> : i + 1}
                  </div>
                </Link>

                {/* Content Side */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-outfit font-black text-foundry-navy mb-6">{service.title}</h3>
                  <p className="text-lg text-foundry-slate font-inter mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Reuse Benefits from content.js which I updated previously */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.benefits.map((benefit, j) => (
                      <div key={j} className="flex gap-2 items-center">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                          <HiCheck size={12} />
                        </div>
                        <span className="text-sm font-medium text-foundry-navy">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="outline">Learn More</Button>
                    </Link>
                    <Button>Get Started</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="py-20 bg-foundry-navy text-white">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
               light
               title="What You Actually Gain from Our White-Hat Link Building"
               description="Our SEO link-building services provide these benefits."
            />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
               {[
                  { title: "Stronger Domain Authority", desc: "Our result-driven backlinks from highly authoritative and relevant sites increase your DR, boosting the authority and rankings of your site." },
                  { title: "Improved Brand Trust", desc: "Mentions on reputable sites build instant credibility, increase user and search engine confidence, position your brand as legitimate, and reduce visitor risk." },
                  { title: "High-Intent Referral Traffic", desc: "Links from relevant niche sites send visitors already interested in your offer, improving engagement, conversions, and adding real value beyond SEO." },
                  { title: "Positive Search Engine Signals", desc: "Natural links tell search engines your site is trustworthy and relevant. They align perfectly with how algorithms work, keep rankings steady for the long run, and help you avoid risky quick fixes." },
                  { title: "Accelerated SEO Growth", desc: "Links make other SEO strategies, like on-page SEO, work faster, pushing both new and old pages to rank higher and building sustainable momentum for your online business." }
               ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                     <div className="w-12 h-12 bg-solar-gold/20 rounded-full flex items-center justify-center shrink-0 text-solar-gold">
                        <HiCheck className="text-2xl" />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold font-outfit mb-2 text-solar-gold">{item.title}</h4>
                        <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4.5 Quality Assurance Section */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
               subtitle="Quality Control"
               title="How We Qualify & Protect Link Quality"
               description="We focus on the quality of the backlinks, not the quantity. This is how we ensure the quality of our backlinks for the long-term growth of your online business."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
               {[
                  { 
                    title: "Relevance-First Selection", 
                    desc: "We filter links by topic match above all. Our experts ensure that they give a link to your website only from highly relevant sources, increasing topical authority in Google." 
                  },
                  { 
                    title: "Authority & Trust Evaluation", 
                    desc: "We measure authority with Ahrefs Domain Rating (DR). We select sites that deliver meaningful ranking value and pass stronger equity to your pages." 
                  },
                  { 
                    title: "Organic Traffic Verification", 
                    desc: "We check SEMrush data and require at least 1,000 monthly organic visits. This ensures links come from active, ranking domains that send genuine referral traffic." 
                  },
                  { 
                    title: "Algorithm Safety Screening", 
                    desc: "We review domains for past traffic drops or penalty signals using Ahrefs and SEMrush. We reject any site with red flags to protect your site's growth." 
                  }
               ].map((item, i) => (
                  <div key={i} className="bg-foundry-light p-8 rounded-[2rem] border border-slate-100 hover:border-solar-gold transition-all group">
                     <div className="w-12 h-12 bg-foundry-navy text-solar-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <HiShieldCheck size={24} />
                     </div>
                     <h4 className="text-xl font-bold font-outfit text-foundry-navy mb-4 leading-tight">{item.title}</h4>
                     <p className="text-foundry-slate text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Industries Section */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
               title="Tailored Link Building for Agencies, SaaS, eCommerce & More"
               description="LinksFoundry offers customized SEO white hat link-building services for digital marketing agencies, SaaS, and e-commerce."
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
               {[
                  { title: "Agency White-Label Links", desc: "Agency white-label links come fully branded as your own with no trace of our involvement. You deliver premium results to your clients while our link-building experts handle the heavy lifting behind the scenes. This lets your agency scale fast without growing in-house teams and keeps quality high across multiple accounts." },
                  { title: "Google-Safe Authority Links", desc: "Google-safe authority links use only strict white-hat methods that stay compliant with search engine rules. Everything comes from real outreach and quality content, so the links hold strong through algorithm updates. This approach focuses on long-term stability and safe ranking growth without risking penalties." },
                  { title: "In-Content Editorial Links", desc: "In-content editorial links sit naturally inside relevant articles on pages that actually get traffic. Placement stays contextual and editorial with strong topical alignment to give maximum SEO value per link. These feel organic and powerful, driving real authority instead of looking forced or spammy." },
                  { title: "Premium Guest Publishing", desc: "Our guest publishing finds authoritative industry sites, blogs, and trusted news platforms. We write content to editorial standards and make sure backlinks integrate naturally within the article. The priority stays on placement quality over quantity, building genuine credibility and lasting ranking power." },
                  { title: "Community-Driven Backlinks", desc: "We also offer community-driven backlinks from authentic participation in relevant forums, Q & A sites, and niche discussions. Our team focuses on real conversations in your industry, so links add diversity and natural brand presence." },
                  { title: "Press Coverage Links", desc: "Press coverage links appear in recognized media outlets through reputable press networks for high-authority exposure. We secure backlinks that support both SEO and branding, especially well for product launches, announcements, or big updates. They bring strong domain trust and visibility that competitors notice." },
                  { title: "SaaS-Specific Link Building", desc: "In our SaaS link-building services, we customize strategies to software companies based on your product and ideal customer profile. Our link-building experts focus on building deep topical authority to compete in tough SaaS SERPs." }
               ].map((item, i) => (
                  <div key={i} className="p-8 bg-foundry-light rounded-3xl border border-slate-100 hover:border-solar-gold/30 transition-colors">
                     <h4 className="text-xl font-black font-outfit text-foundry-navy mb-4">{item.title}</h4>
                     <p className="text-foundry-slate text-sm leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Trust Section */}
      <section className="py-20 bg-foundry-light">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
               title="Why Top Brands Trust LinksFoundry Worldwide"
               description="LinksFoundry is the trusted link-building services agency with 98% retention rate, years of experience, and expertise in the most effective white hat link-building services and manual link-building services."
            />
            <div className="grid md:grid-cols-3 gap-6 mt-12">
               {[
                  { title: "Reliable & Predictable Execution", desc: "We set clear timelines, make realistic promises, and hit deadlines consistently so you can plan confidently around our consistent delivery for long-term campaigns." },
                  { title: "Clear & Proactive Communication", desc: "You get automatic updates, regular check-ins, direct, honest answers, and full transparency so you stay informed." },
                  { title: "Results-Driven Link Building", desc: "Every strategy targets real, measurable outcomes like better rankings, traffic, or revenue, avoiding low-value links and focusing only on links that support your actual business goals." }
               ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                     <div className="w-12 h-12 bg-foundry-navy text-solar-gold rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{i+1}</div>
                     <h4 className="font-bold font-outfit text-foundry-navy mb-2">{item.title}</h4>
                     <p className="text-xs text-foundry-slate leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Process Section */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6 text-center">
            <SectionHeading 
               title="Our Simple, Transparent 3-Step Link Building Process"
               description="LinksFoundry has a simple link-building process for you, consisting of only 3 steps."
            />
            <div className="grid md:grid-cols-3 gap-12 mt-16 max-w-6xl mx-auto">
               {[
                  { title: "Campaign Research & Outreach Planning", desc: "We start right after order confirmation. Our experts review your target URL, analyze the page, and understand the intent and relevance before outreach begins. Then we shortlist websites that naturally fit your backlinks needs and match your niche. We stay focused on quality and relevance, not just volume." },
                  { title: "Content Development & Link Integration", desc: "We write content specifically for the selected website, matching its audience and editorial tone. Our team blends your anchor text naturally, places the link in the right context, and uses relevant keywords thoughtfully for stronger alignment. Everything reads smoothly and editorially, never promotional." },
                  { title: "Link Placement & Reporting", desc: "We secure the link on the approved website and complete the placement. Then, we update your dashboard instantly with full details, so you can track delivered links against your order anytime. Our reporting keeps everything transparent, from progress updates to final results." }
               ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                     <div className="w-20 h-20 bg-solar-gold text-white rounded-full flex items-center justify-center text-3xl font-black mb-6 shadow-xl shadow-solar-gold/20">
                        {i + 1}
                     </div>
                     <h3 className="text-xl font-black font-outfit text-foundry-navy mb-4">{step.title}</h3>
                     <p className="text-foundry-slate leading-relaxed text-sm">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. Results / Case Studies Section */}
      <section className="py-20 bg-foundry-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
             title="Real Results: Brands That Skyrocketed After Working With Us"
             description="Our link-building agency has helped several brands become an authority in their niche, increase their traffic, and improve their domain ratings organically."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { client: "Global Fintech Brand (Finance)", text: "This fintech brand operates in a competitive finance space and saw traffic grow over 420%. Domain Rating climbed from 32 to 64, thanks to LinksFoundry’s authority-focused link building. The results show how strong trust-building links create real scale and dominance in regulated niches." },
              { client: "E-commerce Powerhouse (Retail)", text: "A large retail and e-commerce brand generated more than 180% revenue growth after LinksFoundry delivered over 450+ relevant links. The focus stayed on volume paired with strong relevance. This case shows how link building boosts commercial results and sales in retail." },
              { client: "SaaS Innovation Lab (Software)", text: "This SaaS company gained over 12k ranking keywords and achieved 8.4× ROAS through LinksFoundry’s performance-tied link building. The strategy aligned SEO with marketing goals for measurable returns. It shows how targeted links drive long-term growth and ROI in the software space." }
            ].map((cs, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100">
                <h4 className="text-lg font-black font-outfit text-foundry-navy mb-4 text-solar-gold">{cs.client}</h4>
                <p className="text-sm text-foundry-slate leading-relaxed">{cs.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-32 bg-foundry-navy text-white text-center">
         <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-outfit font-black mb-8 leading-tight">Rank Your Website Today With Expert Link Building Services In The US and UK</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">Do you want to rank your site, maintain its stable rankings, and get consistent traffic? Get our personalized link-building services that include digital PR, brand mentions, editorial backlinks, and niche guest posts. With our expert backlinks building services in the UK & US, we help your business become organically visible on Google and in AI chatbot recommendations.</p>
            <Link to="/contact">
               <Button size="lg" className="text-xl px-12 py-6">Get Started Today</Button>
            </Link>
         </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <SectionHeading title="FAQS" center />
          <div className="space-y-4 mt-8">
            {[
              { q: "What are link-building services?", a: "Link building services are professional help to earn high-quality backlinks from relevant sites. Agencies handle research outreach, content creation and placement so your site gains authoritative traffic and better search positions." },
              { q: "What link-building strategies do you use?", a: "We use white-hat backlink building strategies like editorial links, digital PR niche guest posts, link insertions, broken link recovery and publisher relationships. Everything focuses on relevance, quality and natural placement for long-term results." },
              { q: "Why do I need a link-building agency?", a: "Doing link building yourself takes huge time, effort and expertise. An agency like ours delivers consistent, high-quality links faster, safer, and at scale while you focus on your business." }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left bg-foundry-light hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold font-outfit text-foundry-navy">{faq.q}</span>
                  {openFaq === i ? <HiMinus className="text-solar-gold" /> : <HiPlus className="text-foundry-slate" />}
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openFaq === i ? "grid-rows-[1fr] opacity-100 p-6 pt-0 bg-foundry-light" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-foundry-slate text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References removed as they are usually not part of the visible UI unless requested as a footer/notes section. User asked for content integration, references lists are typically for writer attribution. */}
    </div>
  );
}
