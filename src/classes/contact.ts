import { MouseEventHandler } from "react";

export interface Contact {
  icon: string,
  color: string,
  colorDark?: string,
  textDark?: string,
  text: string,
  link?: string
}