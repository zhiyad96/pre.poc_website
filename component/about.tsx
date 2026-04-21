import ScrollReveal from './scrollreveal';

export default function AboutSection() {
  return (
    <div className="relative bg-[#0c0c0c] py-24 md:py-40 overflow-hidden">
      
      {/* 1. BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-magenta-500/20 rounded-full blur-[120px] opacity-50 bg-[#d946ef]"></div> */}
        {/* <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] opacity-30 bg-[#6366f1]"></div> */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: VISUAL HEADING */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal type="jump" delay={0.1}>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white">
                ABOUT <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 italic font-light">
                  PREPOC
                </span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal type="jump" delay={0.3}>
              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
            </ScrollReveal>
            
            {/* Decorative Icon/Shape */}
            <ScrollReveal type="jump" delay={0.5}>
              <div className="pt-8 hidden lg:block">
                 <div className="w-32 h-32 rounded-3xl border-2 border-white/5 rotate-12 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-2xl border border-white/10 -rotate-12 bg-white/5 flex items-center justify-center">
                       <span className="text-4xl"></span>
                    </div>
                 </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: TYPOGRAPHY & CONTENT */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <ScrollReveal type="jump" delay={0.2}>
                <h3 className="text-2xl md:text-4xl text-white font-bold leading-tight tracking-tight">
                  Engineering Digital Excellence through{" "}
                  <span className="text-pink-400">Analytical Precision</span> and Artistic Vision.
                </h3>
              </ScrollReveal>

              <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
                <ScrollReveal type="jump" delay={0.4}>
                  <p>
                    <span className="text-white font-bold">PRE.POC Technologies</span> is a multi-disciplinary media and tech agency dedicated to building robust brand identities and high-performance digital ecosystems. 
                  </p>
                </ScrollReveal>
                <ScrollReveal type="jump" delay={0.6}>
                  <p>
                    We bridge the gap between technical infrastructure and creative storytelling, ensuring your business doesn't just exist online—<span className="text-white underline decoration-pink-500 decoration-2 underline-offset-4">it leads.</span>
                  </p>
                </ScrollReveal>
              </div>
            </div>

            {/* FEATURE BOXES (New addition for that "Agency" look) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <ScrollReveal type="jump" delay={0.8}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all">
                  <p className="text-pink-400 font-black text-xs uppercase tracking-widest mb-2">Strategy</p>
                  <p className="text-white text-sm">Measurable market authority and technical precision.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal type="jump" delay={1.0}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all">
                  <p className="text-purple-400 font-black text-xs uppercase tracking-widest mb-2">Creativity</p>
                  <p className="text-white text-sm">Bridging infrastructure with artistic creative storytelling.</p>
                </div>
              </ScrollReveal>
            </div>

            {/* BOTTOM SIGNATURE */}
            <ScrollReveal type="jump" delay={1.2}>
              <div className="pt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold whitespace-nowrap">
                  Est. 2024 // Calicut
                </span>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}