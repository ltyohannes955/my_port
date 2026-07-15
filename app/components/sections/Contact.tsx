import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  Linkedin01Icon,
  InstagramIcon,
  TelegramIcon,
  Mail01Icon,
  ArrowRightDoubleIcon,
} from "@hugeicons/core-free-icons";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ltyohannes955",
    icon: Github01Icon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leul-yohannes-57420218b/",
    icon: Linkedin01Icon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/tito_lyl",
    icon: InstagramIcon,
  },
  {
    label: "Telegram",
    href: "https://t.me/tito_lyl",
    icon: TelegramIcon,
  },
  {
    label: "Email",
    href: "mailto:ltyohannes95@gmail.com",
    icon: Mail01Icon,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-dvh flex items-center justify-center py-10 px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <p className="text-accent font-mono text-sm mb-2 tracking-widest uppercase">
          07 &mdash; Contact
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-muted text-lg max-w-lg mx-auto mb-12">
          Have a project in mind or just want to say hi? I&apos;m always open
          to new opportunities and conversations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-card/50 border border-white/5 hover:border-accent/30 rounded-full px-6 py-3 transition-all"
            >
              <HugeiconsIcon
                icon={social.icon}
                size={20}
                color="currentColor"
              />
              <span className="font-medium">{social.label}</span>
              <HugeiconsIcon icon={ArrowRightDoubleIcon} size={16} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </a>
          ))}
        </div>

        <div className="bg-card/50 border border-white/5 rounded-2xl p-8 max-w-lg mx-auto">
          <p className="text-muted text-sm mb-4">
            Or send me a message directly
          </p>
          <a
            href="mailto:ltyohannes95@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-background px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <HugeiconsIcon
              icon={Mail01Icon}
              size={18}
              color="currentColor"
            />
            ltyohannes95@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
