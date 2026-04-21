import React from "react";
import ScrollReveal from './scrollreveal';

export default function Footer() {
  return (
    // Reduced padding from pt-32 to pt-20 to make the div smaller
    <footer className="relative bg-[#22073d] pt-20 pb-10 overflow-hidden border-t border-white/10">
      
      {/* AMBIENT GLOWS - Adjusted sizes for the smaller footer */}
      <div className="absolute top-0 right-[-5%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-12">
          
          {/* LEFT: Branding */}
          <div className="space-y-6">
            <ScrollReveal type="jump" delay={0.1}>
              <div className="group cursor-default">
                <h3 className="text-4xl font-black tracking-tighter leading-none text-white">
                  PRE<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400">POC</span>
                </h3>
                <p className="text-[9px] uppercase tracking-[0.4em] text-cyan-400/80 mt-2 font-black">
                  Digital Engineering Labs
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal type="jump" delay={0.2}>
              <p className="text-white/50 text-xs max-w-[280px] leading-relaxed">
                Transforming technical infrastructure into measurable market authority with precision.
              </p>
            </ScrollReveal>
          </div>

          {/* RIGHT: Contact & Map Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-auto">
            
            {/* INQUIRIES */}
            <ScrollReveal type="jump" delay={0.3}>
              <div className="flex flex-col space-y-4">
                <span className="text-[10px] uppercase text-fuchsia-400/60 tracking-widest font-black">Inquiries</span>
                <a 
                  href="mailto:info@prepoc.in" 
                  className="text-xl font-bold text-white transition-colors"
                >
                  INFO@PREPOC.IN
                </a>
                <a href="tel:+910000000000" className="text-xs text-white/40 hover:text-white transition-colors font-mono">
                  +91 1234567890
                </a>
              </div>
            </ScrollReveal>

            {/* LIVE LOCATION BOX */}
            <ScrollReveal type="jump" delay={0.4}>
              <div className="flex flex-col space-y-4">
                <span className="text-[10px] uppercase  tracking-widest font-black">Live Location</span>
                
                {/* MINI MAP TRIGGER */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Pantheerankavu+Calicut+Kerala+India" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative w-full md:w-64 h-40  overflow-hidden flex items-center justify-center  "
                >
                  {/* Visual Map Decor */}
                  <div className="absolute inset-0 opacity-80 grayscale bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i12!2i2942!3i1876!2m3!1e0!2sm!3i420120488!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1f2!4sh,t!20e3!30e1f2')] bg-cover"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center p-2">
                    <span className="text-[10px] text-white/90 font-bold">Pantheerankavu, Calicut</span>
                    <span className="text-[9px]  mt-1 italic">View on Google Maps →</span>
                  </div>

                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* BOTTOM STRIP - Tightened margin */}
        <div className="mt-16 pt-8 border-t  border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            {[
              { name: 'Instagram', url: 'https://instagram.com/prepoc' },
              { name: 'LinkedIn', url: 'https://linkedin.com/company/prepoc' }
            ].map((social) => (
              <a 
                key={social.name} 
                href={social.url}
                className="text-[15px] uppercase tracking-[0.2em] font-black text-white "
              >
                {social.name}
              </a>
            ))}
          </div>
          
          <p className="text-white/20 text-[9px] uppercase tracking-widest font-bold">
            © 2026 PREPOC. Engineered in India.
          </p>
        </div>

      </div>
    </footer>
  );
}