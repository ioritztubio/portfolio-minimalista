import React from 'react';
import { motion } from 'motion/react';
import { ProfileData } from '../data/types';
import { Button } from './ui/Button';
import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  data: ProfileData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl">
          <img 
            src={data.avatarUrl} 
            alt={data.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
      >
        {data.name}
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-xl md:text-2xl text-zinc-400 mb-8 font-light"
      >
        {data.subtitle}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="max-w-2xl mx-auto mb-10 space-y-2 text-zinc-500 leading-relaxed"
      >
        {data.about.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-4"
      >
        {data.socials.map((social) => {
          const Icon = social.platform === 'GitHub' ? Github : social.platform === 'LinkedIn' ? Linkedin : Mail;
          return (
            <Button key={social.platform} href={social.url} variant="outline">
              <Icon className="w-4 h-4 mr-2" />
              {social.label}
            </Button>
          );
        })}
      </motion.div>
    </section>
  );
};
