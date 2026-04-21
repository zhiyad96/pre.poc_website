import React from 'react';
import { 
  Globe, 
  Megaphone, 
  PenTool, 
  Video, 
  Fingerprint, 
  Users 
} from 'lucide-react';
import ScrollReveal from './scrollreveal';

export default function Services() {
  const serviceCategories = [
    {
      title: "Digital & Strategy",
      accent: "from-cyan-400 to-blue-600",
      glow: "group-hover:shadow-[0_0_40px_-5px_rgba(56,189,248,0.4)]",
      items: [
        { 
          name: "Web Development", 
          desc: "Custom, scalable, and responsive web solutions tailored to modern user experiences.", 
          icon: <Globe className="w-8 h-8" />,
          color: "text-cyan-500",
          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        },
        { 
          name: "PR & Communication", 
          desc: "Strategic public relations to manage your reputation and amplify your brand’s voice.", 
          icon: <Megaphone className="w-8 h-8" />,
          color: "text-blue-500",
          img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
        },
        { 
          name: "Copywriting", 
          desc: "Data-driven storytelling and engaging content designed to convert followers into customers.", 
          icon: <PenTool className="w-8 h-8" />,
          color: "text-indigo-500",
          img: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop"
        }
      ]
    },
    {
      title: "Creative & Brand",
      accent: "from-fuchsia-500 to-purple-600",
      glow: "group-hover:shadow-[0_0_40px_-5px_rgba(232,121,249,0.4)]",
      items: [
        { 
          name: "Photo & Video", 
          desc: "High-end visual content, from professional product shoots to cinematic production.", 
          icon: <Video className="w-8 h-8" />,
          color: "text-fuchsia-500",
          img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop"
        },
        { 
          name: "Brand Identity", 
          desc: "Crafting unique visual languages and strategic positioning that resonate.", 
          icon: <Fingerprint className="w-8 h-8" />,
          color: "text-purple-500",
          img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800&auto=format&fit=crop"
        },
        { 
          name: "Corporate Training", 
          desc: "Empowering teams with the tools and knowledge to maintain brand consistency.", 
          icon: <Users className="w-8 h-8" />,
          color: "text-pink-500",
          img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="relative  bg-[#130520] py-24 md:py-40 overflow-hidden">
      
      {/* 1. ATMOSPHERIC LIGHTING */}
      <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-[#22073d]-500/20 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute -bottom-24 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[140px] animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-15 space-y-6 text-center md:text-left">
          <ScrollReveal type="jump" delay={0.1}>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="h-[3px] w-14 bg-gradient-to-r from-cyan-400 to-fuchsia-400"></span>
              <h2 className="text-sm font-black uppercase tracking-[0.8em] text-white/80">Expertise</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal type="jump" delay={0.2}>
            <p className="text-xl md:text-6xl font-black tracking-tighter text-white leading-none">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-white to-white/30">SERVICES.</span>
            </p>
          </ScrollReveal>
        </div>

        {/* 2. ALTERNATING SERVICE SECTIONS */}
        <div className="space-y-32">
          {serviceCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-10">
              {/* Category Sub-Header */}
              <ScrollReveal type="jump" delay={0.3 + catIdx * 0.5}>
                <div className="flex items-center gap-4">
                  <h6 className=" uppercase tracking-widest text-white">{cat.title}</h6>
                  <div className={`h-[1px] flex-grow bg-gradient-to-r ${cat.accent} opacity-40`}></div>
                </div>
              </ScrollReveal>
              
              <div className="grid grid-cols-1  gap-10">
                {cat.items.map((service, sIdx) => {
                  const isReversed = sIdx % 2 !== 0;

                  return (
                    <ScrollReveal key={sIdx} type="jump" delay={0.5 + catIdx * 0.5 + sIdx * 0.2}>
                      <div 
                        className={`group relative p-[1px] bg-white/10 transition-all duration-700  ${cat.glow}`}
                      >
                      {/* Main Card Container */}
                      <div className={`relative z-10 p-6 md:p-12 bg-[#130d28] h-full flex flex-col 
                        ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
                        items-center gap-10 lg:gap-20 overflow-hidden`}
                      >
                        
                        {/* LEFT/RIGHT: Image Side */}
                        <div className="relative w-full md:w-1/2 aspect-video md:aspect-[4/3] lg:aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                          <img 
                            src={service.img} 
                            alt={service.name}
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 "
                          />
                          
                        </div>

                        {/* LEFT/RIGHT: Details Side */}
                        <div className={`w-full md:w-1/2 space-y-6 ${isReversed ? 'md:text-right' : 'text-left'}`}>
                          <div className={`flex items-center gap-4 ${isReversed ? 'md:flex-row-reverse' : 'flex-row'}`}>
                             <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest">0{sIdx + 1}</span>
                             <div className="h-px w-12 bg-white/20"></div>
                          </div>

                          <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                            {service.name}
                          </h4>
                          
                          <p className="text-white/60 leading-relaxed text-lg md:text-xl group-hover:text-white transition-colors duration-500">
                            {service.desc}
                          </p>

                          {/* Reveal Button */}
                          <div className={`pt-6 flex ${isReversed ? 'md:justify-end' : 'justify-start'}`}>
                             <button className="group/btn flex items-center gap-5">
                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover/btn:text-white transition-all ${isReversed ? 'order-2' : 'order-1'}`}>
                                  Learn Strategy
                                </span>
                                <div className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 group-hover/btn:bg-white group-hover/btn:text-[#1c123d] transition-all duration-500 ${isReversed ? 'order-1' : 'order-2'}`}>
                                  →
                                </div>
                             </button>
                          </div>
                        </div>

                        {/* Ghost Index (01, 02...) */}
                        <div className={`absolute -bottom-10 ${isReversed ? '-left-10' : '-right-10'} text-white/[0.03] text-[15rem] font-black select-none pointer-events-none`}>
                          0{sIdx + 1}
                        </div>
                      </div>
                    </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>       
      </div>
    </div>
  );
}