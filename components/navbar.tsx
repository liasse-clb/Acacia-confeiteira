import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link as HeroUILink } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import InstagramButton, { IfoodLink, WhatsAppButton } from "./socialBtn";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      className="bg-[#1A1A2E] text-white font-bold p-1"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* LOGO à esquerda */}
      <NavbarContent justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="Logo do site"
              height={70}
              src={"/images/logo-cake.webp"}
              width={70}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* MENU DESKTOP */}
      <NavbarContent className="hidden lg:flex font-inter" justify="end">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            {item.href.startsWith("http") ? (
              <a
                className={clsx(
                  "ml-4 transition-colors duration-300 ease-in-out hover:text-[#C79F30]",
                )}
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.label}
              </a>
            ) : (
              <NextLink
                className={clsx(
                  "ml-4 transition-colors duration-300 ease-in-out data-[active=true]:text-primary data-[active=true]:font-medium hover:text-[#C79F30]",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* BOTÃO TOGGLE MOBILE */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* MENU MOBILE */}
      <NavbarMenu className="bg-[#1a1a2e62]">
        <div className="mx-4 mt-2 flex flex-col gap-2 text-white">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              {item.href.startsWith("http") ? (
                <a
                  className="font-inter text-white text-lg"
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <NextLink legacyBehavior passHref href={item.href}>
                  <HeroUILink
                    className="font-inter text-white"
                    size="lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </HeroUILink>
                </NextLink>
              )}
            </NavbarMenuItem>
          ))}
        </div>

        <div className="flex flex-row justify-center mt-3 gap-4 font-inter">
          <WhatsAppButton />
          <InstagramButton />
          <IfoodLink />
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
