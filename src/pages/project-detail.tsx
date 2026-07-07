import { Link as RouterLink, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { EmptyState, Spinner, Typography, buttonVariants } from "@heroui/react";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { Navbar } from "../components";
import { Project } from "../classes";
import { useProjectReadme } from "../hooks/useProjectReadme";
import projectsData from "../projects.json";

const projects = projectsData as Project[];

function stripImages(markdown: string): string {
  return markdown
    .replace(/<img\b[^>]*\/?>/gi, "")
}

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const readme = useProjectReadme(project);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <EmptyState>Project not found.</EmptyState>
          <RouterLink to="/" className={buttonVariants({ variant: "outline" }) + " mt-6 inline-flex"}>
            <FiArrowLeft /> Back home
          </RouterLink>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-10">
        <RouterLink
          to="/#projects"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-6"
        >
          <FiArrowLeft /> Back to projects
        </RouterLink>

        <Typography.Heading level={1} className="gradient-text text-3xl sm:text-4xl font-bold mb-2">
          {project.text}
        </Typography.Heading>
        {project.description && (
          <Typography.Paragraph color="muted" className="mb-6">
            {project.description}
          </Typography.Paragraph>
        )}

        <img
          src={project.imgLink}
          alt={project.text}
          className="w-full rounded-xl border border-separator mb-6"
        />

        <div className="flex flex-wrap gap-3 mb-10">
          {project.link && (
            <a
              href={project.link}
              target={project.external ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "primary" })}
            >
              View live <FiExternalLink />
            </a>
          )}
          {project.repo && (
            <a
              href={`https://github.com/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "primary" })}
            >
              <FiGithub /> View source
            </a>
          )}
        </div>

        {readme.status === "loading" && (
          <div className="flex justify-center py-10">
            <Spinner />
          </div>
        )}
        {readme.status === "empty" && <EmptyState>Details coming soon...</EmptyState>}
        {readme.status === "ready" && (
          <Typography.Prose>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{stripImages(readme.content)}</ReactMarkdown>
          </Typography.Prose>
        )}
      </div>
    </>
  );
};
