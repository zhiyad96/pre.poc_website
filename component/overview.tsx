import ScrollReveal from './scrollreveal';
import { ReactNode } from "react";


export default function Overview() {

 type Service = {
  id: string;
  title: string;
  desc: string;
  img: string;
  icon?: ReactNode; 
};

const services: Service[] = [
  {
    id: "1",
    title: "Service One",
    desc: "Description one",
    img: "/img1.jpg",
    // icon: <SomeIcon />  // optional
  },
  {
    id: "2",
    title: "Service Two",
    desc: "Description two",
    img: "/img2.jpg",
  },
  {
    id: "3",
    title: "Service Three",
    desc: "Description three",
    img: "/img3.jpg",
  },
];


  return (
    <div className="relative bg-[#0f0618] min-h-screen py-24 md:py-32 text-white overflow-hidden selection:bg-pink-500/20 selection:text-white">
      
      {/* 1. VIBRANT BACKGROUND CANVASS */}
      {/* Enhanced glows with dynamic positioning */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,#d946ef_0%,transparent_70%)] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,#6366f1_0%,transparent_70%)] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section (Kept the strong typography) */}
        <header className="mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
            <div className="space-y-3">
              <ScrollReveal type="jump" delay={0.1}>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-12 bg-pink-500"></span>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-pink-500 font-bold">
                    Growth Labs
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal type="jump" delay={0.2}>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                  OUR <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-400italic font-light lowercase">OverView.</span>
                </h1>
              </ScrollReveal>
            </div>

            <ScrollReveal type="jump" delay={0.3}>
              <h2 className="text-7xl md:text-[160px] font-black tracking-tighter text-white/5 select-none uppercase italic leading-none md:absolute md:right-0 md:top-24">
                PRE.POC
              </h2>
            </ScrollReveal>
          </div>
        </header>

        {/* 2. ADVANCED SERVICE BENTO GRID */}
        {/* Switched from list rows to dynamic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} type="jump" delay={0.4 + index * 0.2}>
              <div 
                className="group relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden hover:border-white/20 hover:scale-[1.02] transition-all duration-700 cursor-default shadow-2xl shadow-black/30"
              >
              
              {/* Image Layer (Standard agency visual) */}
              {/* Starts desaturated and darkens slightly on hover for text clarity */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                 <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-[0.4] transition-all duration-[1000ms] ease-out"
                 />
                 {/* Gradient Overlay for Text Contrast */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950/90 group-hover:from-transparent group-hover:via-slate-950/20 group-hover:to-slate-950/60 transition-colors duration-700"></div>
              </div>

              {/* Content Layer (Standard right-aligned structure) */}
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end min-h-[360px]">
                
                {/* Meta Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10 group-hover:border-pink-500/30 transition-colors duration-500">
                    <span className="text-xs font-mono text-pink-500/70">
                      [{service.id}]
                    </span>
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-700">{service.icon}</span>
                </div>

                {/* Title & Description */}
                <div className="space-y-4">
                  <div className="relative inline-block">
                     <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white transition-all duration-500">
                        {service.title}
                     </h3>
                     {/* Modern underline replacement */}
                     <div className="h-[2px] w-0 bg-gradient-to-r from-pink-500 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
                  </div>
                  
                  <p className="text-white/60 group-hover:text-white/90 leading-relaxed text-base md:text-lg transition-colors duration-500 max-w-md">
                    {service.desc}
                  </p>
                </div>
                
                {/* Subtle Hover Reveal (Bottom Detail) */}
                <div className="pt-6 mt-4 flex items-center justify-end gap-2 text-white/20 group-hover:text-white/40 transition-colors">
                   <span className="text-[10px] font-bold uppercase tracking-widest">Technical Precision</span>
                   <div className="h-px w-10 bg-white/10"></div>
                </div>

              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

       

      </div>
    </div>
  );
}
