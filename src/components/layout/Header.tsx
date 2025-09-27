"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiBars3, HiXMark } from "react-icons/hi2";

import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/projects", label: "Proyectos" },
    { href: "/members", label: "Colaboradores" },
    { href: "/join", label: "Únete" },
  ];

  const socialLinks = [
    { href: "https://github.com/Python-Hispano", label: "GitHub", icon: FaGithub },
    { href: "#", label: "LinkedIn", icon: FaLinkedin },
    { href: "https://discord.gg/J5AJNkeDjP", label: "Discord", icon: FaDiscord },
  ];

  return (
    <>
      <header className="border-border bg-background/80 fixed top-0 left-0 z-50 w-full border-b backdrop-blur-sm">
        <div className="relative flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Python Hispano - Página de Inicio"
          >
            <Image
              src="/logo.png"
              alt="Logo de Python Hispano"
              width={50}
              height={50}
              priority
            />
            <span className="text-foreground ml-2 hidden text-xl font-bold sm:inline">
              PythonHispano.com
            </span>
          </Link>

          <nav className="hidden items-center space-x-8 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-0 sm:gap-2">
            <div className="hidden items-center gap-4 lg:flex">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            <ThemeSwitcher />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground z-50 cursor-pointer rounded-md p-1 sm:p-2 lg:hidden"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <HiXMark className="h-6 w-6" />
              ) : (
                <HiBars3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div
        className={`bg-background/95 fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground text-3xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <hr className="border-border my-8 w-48" />

          <div className="flex items-center space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-foreground/60 hover:text-foreground"
              >
                <link.icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
