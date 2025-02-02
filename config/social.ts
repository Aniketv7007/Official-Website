import { SocialConfig } from "@/types";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";


export const socialConfig: SocialConfig[] = [
  {
    title: "GitHub",
    href: "https://github.com/FrontendFreaks",
    iconName: Github,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/frontendfreaks",
    iconName: Twitter,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/c/VishalRajput_1",
    iconName: Youtube,
  },{
    title: "Instagram",
    href: "https://www.instagram.com/vishalraj.dev/",    
    iconName: Instagram,
  },{
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/frontendfreaks/",
    iconName: Linkedin,
  },
];

// '<Icons.youtube className="h-9 w-9 hover:text-[#8fa0be] dark:hover:text-[#30405c]" />'