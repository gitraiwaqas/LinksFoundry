import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiChatAlt2, HiBadgeCheck } from "react-icons/hi";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    // Simulate API call
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Strategy request sent! We will contact you within 24 hours.");
    reset();
  };

  return (
    <div className="pt-24 bg-foundry-light min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="Get in Touch"
            title="Let's Build Your Authority"
            description="Ready to dominate search? Fill out the form below and one of our experts will prepare a custom link building audit for your brand."
          />

          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="flex-[1.5] bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-foundry-navy/5 border border-slate-100">
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-outfit font-bold text-foundry-navy ml-1">Full Name</label>
                       <input 
                         {...register("name")}
                         className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.name ? "border-red-500" : "border-slate-100"} focus:border-solar-gold focus:outline-none transition-all font-inter`}
                         placeholder="John Doe"
                       />
                       {errors.name && <p className="text-red-500 text-xs ml-1 font-bold italic">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-outfit font-bold text-foundry-navy ml-1">Work Email</label>
                       <input 
                         {...register("email")}
                         className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.email ? "border-red-500" : "border-slate-100"} focus:border-solar-gold focus:outline-none transition-all font-inter`}
                         placeholder="john@company.com"
                       />
                       {errors.email && <p className="text-red-500 text-xs ml-1 font-bold italic">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-outfit font-bold text-foundry-navy ml-1">Company Name</label>
                       <input 
                         {...register("company")}
                         className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.company ? "border-red-500" : "border-slate-100"} focus:border-solar-gold focus:outline-none transition-all font-inter`}
                         placeholder="Company Inc."
                       />
                       {errors.company && <p className="text-red-500 text-xs ml-1 font-bold italic">{errors.company.message}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-outfit font-bold text-foundry-navy ml-1">Interest</label>
                       <select 
                         {...register("service")}
                         className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.service ? "border-red-500" : "border-slate-100"} focus:border-solar-gold focus:outline-none transition-all font-inter appearance-none`}
                       >
                         <option value="">Select Service</option>
                         <option value="editorial">Editorial Links</option>
                         <option value="pr">Digital PR</option>
                         <option value="guestpost">Guest Posts</option>
                         <option value="white-label">White-Label</option>
                       </select>
                       {errors.service && <p className="text-red-500 text-xs ml-1 font-bold italic">{errors.service.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-outfit font-bold text-foundry-navy ml-1">How can we help?</label>
                    <textarea 
                      {...register("message")}
                      rows={5}
                      className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.message ? "border-red-500" : "border-slate-100"} focus:border-solar-gold focus:outline-none transition-all font-inter resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-500 text-xs ml-1 font-bold italic">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    isLoading={isSubmitting}
                    className="w-full py-6 text-xl rounded-2xl"
                  >
                    Send Strategy Request
                  </Button>
               </form>

               {/* Response Promise */}
               <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-3 text-foundry-slate text-sm font-medium">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <HiBadgeCheck size={20} />
                  </div>
                  <span>We promise to respond to all inquiries within 24 business hours.</span>
               </div>
            </div>

            {/* Info Sidebar */}
            <div className="flex-1 space-y-8">
               <div className="bg-foundry-navy rounded-[3rem] p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-solar-gold/10 blur-[60px] rounded-full" />
                  <h3 className="text-2xl font-outfit font-bold mb-10">Direct Contact</h3>
                  
                  <div className="space-y-8">
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-solar-gold shrink-0">
                           <HiMail size={24} />
                        </div>
                        <div>
                           <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Email Us</div>
                           <div className="font-outfit font-bold text-lg">hello@linksfoundry.com</div>
                        </div>
                     </div>
                     
                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-solar-gold shrink-0">
                           <HiPhone size={24} />
                        </div>
                        <div>
                           <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Call Us</div>
                           <div className="font-outfit font-bold text-lg">+1 (555) 000-LINK</div>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-solar-gold shrink-0">
                           <HiLocationMarker size={24} />
                        </div>
                        <div>
                           <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">HQ Location</div>
                           <div className="font-outfit font-bold text-lg leading-snug">Raiwind Rd, Lahore <br/>Pakistan</div>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-solar-gold shrink-0">
                           <HiClock size={24} />
                        </div>
                        <div>
                           <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Business Hours</div>
                           <div className="font-outfit font-bold text-lg">Mon - Fri: 9AM - 6PM EST</div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Chat Widget Promo */}
               <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-foundry-navy/5">
                  <HiChatAlt2 className="text-solar-gold mb-6" size={40} />
                  <h3 className="text-2xl font-outfit font-bold text-foundry-navy mb-4">Prefer instant chat?</h3>
                  <p className="text-foundry-slate font-inter mb-8">Our support team is live and ready to help you with quick questions about our packages.</p>
                  <Button variant="outline" className="w-full">Open Live Chat</Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 grayscale items-center">
               <div className="text-2xl font-black">STAMPED</div>
               <div className="text-2xl font-black">TRUSTED</div>
               <div className="text-2xl font-black">SECURE</div>
               <div className="text-2xl font-black">256-BIT</div>
            </div>
         </div>
      </section>
    </div>
  );
}
