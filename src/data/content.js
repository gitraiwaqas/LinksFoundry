import { HiLightningBolt, HiShieldCheck, HiTrendingUp, HiGlobeAlt, HiUserGroup, HiRefresh, HiPencil, HiSpeakerphone } from "react-icons/hi";

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
    slug: "editorial-links",
    title: "Editorial Link Building",
    description: "We have several high-traffic editorial content pieces that are already indexed, ranking, and carrying authority. We place the link to your site in relevant, high-authority pages, offering immediate SEO value due to the existing page strength and authority. Through our links, you quickly get referral traffic from a relevant audience, increasing DR and your website’s rankings.",
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
    slug: "digital-pr-mentions",
    title: "Digital PR & Brand Mentions",
    description: "LinksFoundry creates a proven Digital PR strategy for your site that aims to target journalists, editors, and media outlets. We create high-quality and relevant content that the media outlets in your niche care about, attracting potential links while driving immediate traffic and increasing DR. Besides authority, Digital PR also helps build a natural link profile through a mix of linked and unlinked brand mentions, increasing visibility across search engines, LLMs, and AI-powered discovery platforms.",
    shortDescription: "Creative storytelling that earns natural links from major news outlets and top blogs.",
    icon: HiGlobeAlt,
    benefits: ["Viral potential", "Brand authority", "News-site placements", "Natural link profile"],
    process: ["Data Analysis", "Asset Creation", "Journalist Pitching", "Syndication"],
    price: "Custom Pricing",
    fullContent: `
      Digital PR is the convergence of traditional PR, SEO, and content marketing. We create \"linkable assets\"—data studies, expert guides, or interactive tools—that journalists actually want to cite.
      
      ### The Impact of PR Links
      A single link from a Tier-1 news site can do more for your rankings and brand reputation than hundreds of low-tier directory links.
      
      ### How We Scale PR
      We use sophisticated outreach tools to pitch the right journalists at the right time. Our campaigns are designed to be newsworthy, educational, or highly entertaining.
    `
  },
  {
    slug: "niche-guest-posts",
    title: "Niche Guest Posts",
    description: "We offer high-quality niche guest posts in the US & UK, creating relevant content and earning high-quality, relevant backlinks from reputable, trusted websites. We primarily focus on getting do-follow links for your site, which support rankings by signalling to Google that your content is valuable and credible enough to rank higher than your competitors.",
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
    title: "Link Insertions (Niche Edits)",
    description: "Our team builds the backlinks for your sites in the existing, aged articles that already have authority traffic and solid rankings. These pages are established so the links work fast without waiting for new content to get indexed or trusted. We handle manual outreach to site owners and editors to place them right where they count.",
    shortDescription: "Strategic placement of your links into existing, high-traffic articles that already rank.",
    icon: HiTrendingUp,
    benefits: ["Instant authority", "Link equity", "Faster indexing", "Cost-effective"],
    process: ["Resource Audit", "Competitor Analysis", "Pitching", "Update"],
    price: "From $120 per insertion",
    fullContent: `
      Niche edits or link insertions leverage the existing power of aged content. By adding your link to a page that already ranks for your target keywords, you get an immediate boost.
      
      ### The Power of Age
      New pages take time to build authority. Link insertions bypass this \"sandbox\" period by placing you on established pages with proven SEO value.
      
      ### Ethical Outreach
      We work directly with site owners to update their existing content with fresh, relevant links that improve the value of the page for their readers.
    `
  },
  {
    slug: "advertising-banners",
    title: "Advertising Banners",
    description: "We create compelling banner ads in the UK & US that fit perfectly with your brand look and feel. The focus stays on clear messaging, strong visuals, and layouts built to drive clicks and conversions. We track clicks, impressions, and how people interact, targeting using real data.",
    shortDescription: "Compelling banner ads in the UK & US built to drive clicks and conversions.",
    icon: HiSpeakerphone,
    benefits: ["Prominent", "Efficient", "Economical", "Fast advertisement"],
    process: ["Campaign Planning", "Creative Design", "Targeted Placement", "Optimization"],
    price: "Custom Pricing",
    fullContent: `
      We track clicks, impressions, and how people interact, targeting using real data. Regular reports show exactly what’s working, so you can clearly see how the banners boost brand visibility and overall campaign results.
      
      ### Comprehensive Management
      We offer a comprehensive placement, management and ongoing optimization to ensure that you’re getting consistent results.
      
      ### Data-Driven Results
      Regular reports show exactly what’s working, so you can clearly see how the banners boost brand visibility and overall campaign results.
    `
  },
  {
    slug: "white-label-solutions",
    title: "White-Label Link Building",
    description: "Our White-label link building services allow agencies to offer full backlink services without doing the work themselves. We handle everything behind the scenes so the agency can present the results as their own. No need to build an in-house team or learn the ropes.",
    shortDescription: "Full-service link building for agencies, delivered under your own brand.",
    icon: HiUserGroup,
    benefits: ["Scaled fulfillment", "Blind reporting", "Discounted rates", "Dedicated manager"],
    process: ["Site Research", "Content Creation", "Outreach", "Placement"],
    price: "Custom Pricing",
    fullContent: `
      We take care of site research, content creation, outreach and actual link placements while matching your exact standards and requirements. This setup frees agencies to focus on strategy, client relationships and growth instead of operational tasks.
      
      ### Scale Your Agency
      It scales smoothly across multiple clients and campaigns, delivers consistent high-quality backlinks and comes with a reliable, fast turnaround.
      
      ### Dedicated Support
      Every white-label partner gets a dedicated account manager to ensure smooth communication and delivery.
    `
  },
  {
    slug: "broken-link-recovery",
    title: "Broken Link Recovery",
    description: "Our broken link building service finds dead or 404 pages that still have links pointing to them and offers your relevant content as the perfect replacement. Our backlink-building experts use this proven method to earn contextual natural backlinks while helping publishers fix their broken pages. It’s a proven, effective strategy refined over the years.",
    shortDescription: "Turn broken links into new opportunities by offering your content as a replacement.",
    icon: HiRefresh,
    benefits: ["Replaces dead links", "Contextual backlinks", "Helps publishers", "Proven strategy"],
    process: ["Broken Link Identification", "Content Creation", "Outreach", "Link Recovery"],
    price: "From $200 per link",
    fullContent: `
      Our broken link building service finds dead or 404 pages that still have links pointing to them and offers your relevant content as the perfect replacement. Our backlink-building experts use this proven method to earn contextual natural backlinks while helping publishers fix their broken pages.
      
      ### A Win-Win Strategy
      Publishers want to fix their broken links to improve user experience. You provide the solution with high-quality content. This mutual benefit leads to high conversion rates.
      
      ### Proven Effectiveness
      This strategy is refined over years of practice, delivering contextual links that look and feel completely natural because they are.
    `
  },
  {
    slug: "editorial-guest-contributions",
    title: "Editorial Guest Contributions",
    description: "Editorial guest contributions place you on top-tier industry sites where editors actually accept your pitches. We create deeply researched and well-written content so the backlinks sit naturally inside the article. The focus stays on quality over quantity, strengthening your authority and rankings in a meaningful way.",
    shortDescription: "Top-tier guest contributions on industry-leading sites.",
    icon: HiPencil,
    benefits: ["Top-tier industry sites", "Deeply researched content", "Quality over quantity", "Strengthens authority"],
    process: ["Pitching Editors", "Research & Writing", "Editorial Review", "Publication"],
    price: "From $400 per post",
    fullContent: `
      Editorial guest contributions place you on top-tier industry sites where editors actually accept your pitches. We create deeply researched and well-written content so the backlinks sit naturally inside the article.
      
      ### Quality Over Quantity
      The focus stays on quality. We don't spam. We write content that editors want to publish and readers want to read.
      
      ### Authority Building
      By contributing to leading industry publications, you not only get a backlink but also build your reputation as a thought leader in your space.
    `
  },
  {
    slug: "link-worthy-content-promotion",
    title: "Link-Worthy Content Promotion",
    description: "Link-worthy content promotion helps you create content on topics that naturally attract backlinks and then pushes them to the right industry audiences. We target aligned websites so links get earned through real value. This combination of strong content and smart promotion turns your articles into strong backlink assets.",
    shortDescription: "Create and promote content that naturally attracts high-quality backlinks.",
    icon: HiSpeakerphone,
    benefits: ["Attracts natural backlinks", "Targeted promotion", "Real value", "Strong backlink assets"],
    process: ["Topic Ideation", "Content Creation", "Promotion Strategy", "Outreach"],
    price: "Custom Pricing",
    fullContent: `
      Link-worthy content promotion helps you create content on topics that naturally attract backlinks and then pushes them to the right industry audiences. We target aligned websites so links get earned through real value.
      
      ### Content That Earns Links
      We analyze what's working in your niche and create assets—guides, data studies, or tools—that other sites naturally want to reference.
      
      ### Smart Promotion
      Creating content is half the battle. We ensure your content reaches the right eyes, turning views into valuable backlinks.
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
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    content: `
      As we move further into 2026, the intersection of AI and SEO has become the primary battleground for search dominance. 
      
      ### The Rise of AI-Assisted Outreach
      While AI can draft pitches, the "human in the loop" is more important than ever. Editors are being flooded with generic, AI-generated requests. To stand out, building genuine relationships remains the only sustainable strategy.
      
      ### Authority Over Quantity
      Google's algorithms have become incredibly adept at identifying "empty" links. A hundred automated placements can't compete with a single, high-authority editorial link from a publication with real topical trust.
    `
  },
  {
    slug: "is-seo-worth-it-2026",
    title: "Is SEO Worth It in 2026?",
    excerpt: "With AI overviews and zero-click searches rising, is search engine optimization still a viable investment?",
    date: "Jan 05, 2026",
    category: "ANALYSIS",
    author: "Sarah Link",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80",
    content: `
      The question on everyone's mind: Is SEO dead? The short answer is no, but it has changed.
      
      ### The Shift to Intent
      Search engines are prioritizing user intent more than ever. It's no longer about keyword stuffing; it's about answering questions comprehensively.
      
      ### The Value of Organic Traffic
      Despite the rise of paid ads and AI snippets, organic search remains the highest-converting channel for most B2B and B2C businesses. Investing in SEO in 2026 is investing in your brand's long-term digital real estate.
    `
  },
  {
    slug: "scaling-uk-brand-to-us",
    title: "Case Study: Scaling a UK Brand into the US Market",
    excerpt: "The exact framework we used to dominate search results across two continents.",
    date: "Dec 28, 2025",
    category: "CASE STUDY",
    author: "Mark Foundry",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    content: `
      Scaling across the Atlantic requires more than just a different domain extension; it requires a specialized link building strategy.
      
      ### Localized Outreach
      We found that US journalists respond differently to pitches than their UK counterparts. By localizing our "linkable assets" for US audiences, we saw a 40% increase in placement rates.
      
      ### Bridge Building
      The key to this success was building authority on both sides. Links from reputable UK publications provided the foundation, while US-centric PR campaigns gave us the necessary relevance in the American market.
    `
  }
];

export const caseStudies = [
  {
    client: "Global Fintech Brand",
    industry: "Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    results: [
      { label: "Traffic Growth", value: "+420%" },
      { label: "DR Improvement", value: "32 to 64" }
    ]
  },
  {
    client: "E-commerce Powerhouse",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80",
    results: [
      { label: "Revenue Growth", value: "+180%" },
      { label: "Links Delivered", value: "450+" }
    ]
  },
  {
    client: "SaaS Innovation Lab",
    industry: "Software",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    results: [
      { label: "Ranking Keywords", value: "12k+" },
      { label: "ROAS", value: "8.4×" }
    ]
  }
];
