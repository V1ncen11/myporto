"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({ title, category, year, imageUrl, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={link}
      target="_blank"
      className="group block relative w-full border-b border-white/10 py-12 hover-target"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div>
          <motion.h3 
            className="text-4xl md:text-6xl font-bold tracking-tighter"
            animate={{ x: isHovered ? 20 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {title}
          </motion.h3>
          <p className="text-white/40 mt-2 font-medium tracking-wide uppercase text-sm md:text-base">
            {category}
          </p>
        </div>
        
        <div className="text-white/30 font-bold text-xl md:text-2xl">
          {year}
        </div>
      </div>

      {/* Hover Image Reveal */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] aspect-[4/3] rounded-xl overflow-hidden pointer-events-none z-0 hidden md:block"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
          rotate: isHovered ? 0 : -5
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        <Image 
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
    </Link>
  );
}
