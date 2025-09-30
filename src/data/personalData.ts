import { PersonalInfo, Experience, Skill, Project } from '@/types';

export const personalData: PersonalInfo = {
  name: 'Alireza Naseri',
  title: 'Frontend Developer',
  email: 'alirezanasery1998@gmail.com',
  phone: '+(98)9378852305',
  location: 'neyshabur, Iran',
  linkedin: 'https://www.linkedin.com/in/alireza-naseri-a44480384/',
  github: 'https://github.com/alirezanasery',
  summary: 'Hi! Im Alireza, a Frontend Developer with 3+ years of experience building modern, dynamic, and responsive web applications.I specialize in HTML, CSS, JavaScript, React.js, Next.js, TypeScript, and Tailwind CSS, and I’m passionate about creating interactive UI animations and user-friendly interfaces that bring websites to life.Over the past few years, I’ve worked on personal and freelance projects to sharpen my skills and expand my knowledge in the latest frontend technologies. I enjoy delivering clean, efficient, and engaging web experiences with smooth animations and responsive designs that users love interacting with.'
};

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'HOMAYOUN-GROUP',
    position: 'Frontend Developer',
    period: '2021 - Present',
    description: [
      'Developed and maintained web applications using React and Next.js',
      'Collaborated with design team to implement UI/UX designs',
      'Optimized application performance and SEO'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  }
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'online resume',
    description: 'A modern digital resume crafted to highlight your talent and advance your career.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'soon'
  }
];