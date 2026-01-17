import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";
import BlogCard from "../components/common/BlogCard";
import Button from "../components/ui/Button";
import { HiSearch, HiOutlineMail } from "react-icons/hi";

import { blogPosts } from "../data/content";

const categories = ["All Posts", "Strategy", "Analysis", "Case Studies", "Digital PR", "Guides"];

export default function BlogPage() {
  return (
    <div className="pt-24 bg-foundry-light min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="Insights"
            title="Link Building Research & Strategy"
            description="Our latest thinking on SEO, authority building, and the future of the search landscape."
          />

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="grow">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, i) => (
                  <BlogCard key={i} {...post} index={i} />
                ))}
              </div>
              
              <div className="mt-16 flex justify-center">
                 <div className="flex gap-2">
                    {[1, 2, 3].map(n => (
                      <button key={n} className={`w-12 h-12 rounded-full font-outfit font-bold flex items-center justify-center border transition-all ${n === 1 ? "bg-foundry-navy text-white border-foundry-navy" : "bg-white text-foundry-navy border-slate-100 hover:border-solar-gold"}`}>
                        {n}
                      </button>
                    ))}
                 </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 space-y-8">
               {/* Search */}
               <div className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm">
                  <h4 className="font-outfit font-bold text-foundry-navy mb-4">Search Articles</h4>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Keywords..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-100 font-inter text-sm focus:ring-2 focus:ring-solar-gold focus:outline-none transition-all"
                    />
                    <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
               </div>

               {/* Categories */}
               <div className="bg-white p-6 rounded-4xl border border-slate-100 shadow-sm">
                  <h4 className="font-outfit font-bold text-foundry-navy mb-4">Categories</h4>
                  <ul className="space-y-2">
                    {categories.map(c => (
                      <li key={c}>
                        <button className="w-full text-left py-2 px-3 rounded-lg font-inter text-sm text-foundry-slate hover:bg-solar-gold/5 hover:text-solar-gold transition-all">
                          {c}
                        </button>
                      </li>
                    ))}
                  </ul>
               </div>

               {/* Newsletter */}
               <div className="bg-foundry-navy p-8 rounded-4xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-solar-gold/10 blur-2xl rounded-full" />
                  <HiOutlineMail className="text-solar-gold mb-4" size={32} />
                  <h4 className="font-outfit font-bold text-lg mb-2">Weekly Insights</h4>
                  <p className="text-slate-400 text-xs font-inter mb-6 leading-relaxed">
                    Join 5,000+ marketers receiving our best link building hacks every Tuesday.
                  </p>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-inter text-sm mb-4 focus:outline-none focus:border-solar-gold transition-all"
                  />
                  <Button variant="primary" size="sm" className="w-full">Subscribe Now</Button>
               </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
