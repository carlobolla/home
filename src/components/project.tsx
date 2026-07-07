import { Link as RouterLink } from "react-router-dom";
import { Card, buttonVariants } from "@heroui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Project } from "../classes";

export const ProjectCard = (props: Project) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <RouterLink to={`/projects/${props.slug}`}>
        <img
          src={props.imgLink}
          alt={props.text}
          className="project-thumb w-full aspect-video object-cover"
        />
      </RouterLink>
      <Card.Content className="flex flex-col gap-1 flex-grow">
        <Card.Title>{props.text}</Card.Title>
        {props.description && <Card.Description>{props.description}</Card.Description>}
      </Card.Content>
      <Card.Footer className="flex flex-wrap gap-2">
        <RouterLink
          to={`/projects/${props.slug}`}
          className={buttonVariants({ variant: "outline", size: "sm" }) + " flex-1"}
        >
          Details
        </RouterLink>
        {props.link && (
          <a
            href={props.link}
            target={props.external ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "primary", size: "sm" }) + " flex-1"}
          >
            Live <FiExternalLink />
          </a>
        )}
        {props.repo && (
          <a
            href={`https://github.com/${props.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "primary", size: "sm" }) + " flex-1"}
          >
            <FiGithub /> Code
          </a>
        )}
      </Card.Footer>
    </Card>
  );
};
