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
import { Button } from "@heroui/button";

import InstagramButton, { WhatsAppButton } from "./socialBtn";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <HeroUINavbar
      className="bg-[#1A1A2E] text-white font-bold p-1"
      maxWidth="xl"
      position="sticky"
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

      <NavbarContent className="hidden lg:flex font-inter" justify="end">
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

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-[#1a1a2e62]">
        <div className="mx-4 mt-2 flex flex-col gap-2 text-white">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="font-inter text-white" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="flex flex-row justify-center mt-3 gap-4 font-inter">
          <WhatsAppButton />
          <InstagramButton />
        </div>
        <div>
          <Button
            className="font-pattaya.className fixed bottom-0 left-0 w-full bg-slate-800 border-none text-1xl p-4"
            variant="bordered"
            onClick={() => (window.location.href = "/auth/login")}
          >
            {" "}
          </Button>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
