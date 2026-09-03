import Nav from "@/components/Nav";
import { about, profile, projects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Nav />
      <main
        id="top"
        className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24"
      >
        {/* Hero */}
        <section className="flex flex-col gap-4">
          <p className="text-sm font-medium text-foreground/60">
            {profile.role} · {profile.location}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m {profile.name}.
          </h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            {profile.tagline}
          </p>
          <div className="mt-2 flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-foreground px-5 py-2 font-medium text-background transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/10 px-5 py-2 font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-20 scroll-mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
            About
          </h2>
          <div className="mt-4 space-y-4 text-foreground/80">
            {about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20 scroll-mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
            Projects
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-xl border border-black/10 p-5 transition-shadow hover:shadow-lg dark:border-white/10"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-foreground/70">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-foreground/70 dark:bg-white/10"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 text-sm font-medium">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 underline-offset-4 hover:underline"
                    >
                      Live ↗
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 underline-offset-4 hover:underline"
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-20 scroll-mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
            Skills
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-black/10 px-3 py-1.5 text-sm dark:border-white/10"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20 scroll-mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
            Contact
          </h2>
          <p className="mt-4 text-foreground/80">
            Interested in working together or just want to say hi? Reach me at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-medium underline underline-offset-4"
            >
              {profile.email}
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-sm text-foreground/60">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
