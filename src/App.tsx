import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { profileData, timelineData, projectsData } from './data/content';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-200 font-sans selection:bg-white selection:text-black">
      <main className="max-w-5xl mx-auto w-full">
        <Hero data={profileData} />
        <Projects projects={projectsData} />
        <Timeline events={timelineData} />
      </main>
      <Footer />
    </div>
  );
}
