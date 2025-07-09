'use client';

import dynamic from 'next/dynamic';

const SkillsSphere = dynamic(
  () => import('@/components/skills-sphere'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <p className="text-muted-foreground">Loading interactive sphere...</p>
      </div>
    ),
  }
);


const skillsData = {
  languages: {
    skills: ["Python", "C/C++", "JavaScript", "SQL", "HTML/CSS"]
  },
  frameworks: {
    skills: ["Node.js", "Express", "Flask", "FastAPI", "Streamlit", "MongoDB"]
  },
  mlLibraries: {
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Numpy", "OpenCV"]
  },
  tools: {
    skills: ["Git", "GCP", "Anaconda", "PyCharm", "VS Code"]
  }
};

const allSkills = Object.values(skillsData).flatMap(category => category.skills);

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Technical Skills</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">My developer toolkit. Interact with the sphere!</p>
      </div>
      <div className="w-full h-[400px] md:h-[500px]">
        <SkillsSphere skills={allSkills} />
      </div>
    </section>
  );
}
