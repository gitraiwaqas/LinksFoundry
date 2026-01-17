import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Editorial Backlinks", href: "/services" },
      { name: "Digital PR", href: "/services" },
      { name: "Niche Guest Posts", href: "/services" },
      { name: "Link Insertions", href: "/services" },
      { name: "White-Label", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Ethical Statement", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foundry-navy text-slate-400 py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-solar-gold rounded-lg flex items-center justify-center font-outfit font-extrabold text-foundry-navy text-xl">
                LF
              </div>
              <span className="font-outfit text-2xl font-bold tracking-tight text-white">
                Links<span className="text-solar-gold font-extrabold">Foundry</span>
              </span>
            </Link>
            <p className="max-w-sm mb-8 leading-relaxed">
              Premium, white-hat link building agency helping UK and US brands build authority and drive long-term organic growth since 2015.
            </p>
            <div className="flex gap-4">
              {[FaLinkedin, FaTwitter, FaInstagram, FaFacebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-solar-gold hover:text-foundry-navy hover:border-solar-gold transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-outfit text-white font-bold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="hover:text-solar-gold transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LinksFoundry. All rights reserved. Based in Pakistan, serving the world.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Accepting new campaigns
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
