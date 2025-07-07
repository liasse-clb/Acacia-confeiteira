export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Nossos Bolos",
      href: "/bolos",
    },
    {
      label: "Pedir",
      href: "/pricing",
    },
    {
      label: "Contato",
      href: "/blog",
    },
    {
      label: "Sobre",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Nossos Bolos",
      href: "/docs",
    },
    {
      label: "Pedir",
      href: "/pricing",
    },
    {
      label: "Contato",
      href: "/blog",
    },
    {
      label: "Sobre",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    whatsapp: "https://wa.link/9oact3",
    whatsapp2: "https://wa.link/8a525g",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
