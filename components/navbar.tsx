import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <HeroUINavbar
      className="bg-[#1A1A2E] text-white font-bold"
      maxWidth="xl"
      position="sticky"
    >
      {/* LOGO à esquerda */}
      <NavbarContent justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 pt-4"
            href="/"
          >
            <Image
              alt="Logo do site"
              height={70}
              src={"/logo-cake.webp"}
              width={70}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* LINKS à direita */}
      <NavbarContent className="hidden lg:flex" justify="end">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                "ml-4 transition-colors duration-300 ease-in-out data-[active=true]:text-primary data-[active=true]:font-medium hover:text-[#C79F30]",
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* TOGGLE MOBILE */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-white" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
