import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  const nav = [
    {
      navlink: "/home",
      navlabel: "Home",
    },
    {
      navlink: "/products",
      navlabel: "Products",
    },
    {
      navlink: "/about",
      navlabel: "About",
    },
  ];

  return (
    <header className="border-b-2 sticky bg-background top-0 z-50 py-6 px-4">
      <div className="flex justify-between items-center">
        <div>
          <h3>Rishab App</h3>
        </div>
        <nav className="">
          {nav.map(({ navlabel, navlink }, index) => {
            return (
              <Link key={index} href={navlink} className="ml-4">
                {navlabel}
              </Link>
            );
          })}
          <Button className="ml-4" asChild>
            <Link href={"/contact"}>Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
