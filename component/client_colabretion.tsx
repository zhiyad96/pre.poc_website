import ScrollReveal from './scrollreveal';

export default function Clients() {
  const clientLogos = [
    { name: "GlobalTech", logo: "https://api.iconify.design/logos:google-cloud.svg" },
    { name: "Astro Dynamics", logo: "https://api.iconify.design/logos:nasa.svg" },
    { name: "Quantum Solutions", logo: "https://api.iconify.design/logos:ibm.svg" },
    { name: "Nova Marketing", logo: "https://api.iconify.design/logos:hubspot.svg" },
    { name: "Apex FinTech", logo: "https://api.iconify.design/logos:stripe.svg" },
    { name: "Pixel Studios", logo: "https://api.iconify.design/logos:adobe.svg" },
  ];

  return (
    <div className="relative bg-[#1a012e] py-24 md:py-40 overflow-hidden border-t border-white/5">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      {/* Creates depth with non-flat color glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#d946ef]/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#6366f1]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* TOP HEADING SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 md:mb-28">
          <div className="space-y-4">
            <ScrollReveal type="jump" delay={0.1}>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-400 bg-pink-500/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest w-fit">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse"></span>
                Trust & Partnerships
              </div>
            </ScrollReveal>
            <ScrollReveal type="jump" delay={0.2}>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-gray-400">
                SUPREME <br />
                <span className="italic font-light text-white/20 lowercase">and</span> <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-300 to-indigo-400">
                  COLLABORATIONS
                </span>
              </h2>
            </ScrollReveal>
          </div>
          
          <ScrollReveal type="jump" delay={0.3}>
            <p className="max-w-sm text-white/50 text-base md:text-right font-medium leading-relaxed">
              PREPOC powers market-dominating growth for industry leaders through data-driven strategies and precise digital engineering.
            </p>
          </ScrollReveal>
        </div>

        {/* 2. THE LOGO GRID (Bento Style) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clientLogos.map((client, idx) => (
            <ScrollReveal key={idx} type="jump" delay={0.4 + idx * 0.1}>
              <div 
                className="group relative aspect-video rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center overflow-hidden hover:bg-white/[0.07] hover:border-pink-500/30 transition-all duration-700 cursor-default p-6"
              >
              {/* Subtle inner hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Client Logo - Standardized */}
              <div className="relative z-10 w-full h-12 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
              </div>

              {/* Client Name - Hidden unless hovered */}
              <p className="absolute bottom-3 left-0 w-full text-center text-[9px] uppercase tracking-widest font-black text-white opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                {client.name}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3. BACKGROUND "PP." GHOST TEXT (Subtle Branding) */}
        <div className="absolute bottom-[-10%] right-[-5%] opacity-5 select-none pointer-events-none hidden md:block">
          <h1 className="text-[300px] font-black leading-none tracking-tighter text-white">
            PP.
          </h1>
        </div>

      </div>

      {/* 4. BOTTOM FADE (Seamless Transition) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0d011c] to-transparent"></div>
    </div>
  );
}