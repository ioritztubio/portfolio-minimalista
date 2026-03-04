import React from 'react';
import { motion } from 'motion/react';
import { TimelineEvent } from '../data/types';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  // Sort events by dateStart descending (newest first)
  const sortedEvents = [...events].sort((a, b) => {
    const yearA = parseInt(a.dateStart);
    const yearB = parseInt(b.dateStart);
    return yearB - yearA;
  });

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-16 tracking-tight">Experience & Education</h2>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {sortedEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
  const isEven = index % 2 === 0;
  const isWork = event.type === 'work';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center group`}
    >
      {/* Checkpoint Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-zinc-900 border-2 border-zinc-600 rounded-full transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 group-hover:border-white group-hover:scale-125 transition-all duration-300" />

      {/* Spacer for desktop alignment */}
      <div className="hidden md:block md:w-1/2" />

      {/* Content */}
      <div className={`pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} w-full`}>
        <div className="bg-transparent p-0">
          <div className={`flex items-center gap-2 mb-2 text-zinc-500 text-sm font-mono uppercase tracking-wider ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className="flex items-center gap-1.5">
              {isWork ? <Briefcase className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
              {event.dateStart} — {event.dateEnd}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
          <h4 className="text-md text-zinc-400 mb-3 font-medium">{event.organization}</h4>
          
          <p className="text-zinc-500 leading-relaxed text-sm">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
