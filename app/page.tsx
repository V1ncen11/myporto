"use client";

import Magnetic from "@/components/Magnetic";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Clock, Code2, Database, LayoutTemplate, Music, Terminal, Cpu, Blocks, MonitorSmartphone, Mail, Download, Sparkles } from "lucide-react";

const t = {
  EN: {
    role: "Fullstack Developer",
    based: "Tasikmalaya, ID",
    bio: "I engineer high-performance web apps with a perfectionist approach to UI/UX. I enjoy building scalable backend systems while crafting interfaces that feel clean, fast, and intuitive. My focus is on writing maintainable code and creating digital products that solve real problems at the intersection of minimalist design and robust architecture.",
    works: "Selected Works",
    arsenal: "Tech Stack",
    exp: "Experience",
    exp1Year: "2022 - Present",
    exp1Role: "Informatics Engineering Student & Freelancer",
    exp1Desc: "Studying at STT Cipasung while building various freelance web applications.",
    exp2Year: "2024",
    exp2Role: "Backend Developer Intern",
    exp2Desc: "Developed the backend architecture and API for a comprehensive school financial management system at SMK Padakembang.",
    exp3Year: "2019 - 2022",
    exp3Role: "Software Engineering Student",
    exp3Desc: "Studied at SMK YPC Tasikmalaya. Built a clinic queue management system as the final project.",
    contact: "Let's Work Together",
    email: "nurahmankevin@gmail.com",
    available: "Currently open for selected freelance projects",
    services: "What I Do",
    serv1: "Backend Systems",
    serv1Desc: "Scalable APIs & Databases",
    serv2: "Frontend Dev",
    serv2Desc: "Interactive UIs with React",
    serv3: "UI/UX Design",
    serv3Desc: "Minimalist & Brutalist",
    nowPlaying: "Now Playing",
    song: "The Fate of Ophelia",
    artist: "Taylor Swift"
  },
  ID: {
    role: "Fullstack Developer",
    based: "Tasikmalaya, ID",
    bio: "Saya merancang aplikasi web berkinerja tinggi dengan pendekatan perfeksionis pada UI/UX. Saya sangat menikmati proses membangun sistem backend yang scalable sembari meracik antarmuka yang bersih, cepat, dan intuitif. Fokus utama saya adalah menulis kode yang rapi serta menciptakan produk digital yang memecahkan masalah nyata lewat perpaduan desain minimalis dan arsitektur yang solid.",
    works: "Karya Pilihan",
    arsenal: "Tech Stack",
    exp: "Pengalaman",
    exp1Year: "2022 - Sekarang",
    exp1Role: "Mahasiswa Teknik Informatika & Freelancer",
    exp1Desc: "Menempuh pendidikan di STT Cipasung sembari mengembangkan berbagai proyek web freelance.",
    exp2Year: "2024",
    exp2Role: "Backend Developer Intern",
    exp2Desc: "Merancang arsitektur backend dan API untuk sistem manajemen keuangan sekolah saat magang di SMK Padakembang.",
    exp3Year: "2019 - 2022",
    exp3Role: "Siswa Rekayasa Perangkat Lunak",
    exp3Desc: "Bersekolah di SMK YPC Tasikmalaya. Membangun sistem antrian klinik sebagai proyek akhir.",
    contact: "Mari Berkolaborasi",
    email: "nurahmankevin@gmail.com",
    available: "Terbuka untuk proyek freelance terpilih",
    services: "Apa Yang Saya Lakukan",
    serv1: "Sistem Backend",
    serv1Desc: "API & Database Skala Besar",
    serv2: "Frontend Dev",
    serv2Desc: "UI Interaktif pakai React",
    serv3: "Desain UI/UX",
    serv3Desc: "Minimalis & Brutalis",
    nowPlaying: "Lagi Didengerin",
    song: "The Fate of Ophelia",
    artist: "Taylor Swift"
  }
};

const BentoCard = ({ children, className, delay = 0, id }: { children: React.ReactNode, className?: string, delay?: number, id?: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden relative group hover:border-white/20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
    >
      {/* Dynamic Spotlight Hover Effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [lang, setLang] = useState<"EN" | "ID">("EN");
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [time, setTime] = useState("");

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { timeZone: "Asia/Jakarta", hour12: false }));
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-white z-[9999] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center text-white"
          >
            <div className="w-40 h-[2px] bg-white/10 mb-6 overflow-hidden rounded-full relative">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white absolute top-0 left-0"
              />
            </div>
            <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/40">Kevin Nurachman</div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="top" className="relative w-full min-h-screen bg-[#030303] text-white selection:bg-white/30 selection:text-white p-4 md:p-8 lg:p-12 pb-32 overflow-hidden">

        {/* Cinematic Grain Overlay */}
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.06] mix-blend-screen" style={{ backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjAwIDIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZmlsdGVyIGlkPSdub2lzZUZpbHRlcic+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuNjUnIG51bU9jdGF2ZXM9JzMnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbm9pc2VGaWx0ZXIpJy8+PC9zdmc+")` }}></div>

        {/* Static Ambient Mesh Background (Optimized for 60fps+ Scroll) */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.3]">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-white/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[150px]"></div>
        </div>

        {isReady && (
          <>


        {/* Navbar */}
        <nav className="w-full max-w-7xl mx-auto flex justify-between items-center mb-10 z-50 relative pointer-events-auto px-8 md:px-10">
          <div className="font-bold tracking-widest text-sm uppercase">Kevin Nurachman</div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10">
            <Magnetic>
              <button onClick={() => setLang("ID")} className={`px-4 py-2 rounded-full transition-all duration-300 ${lang === "ID" ? "bg-[#e5e5e5] text-black/90 shadow-sm" : "text-white/60 hover:text-white"}`}>ID</button>
            </Magnetic>
            <Magnetic>
              <button onClick={() => setLang("EN")} className={`px-4 py-2 rounded-full transition-all duration-300 ${lang === "EN" ? "bg-[#e5e5e5] text-black/90 shadow-sm" : "text-white/60 hover:text-white"}`}>EN</button>
            </Magnetic>
          </div>
        </nav>

        {/* Massive Bento Grid Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px] grid-flow-dense relative z-10 pointer-events-auto" style={{ perspective: "1000px" }}>

          {/* Bio Card (2x2) */}
          <BentoCard delay={0.1} id="about" className="col-span-1 row-span-2 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group bg-black">
            {/* Cinematic Portrait Background (saya.png) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-[30%] right-[-30%] md:left-[40%] md:right-[-40%]">
                <Image
                  src="/image/saya.png"
                  alt="Portrait"
                  fill
                  unoptimized
                  className="object-cover object-[center_80%] opacity-100 scale-[1.10] grayscale group-hover:grayscale-0 group-hover:scale-[1.12] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] from-[35%] md:from-[45%] to-transparent"></div>
            </div>

            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-lg group-hover:border-white/50 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative mb-8 md:mb-10 z-10 flex-shrink-0">
              <Image
                src="/profile.png"
                alt="Kevin Nurachman"
                fill
                unoptimized
                className="object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mt-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 leading-[1.1] text-white">
                {lang === "EN" ? "Hi, I'm Kevin." : "Halo, Saya Kevin."} <br />
                <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-white to-zinc-500 inline-block"
                  style={{
                    backgroundSize: '200% auto',
                    animation: 'text-gradient 8s linear infinite'
                  }}
                >
                  {t[lang].role}
                </span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-md leading-relaxed">
                {t[lang].bio}
              </p>
            </motion.div>
          </BentoCard>

          {/* Location Card (1x1) */}
          <BentoCard delay={0.1} className="col-span-1 md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-1 p-6 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"></div>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            <div className="relative z-10 flex flex-col items-center">
              <MapPin className="text-white/60 mb-3" size={28} />
              <p className="font-bold tracking-widest text-sm uppercase">{t[lang].based}</p>
              <p className="text-white/40 text-[10px] md:text-xs mt-3 text-center px-4 leading-relaxed">
                {t[lang].available}
              </p>
            </div>
          </BentoCard>

          {/* Live Clock Card (1x1) */}
          <BentoCard delay={0.6} className="col-span-1 md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-1 p-6 flex flex-col justify-center items-center bg-white text-black">
            <Clock className="mb-4 opacity-40" size={20} />
            <h2 className="text-lg md:text-xl font-bold tracking-tighter font-mono">{time || "00:00:00"}</h2>
            <p className="text-[9px] uppercase tracking-widest font-bold opacity-40 mt-1">WIB (GMT+7)</p>
          </BentoCard>

          {/* Languages Card (1x1) */}
          <BentoCard delay={0.6} className="col-span-1 md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-1 p-6 flex flex-col justify-center items-center gap-6 bg-[#0a0a0a]">
            <p className="text-xs uppercase tracking-widest font-bold text-white/40">Languages</p>
            <div className="flex flex-col gap-4 w-full px-2">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-sm font-bold">ID</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest">Native</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-sm font-bold">EN</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest">Basic</span>
              </div>
            </div>
          </BentoCard>

          {/* Spotify Now Playing (1x1) */}
          <BentoCard delay={0.2} className="col-span-1 md:col-start-4 md:col-span-1 md:row-start-2 md:row-span-1 p-6 flex flex-col justify-between bg-gradient-to-br from-[#1DB954]/20 to-[#0a0a0a]">
            <div className="flex justify-between items-start w-full">
              <div className="font-bold uppercase tracking-widest text-[10px] text-white/60">
                {t[lang].nowPlaying}
              </div>
              <div className="flex gap-[3px] items-end h-4">
                <span className="w-1 bg-[#1DB954] rounded-t-sm animate-sound-bar" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-1 bg-[#1DB954] rounded-t-sm animate-sound-bar" style={{ animationDelay: '0.4s' }}></span>
                <span className="w-1 bg-[#1DB954] rounded-t-sm animate-sound-bar" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1 bg-[#1DB954] rounded-t-sm animate-sound-bar" style={{ animationDelay: '0.5s' }}></span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-12 bg-white/10 rounded-md overflow-hidden relative animate-spin-slow shadow-lg">
                <Image src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1000&auto=format&fit=crop" fill alt="Album Cover" className="object-cover rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm">{t[lang].song}</h4>
                <p className="text-xs text-white/60">{t[lang].artist}</p>
              </div>
            </div>
          </BentoCard>

          {/* Tech Stack Card (2x1) */}
          <BentoCard delay={0.1} className="col-span-1 row-span-2 md:col-start-3 md:col-span-2 md:row-start-3 md:row-span-1 p-6 flex flex-col relative bg-[#0a0a0a]">
            <div className="font-bold uppercase tracking-widest text-xs opacity-40 mb-6">
              {t[lang].arsenal}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 w-full h-full overflow-y-auto scrollbar-hide pr-2">
              <div>
                {/* BACKEND */}
                <div className="flex flex-col gap-3 pb-6 border-b border-white/10 mb-6">
                  <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Backend</p>
                  {[
                    { name: "Laravel", icon: "laravel" },
                    { name: "Express", icon: "express" },
                    { name: "Node.js", icon: "nodedotjs" },
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 group/tech cursor-pointer">
                      <img src={`https://cdn.simpleicons.org/${tech.icon}/white`} alt={tech.name} className="w-5 h-5 object-contain opacity-60 group-hover/tech:opacity-100 group-hover/tech:scale-110 transition-all duration-300" />
                      <span className="text-sm font-medium opacity-60 group-hover/tech:opacity-100 group-hover/tech:translate-x-1 transition-all duration-300">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* FRONTEND */}
                <div className="flex flex-col gap-3 pb-6 border-white/10 md:mb-0 mb-6 md:border-b-0 border-b">
                  <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Frontend</p>
                  {[
                    { name: "React", icon: "react" },
                    { name: "Vue", icon: "vuedotjs" },
                    { name: "Next.js", icon: "nextdotjs" },
                    { name: "Tailwind CSS", icon: "tailwindcss" },
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 group/tech cursor-pointer">
                      <img src={`https://cdn.simpleicons.org/${tech.icon}/white`} alt={tech.name} className="w-5 h-5 object-contain opacity-60 group-hover/tech:opacity-100 group-hover/tech:scale-110 transition-all duration-300" />
                      <span className="text-sm font-medium opacity-60 group-hover/tech:opacity-100 group-hover/tech:translate-x-1 transition-all duration-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* DATABASE */}
                <div className="flex flex-col gap-3 pb-6 border-b border-white/10 mb-6">
                  <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Database</p>
                  {[
                    { name: "MySQL", icon: "mysql" },
                    { name: "PostgreSQL", icon: "postgresql" },
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 group/tech cursor-pointer">
                      <img src={`https://cdn.simpleicons.org/${tech.icon}/white`} alt={tech.name} className="w-5 h-5 object-contain opacity-60 group-hover/tech:opacity-100 group-hover/tech:scale-110 transition-all duration-300" />
                      <span className="text-sm font-medium opacity-60 group-hover/tech:opacity-100 group-hover/tech:translate-x-1 transition-all duration-300">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* TOOLS */}
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Tools</p>
                  {[
                    { name: "Git", icon: "git" },
                    { name: "Docker", icon: "docker" },
                    { name: "Figma", icon: "figma" },
                    { name: "VS Code", icon: "vscodium" },
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 group/tech cursor-pointer">
                      <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tech.icon}.svg`} alt={tech.name} className="w-5 h-5 object-contain opacity-60 group-hover/tech:opacity-100 group-hover/tech:scale-110 transition-all duration-300 brightness-0 invert" />
                      <span className="text-sm font-medium opacity-60 group-hover/tech:opacity-100 group-hover/tech:translate-x-1 transition-all duration-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Services Card (2x1) */}
          <BentoCard delay={0.1} className="col-span-1 row-span-2 md:col-start-1 md:col-span-2 md:row-start-3 md:row-span-1 p-6 md:p-8 flex flex-col justify-center bg-[#0a0a0a]">
            <div className="font-bold uppercase tracking-widest text-xs text-white/40 mb-6">
              {t[lang].services}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
              <div className="flex flex-col gap-2">
                <Database className="text-emerald-400 mb-2" size={24} />
                <h4 className="font-bold text-sm">{t[lang].serv1}</h4>
                <p className="text-xs text-white/40">{t[lang].serv1Desc}</p>
              </div>
              <div className="flex flex-col gap-2">
                <MonitorSmartphone className="text-blue-400 mb-2" size={24} />
                <h4 className="font-bold text-sm">{t[lang].serv2}</h4>
                <p className="text-xs text-white/40">{t[lang].serv2Desc}</p>
              </div>
              <div className="flex flex-col gap-2">
                <LayoutTemplate className="text-purple-400 mb-2" size={24} />
                <h4 className="font-bold text-sm">{t[lang].serv3}</h4>
                <p className="text-xs text-white/40">{t[lang].serv3Desc}</p>
              </div>
            </div>
          </BentoCard>


          {/* Experience Card (2x2) */}
          <BentoCard delay={0.2} id="experience" className="col-span-1 row-span-2 md:col-start-1 md:col-span-2 md:row-start-4 md:row-span-2 p-8 md:p-10 flex flex-col">
            <div className="font-bold uppercase tracking-widest text-xs text-white/40 mb-8">
              {t[lang].exp}
            </div>

            <div className="flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
              <div className="flex flex-col group">
                <span className="text-xs font-bold tracking-widest text-white/40 mb-2 uppercase">{t[lang].exp1Year}</span>
                <span className="text-xl md:text-2xl font-bold tracking-tighter mb-2 group-hover:text-white/70 transition-colors">{t[lang].exp1Role}</span>
                <span className="text-sm md:text-base text-white/50 leading-relaxed">{t[lang].exp1Desc}</span>
              </div>

              <div className="w-full h-[1px] bg-white/10 my-1"></div>

              <div className="flex flex-col group">
                <span className="text-xs font-bold tracking-widest text-white/40 mb-2 uppercase">{t[lang].exp2Year}</span>
                <span className="text-xl md:text-2xl font-bold tracking-tighter mb-2 group-hover:text-white/70 transition-colors">{t[lang].exp2Role}</span>
                <span className="text-sm md:text-base text-white/50 leading-relaxed">{t[lang].exp2Desc}</span>
              </div>

              <div className="w-full h-[1px] bg-white/10 my-1"></div>

              <div className="flex flex-col group">
                <span className="text-xs font-bold tracking-widest text-white/40 mb-2 uppercase">{t[lang].exp3Year}</span>
                <span className="text-xl md:text-2xl font-bold tracking-tighter mb-2 group-hover:text-white/70 transition-colors">{t[lang].exp3Role}</span>
                <span className="text-sm md:text-base text-white/50 leading-relaxed">{t[lang].exp3Desc}</span>
              </div>
            </div>
          </BentoCard>

          {/* Projects Mapping */}
          {[
            { title: "Sistem Keuangan", year: "2024", category: "Financial System", image: "/image/sistemkeuangan.png", delay: 0.2, gridSpan: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
            { title: "Vibe Nature", year: "2026", category: "Interactive Resort", image: "/image/cuba.png", link: "https://vibe-nature.vercel.app", delay: 0.3, gridSpan: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
            { title: "Kawaleaves Cofe", year: "2025", category: "Web Application", image: "/image/cafe.png", delay: 0.2, gridSpan: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
            { title: "K-serv", year: "2024", category: "Company Profile", image: "/image/kserv.png", link: "https://k-serv.web.id", delay: 0.3, gridSpan: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
            { title: "CBT System", year: "2024", category: "Education Platform", image: "/image/cbtsystem.png", delay: 0.2, gridSpan: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
            { title: "Sistem Pakar", year: "2023", category: "Expert System", image: "/image/pakar.png", delay: 0.3, gridSpan: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
            { title: "Point of Sales", year: "2023", category: "Management System", image: "/image/pos.png", delay: 0.2, gridSpan: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
            { title: "Resto App", year: "2023", category: "Food & Beverage", image: "/image/resto.png", delay: 0.3, gridSpan: "col-span-1 row-span-1 md:col-span-2 md:row-span-1" },
            { title: "Noir Studio", year: "2026", category: "Premium Photography", image: "/image/noir.png", link: "https://noirr-studio.vercel.app", delay: 0.4, gridSpan: "col-span-1 row-span-2 md:col-span-4 md:row-span-2" }
          ].map((project, index) => (
            <BentoCard key={index} id={index === 0 ? "projects" : undefined} delay={project.delay} className={`${project.gridSpan} overflow-hidden group hover-target cursor-pointer relative`}>
              <div className="absolute inset-0 overflow-hidden bg-[#111]">
                <Image src={project.image} alt={project.title} fill unoptimized className="object-cover object-top transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 group-hover:scale-[1.02]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-10 pointer-events-none">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{project.category}</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
              </div>
              <a href={(project as any).link || "#"} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-40 hover-target cursor-pointer">
                <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-2 group-hover:translate-y-0 px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white font-bold flex items-center gap-2 shadow-xl hover:bg-white hover:text-black hover:scale-[1.02]">
                  <span className="text-[10px] uppercase tracking-widest">Visit</span>
                  <span className="bg-white text-black w-5 h-5 rounded-full flex items-center justify-center text-[10px] transform -rotate-45">→</span>
                </div>
              </a>
            </BentoCard>
          ))}

          {/* Contact Card */}
          <BentoCard delay={0.2} className="col-span-1 md:col-span-4 md:row-span-1 p-8 md:p-12 bg-white text-black flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 overflow-hidden">
            <div className="relative z-10 w-full md:w-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2 leading-none">{t[lang].contact}</h2>
              <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                {[
                  { name: "Github", url: "https://github.com/V1ncen11", icon: "https://cdn.simpleicons.org/github/black" },
                  { name: "Facebook", url: "https://www.facebook.com/kevin.nurahman.92?locale=id_ID", icon: "https://cdn.simpleicons.org/facebook/black" },
                  { name: "Instagram", url: "https://www.instagram.com/kevinnurachmant/", icon: "https://cdn.simpleicons.org/instagram/black" },
                  { name: "TikTok", url: "https://www.tiktok.com/@kak.kev_?_r=1&_t=ZS-97da1L45diP", icon: "https://cdn.simpleicons.org/tiktok/black" },
                  { name: "Threads", url: "https://www.threads.com/@kevinnurachmant", icon: "https://cdn.simpleicons.org/threads/black" },
                ].map((social) => (
                  <Magnetic key={social.name}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover-target group/social shadow-sm">
                      <img src={social.icon} alt={social.name} className="w-5 h-5 object-contain opacity-60 group-hover/social:opacity-100 group-hover/social:scale-[1.05] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
              <Magnetic>
                <a href={`mailto:${t[lang].email}`} className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-wider text-sm hover-target hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] inline-flex items-center gap-2 w-full md:w-auto justify-center shadow-md">
                  <Mail size={18} /> {t[lang].email}
                </a>
              </Magnetic>
              <Magnetic>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-black text-black rounded-full font-bold uppercase tracking-wider text-sm hover-target hover:bg-black/5 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] inline-flex items-center gap-2 whitespace-nowrap group w-full md:w-auto justify-center">
                  <Download size={18} className="group-hover:-translate-y-1 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  Download CV
                </a>
              </Magnetic>
            </div>
          </BentoCard>
          </div>
          </>
        )}
      </div>
    </>
  );
}
