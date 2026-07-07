import { CSSProperties } from "react";
import { Contact } from "../classes";
import { contactIcons } from "./icons";

export const ContactInfo = (props: Contact) => {
  const Icon = contactIcons[props.icon];

  const style = {
    "--pill-color": props.color,
    "--pill-color-dark": props.colorDark ?? props.color,
    "--pill-text-hover-dark": props.textDark ?? "#ffffff",
  } as CSSProperties;

  return (
    <a
      href={props.link}
      style={style}
      className="contact-pill flex items-center justify-center gap-2 rounded-full border px-4 py-2"
    >
      {Icon && <Icon size={20} />}
      <span>{props.text}</span>
    </a>
  );
};
