import { Avatar, Typography } from "@heroui/react";
import { Contact, Project } from "../classes";
import { ContactInfo, Navbar, ProjectCard } from "../components";
import { ItalyFlag } from "../components/icons";
import contacts from '../contacts.json'
import projects from '../projects.json'

export const Home = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full overflow-hidden">
        <div className="hero-fade absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="hero-blob absolute -top-24 -left-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#7f7fd5]/30 dark:bg-[#7f7fd5]/20 blur-3xl" />
          <div className="hero-blob hero-blob-delay-1 absolute -top-16 -right-16 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#86a8e7]/30 dark:bg-[#86a8e7]/20 blur-3xl" />
          <div className="hero-blob hero-blob-delay-2 absolute bottom-[-6rem] left-1/3 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-[#7f7fd5]/20 dark:bg-[#86a8e7]/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28 min-h-[50vh] flex flex-col sm:flex-row items-center justify-center gap-8">
          <Avatar className="w-28 h-28 sm:w-36 sm:h-36 shrink-0">
            <Avatar.Image src="/propic.jpg" alt="Carlo Bollini" />
            <Avatar.Fallback>CB</Avatar.Fallback>
          </Avatar>
          <div className="flex flex-col text-center sm:text-left">
            <Typography.Heading level={1} className="gradient-text text-4xl sm:text-5xl font-bold">
              Hello, world!
            </Typography.Heading>
            <Typography.Heading level={2} className="text-xl sm:text-2xl mt-2">
              My name is <strong className="gradient-text">Carlo</strong>
            </Typography.Heading>
            <Typography.Paragraph className="mt-2">
              I'm a fullstack developer living and working in Italy! <ItalyFlag />
            </Typography.Paragraph>
          </div>
        </div>
      </section>

      <div id="projects" className="mx-auto max-w-5xl px-6 scroll-mt-20">
        <div className="text-center sm:text-left">
          <Typography.Heading level={2} className="text-3xl font-bold">My projects</Typography.Heading>
          <Typography.Paragraph color="muted">Things I've built recently</Typography.Paragraph>
        </div>
        <hr className="border-separator my-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {projects.map((p: Project) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </div>

      <div id="contacts" className="mx-auto max-w-5xl px-6 scroll-mt-20">
        <div className="text-center sm:text-left">
          <Typography.Heading level={2} className="text-3xl font-bold">My contacts</Typography.Heading>
          <Typography.Paragraph color="muted">Where to find me online</Typography.Paragraph>
        </div>
        <hr className="border-separator my-6" />
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-10">
          {contacts.map((c: Contact) => (
            <ContactInfo key={c.text} {...c} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-10">
        <Typography.Paragraph color="muted" align="center">
          Built with 💚 using <a href="https://vitejs.dev/" className="hover:text-accent">Vite</a>, <a href="https://reactjs.org/" className="hover:text-accent">React</a> and <a href="https://heroui.com/" className="hover:text-accent">HeroUI</a> - © 2022-{new Date().getFullYear()}
        </Typography.Paragraph>
      </div>
    </>
  )
}
