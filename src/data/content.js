import { HiLightningBolt, HiShieldCheck, HiTrendingUp, HiGlobeAlt } from "react-icons/hi";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
];

export const services = [
  {
    slug: "editorial-link-building",
    title: "Editorial Link Building",
    description: "Secure high-authority backlinks within existing editorial content on world-class publications like Forbes, TechCrunch, and Business Insider.",
    shortDescription: "High-authority mentions within niche-relevant editorial content on world-class publications.",
    icon: HiLightningBolt,
    benefits: ["Niche-relevant placements", "Contextual anchor text", "High domain authority (DA 50+)", "Permanent placements"],
    process: ["Topic Research", "Vetting Sites", "Outreach", "Live Link"],
    price: "From $350 per link",
    fullContent: `
      Our Editorial Link Building service is the gold standard of SEO. We don't just find sites; we find the right conversations already happening online and place your brand at the center of them.
      
      ### Why Editorial Matters
      Editorial links are natural, earned, and carry the most weight in search algorithms. They represent a vote of confidence from a reputable editor, passing significant authority and trust to your domain.
      
      ### Our Process
      1. **Strategic Vetting**: We analyze thousands of publications to ensure they have real traffic and editorial integrity.
      2. **Content Resonance**: We find articles that are topically aligned with your business.
      3. **Natural Integration**: Your link is added as a helpful resource within the text, not a forced mention.
    `
  },
  {
    slug: "digital-pr-brand-mentions",
    title: "Digital PR & Brand Mentions",
    description: "Creative storytelling and data-driven campaigns designed to earn natural brand mentions and high-value links from major media outlets.",
    shortDescription: "Creative storytelling that earns natural links from major news outlets and top blogs.",
    icon: HiGlobeAlt,
    benefits: ["Viral potential", "Brand authority", "News-site placements", "Natural link profile"],
    process: ["Data Analysis", "Asset Creation", "Journalist Pitching", "Syndication"],
    price: "Custom Pricing",
    fullContent: `
      Digital PR is the convergence of traditional PR, SEO, and content marketing. We create "linkable assets"—data studies, expert guides, or interactive tools—that journalists actually want to cite.
      
      ### The Impact of PR Links
      A single link from a Tier-1 news site can do more for your rankings and brand reputation than hundreds of low-tier directory links.
      
      ### How We Scale PR
      We use sophisticated outreach tools to pitch the right journalists at the right time. Our campaigns are designed to be newsworthy, educational, or highly entertaining.
    `
  },
  {
    slug: "niche-guest-posts",
    title: "Niche Guest Posts",
    description: "Strategic outreach to bloggers and site owners in your specific niche to secure high-quality guest post placements with naturally integrated links.",
    shortDescription: "Highly targeted outreach to blogs in your specific industry for maximum relevance.",
    icon: HiShieldCheck,
    benefits: ["Highly targeted", "Full content control", "Audience referral traffic", "Strong relevance"],
    process: ["Niche Filtering", "Content Writing", "Quality Control", "Placement"],
    price: "From $150 per post",
    fullContent: `
      Guest posting remains one of the most effective ways to build both authority and referral traffic. We handle everything from the initial pitch to the final content creation.
      
      ### Our Quality Standard
      We only work with blogs that have a real audience and consistent traffic. We never use PBNs or link farms.
      
      ### Content Excellence
      Our in-house writers produce content that provides genuine value to the host site's readers, ensuring your link is viewed as a natural recommendation.
    `
  },
  {
    slug: "link-insertions",
    title: "Link Insertions",
    description: "We identify aged, authoritative pages that already have traffic and rankings, then naturally insert your link into the existing content.",
    shortDescription: "Strategic placement of your links into existing, high-traffic articles that already rank.",
    icon: HiTrendingUp,
    benefits: ["Instant authority", "Existing traffic juice", "Faster indexing", "Cost-effective"],
    process: ["Resource Audit", "Competitor Analysis", "Pitching", "Update"],
    price: "From $120 per insertion",
    fullContent: `
      Niche edits or link insertions leverage the existing power of aged content. By adding your link to a page that already ranks for your target keywords, you get an immediate boost.
      
      ### The Power of Age
      New pages take time to build authority. Link insertions bypass this "sandbox" period by placing you on established pages with proven SEO value.
      
      ### Ethical Outreach
      We work directly with site owners to update their existing content with fresh, relevant links that improve the value of the page for their readers.
    `
  }
];

export const blogPosts = [
  {
    slug: "future-of-link-building-2026",
    title: "The Future of Link Building in 2026: AI & Authority",
    excerpt: "How generative AI is changing the landscape of outreach and why quality still reigns supreme.",
    date: "Jan 12, 2026",
    category: "STRATEGY",
    author: "James Forge",
    content: `
      As we move further into 2026, the intersection of AI and SEO has become the primary battleground for search dominance. 
      
      ### The Rise of AI-Assisted Outreach
      While AI can draft pitches, the "human in the loop" is more important than ever. Editors are being flooded with generic, AI-generated requests. To stand out, building genuine relationships remains the only sustainable strategy.
      
      ### Authority Over Quantity
      Google's algorithms have become incredibly adept at identifying "empty" links. A hundred automated placements can't compete with a single, high-authority editorial link from a publication with real topical trust.
    `
  },
  {
    slug: "why-dr-isnt-the-only-metric",
    title: "Why DR Isn't the Only Metric You Should Track",
    excerpt: "Diving deep into relevance, traffic, and intent-matched backlink profiles.",
    date: "Jan 05, 2026",
    category: "ANALYSIS",
    author: "Sarah Link",
    content: `
      Domain Rating (DR) is a useful benchmark, but relying on it exclusively is a dangerous path for modern SEOs.
      
      ### The Relevance Multiplier
      A link from a DR 40 site that is perfectly aligned with your niche can often pass more "ranking juice" than a DR 70 general news site. Why? Because search engines assess the context of the link source.
      
      ### Traffic Tells the Truth
      If a site has a high DR but zero organic traffic, it's a major red flag. Real sites have real visitors. Always verify the traffic trends before committing to a link.
    `
  },
  {
    slug: "scaling-uk-brand-to-us",
    title: "Case Study: Scaling a UK Brand into the US Market",
    excerpt: "The exact framework we used to dominate search results across two continents.",
    date: "Dec 28, 2025",
    category: "CASE STUDY",
    author: "Mark Foundry",
    content: `
      Scaling across the Atlantic requires more than just a different domain extension; it requires a specialized link building strategy.
      
      ### Localized Outreach
      We found that US journalists respond differently to pitches than their UK counterparts. By localizing our "linkable assets" for US audiences, we saw a 40% increase in placement rates.
      
      ### Bridge Building
      The key to this success was building authority on both sides. Links from reputable UK publications provided the foundation, while US-centric PR campaigns gave us the necessary relevance in the American market.
    `
  },
  {
    slug: "understanding-digital-pr",
    title: "Understanding Digital PR for B2B SaaS",
    excerpt: "Why brand mentions on high-tier news sites are the ultimate authority signal.",
    date: "Dec 15, 2025",
    category: "DIGITAL PR",
    author: "Elena PR",
    content: "Full content for Digital PR coming soon..."
  },
  {
    slug: "link-building-mistakes-2026",
    title: "Common Link Building Mistakes to Avoid in 2026",
    excerpt: "From irrelevant anchors to over-optimized footprints, here's what to avoid.",
    date: "Dec 02, 2025",
    category: "GUIDES",
    author: "James Forge",
    content: "Full content for Mistakes coming soon..."
  },
  {
    slug: "topical-relevance-role",
    title: "The Role of Topical Relevance in Modern SEO",
    excerpt: "Why a link from a small niche-related blog can beat a massive general news site.",
    date: "Nov 20, 2025",
    category: "STRATEGY",
    author: "Sarah Link",
    content: "Full content for Topical Relevance coming soon..."
  }
];

export const caseStudies = [
  {
    client: "Project Neon (SaaS)",
    industry: "SaaS",
    results: [
      { label: "Organic Traffic", value: "+340%" },
      { label: "DR Improvement", value: "20 to 55" }
    ]
  },
  {
    client: "Project Titan (E-comm)",
    industry: "E-commerce",
    results: [
      { label: "Monthly Revenue", value: "+210%" },
      { label: "Top 3 Keywords", value: "450+" }
    ]
  },
  {
    client: "Local Service Pro",
    industry: "Local Business",
    results: [
      { label: "Map Pack Ranking", value: "#1 Spot" },
      { label: "Convertion Rate", value: "+85%" }
    ]
  },
  {
    client: "Enterprise Flow",
    industry: "B2B",
    results: [
      { label: "Lead Gen", value: "+150%" },
      { label: "Authority Score", value: "high" }
    ]
  },
  {
    client: "Cloud Scale Inc",
    industry: "SaaS",
    results: [
      { label: "Sign-ups", value: "+2,400" },
      { label: "Link Juice", value: "Premium" }
    ]
  },
  {
    client: "Retail Rocket",
    industry: "E-commerce",
    results: [
      { label: "Holiday Sales", value: "$4.5M" },
      { label: "Referring Domains", value: "800+" }
    ]
  }
];
