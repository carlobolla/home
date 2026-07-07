import { useEffect, useState } from "react";
import { Project } from "../classes";

const localReadmes = import.meta.glob<string>("/src/content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export type ReadmeState =
  | { status: "loading" }
  | { status: "ready"; content: string }
  | { status: "empty" };

export function useProjectReadme(project?: Project): ReadmeState {
  const [state, setState] = useState<ReadmeState>({ status: "loading" });

  useEffect(() => {
    if (!project) {
      setState({ status: "empty" });
      return;
    }

    let cancelled = false;
    setState({ status: "loading" });

    const localContent = localReadmes[`/src/content/projects/${project.slug}.md`];

    (async () => {
      if (project.repo) {
        const branch = project.branch ?? "main";
        try {
          const res = await fetch(`https://raw.githubusercontent.com/${project.repo}/${branch}/README.md`);
          if (res.ok) {
            const text = await res.text();
            if (!cancelled) setState({ status: "ready", content: text });
            return;
          }
        } catch {
          // network/CORS error - fall through to local content/empty state
        }
      }

      if (localContent) {
        if (!cancelled) setState({ status: "ready", content: localContent });
        return;
      }

      if (!cancelled) setState({ status: "empty" });
    })();

    return () => {
      cancelled = true;
    };
  }, [project?.slug, project?.repo, project?.branch]);

  return state;
}
