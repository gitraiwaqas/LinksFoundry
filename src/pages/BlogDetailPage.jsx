import { motion, useScroll } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/content";
import Button from "../components/ui/Button";
import { HiArrowLeft, HiCalendar, HiUser, HiTag } from "react-icons/hi";
import { useEffect } from "react";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate("/404");
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Reading Progress */}
      <motion.div 
        className="fixed top-20 left-0 right-0 h-1 bg-solar-gold origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <article className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Back Button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-foundry-slate hover:text-solar-gold transition-colors mb-12 font-outfit font-bold"
          >
            <HiArrowLeft /> Back to Articles
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 mb-8 text-sm font-inter text-slate-400">
            <div className="flex items-center gap-2">
              <HiCalendar className="text-solar-gold" /> {post.date}
            </div>
            <div className="flex items-center gap-2">
              <HiUser className="text-solar-gold" /> {post.author || "LinksFoundry Team"}
            </div>
            <div className="flex items-center gap-2 uppercase tracking-widest font-black text-[10px] bg-foundry-navy/5 px-3 py-1 rounded-full text-foundry-navy">
              <HiTag className="text-solar-gold" /> {post.category}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-outfit font-black text-foundry-navy mb-12 leading-tight">
            {post.title}
          </h1>

          {/* Hero Image / Placeholder */}
          <div className="aspect-video bg-foundry-light rounded-[3rem] overflow-hidden mb-16 relative border border-slate-100 shadow-2xl">
            <div className="absolute inset-0 bg-[#334155] opacity-10" />
            <div className="absolute inset-0 flex items-center justify-center font-outfit text-foundry-navy opacity-20 text-4xl font-black italic">
              LINKSFOUNDRY INSIGHTS
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none font-inter text-foundry-slate leading-relaxed">
            <div className="whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Share / Footer */}
          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2">
              <h4 className="font-outfit font-bold text-foundry-navy">Found this helpful?</h4>
              <p className="text-sm text-foundry-slate">Share this insight with your network.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">Share on LinkedIn</Button>
              <Button variant="outline" size="sm">Copy Link</Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-24 bg-foundry-light">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-outfit font-black text-foundry-navy mb-12">Continue Reading</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {blogPosts
              .filter(p => p.slug !== slug)
              .slice(0, 3)
              .map((p, i) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-white p-8 rounded-4xl border border-slate-100 hover:shadow-xl transition-all">
                   <div className="text-[10px] font-black uppercase tracking-widest text-solar-gold mb-3">{p.category}</div>
                   <h3 className="text-xl font-outfit font-bold text-foundry-navy group-hover:text-solar-gold transition-colors line-clamp-2">{p.title}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
