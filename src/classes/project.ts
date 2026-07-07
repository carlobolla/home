export interface Project {
  slug: string,
  imgLink: string,
  text: string,
  description?: string,
  /** URL to a live demo/site. Omit for projects with no live demo (e.g. physical hardware). */
  link?: string,
  external?: boolean,
  /** GitHub repo in "owner/repo" format, used to fetch the README for the detail page. */
  repo?: string,
  /** Branch to read the README from. Defaults to "main". */
  branch?: string
}