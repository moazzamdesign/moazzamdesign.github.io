export const profile = {
  name: "Your Name",
  role: "Software Developer",
  tagline:
    "I build clean, reliable web applications and enjoy turning ideas into products.",
  location: "City, Country",
  email: "you@example.com",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};

export const about = [
  "I'm a developer who cares about well-crafted software and good user experiences. I work across the stack, with a focus on the frontend and product engineering.",
  "When I'm not coding, I enjoy learning new tools, contributing to open source, and writing about the things I build.",
];

export const skills: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Git",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what this project does, the problem it solves, and your role in building it.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://example.com",
    repo: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "Another project. Describe the impact — users served, performance gains, or something you learned.",
    tags: ["React", "Node.js", "PostgreSQL"],
    repo: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "A third project to round out the portfolio. Keep descriptions concise and outcome-focused.",
    tags: ["TypeScript", "API"],
    link: "https://example.com",
  },
];
