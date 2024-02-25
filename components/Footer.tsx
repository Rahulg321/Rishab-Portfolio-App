import React from "react";
import ThemeSwitchButton from "./theme-switch";
import Link from "next/link";

const Footer = () => {
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
    {
      navlink: "/cart",
      navlabel: "Cart",
    },
  ];
  return (
    <footer className="border-t-2 block-space">
      <div className="big-container">
        <div className="flex justify-between">
          <div>Medusa Store</div>

          <div className="flex gap-6">
            <div>
              <span>Medusa</span>
              {nav.map(({ navlink, navlabel }, index) => {
                return (
                  <div key={index}>
                    <Link href={navlink}>{navlabel}</Link>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col">
              <span>Collections</span>
              <span>Shirts</span>
              <span>Jeans</span>
              <span>Lowers</span>
              <span>Shorts</span>
            </div>
            <div className="flex flex-col">
              <span>Categories</span>
              <span>Men</span>
              <span>Women</span>
              <span>Children</span>
            </div>
            <div>
              <span>Preferences</span>
              <div className="mt-4">
                <ThemeSwitchButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
