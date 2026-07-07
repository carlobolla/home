import { FaBluesky, FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const contactIcons: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  telegram: FaTelegram,
  discord: FaDiscord,
  instagram: FaInstagram,
  bluesky: FaBluesky,
};

/** Windows' system emoji font has no flag glyphs and renders 🇮🇹 as literal "IT", so draw it ourselves. */
export const ItalyFlag = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 3 2"
    role="img"
    aria-label="Italy"
    className={"inline-block w-[1.2em] h-[0.8em] align-[-0.15em] rounded-[1px] " + (className ?? "")}
  >
    <rect width="1" height="2" fill="#008C45" />
    <rect x="1" width="1" height="2" fill="#F4F5F0" />
    <rect x="2" width="1" height="2" fill="#CD212A" />
  </svg>
);
