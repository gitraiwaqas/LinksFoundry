import { motion } from "framer-motion";
import { HiLightningBolt, HiShieldCheck, HiTrendingUp, HiGlobeAlt, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import SectionHeading from "../components/common/SectionHeading";
import MetricsCounter from "../components/common/MetricsCounter";
import ServiceCard from "../components/common/ServiceCard";
import CaseStudyCard from "../components/common/CaseStudyCard";
import TestimonialCarousel from "../components/common/TestimonialCarousel";
import LogoSlider from "../components/common/LogoSlider";
import BlogCard from "../components/common/BlogCard";

import { services, blogPosts, caseStudies } from "../data/content";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-foundry-light">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-solar-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-foundry-navy/5 px-4 py-2 rounded-full mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-outfit font-bold uppercase tracking-widest text-foundry-navy">Built for UK & US Markets</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-outfit font-black text-foundry-navy leading-[0.9] tracking-tight mb-8"
            >
              Build Authority <br/> <span className="text-solar-gold italic">That Lasts.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-foundry-slate font-inter max-w-2xl mb-12 leading-relaxed"
            >
              Premium white-hat link building for ambitious brands. We don't just build links; we architect the foundation of your digital authority.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto px-10 py-5 text-lg cursor-pointer">
                  Get a Free Strategy Audit
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 py-5 text-lg cursor-pointer">
                  View Our Success Stories
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-foundry-navy py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <MetricsCounter value="1200" suffix="+" label="Campaigns Completed" />
            <MetricsCounter value="25000" suffix="+" label="Premium Links Built" />
            <MetricsCounter value="98" suffix="%" label="Client Retention" />
            <MetricsCounter value="10" suffix="+" label="Years of Excellence" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="Expertise"
            title="Our Link Building Arsenal"
            description="We deploy cross-channel link building strategies that satisfy search engine algorithms and human readers alike."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 font-outfit font-bold text-foundry-navy hover:text-solar-gold transition-colors text-lg">
              Explore All Services <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 bg-foundry-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="Case Studies"
            title="Results That Speak Volumes"
            description="Real growth stories from our clients across diverse industries. We focus on ROI, not just metrics."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={i} {...cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="The Proof"
            title="What Leaders Say"
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* Trust Slider */}
      <LogoSlider />

      {/* Blog Preview */}
      <section className="py-32 bg-foundry-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionHeading 
              align="left"
              subtitle="Knowledge"
              title="Link Building Insights"
              description="Keep up with the latest trends and architectural SEO strategies."
              className="mb-0"
            />
            <Link to="/blog">
              <Button variant="outline">View All Articles</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <BlogCard key={i} {...post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-foundry-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-solar-gold/5 blur-[150px] rounded-full -translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-black text-white mb-8 leading-tight">
              Ready to Build Your <br/> <span className="text-solar-gold">Digital Foundry?</span>
            </h2>
            <p className="text-xl text-slate-300 font-inter mb-12">
              Join 1,200+ brands that have scaled their organic growth with our premium link building strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button size="lg" className="px-12 py-6 text-xl">
                  Schedule Your Free Call
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="dark" size="lg" className="px-12 py-6 text-xl">
                  View Our Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
