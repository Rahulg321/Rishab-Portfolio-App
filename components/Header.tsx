import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MenuSheet from "./menu-sheet";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="border-b-2 sticky bg-background top-0 z-50 py-6 px-8">
      <div className="flex justify-between items-center">
        <div>
          <MenuSheet />
        </div>
        <div>
          <Link href={"/home"} className="text-2xl font-bold">
            Rishab Store
          </Link>
        </div>
        <div>
          <div className="text-xl px-4 py-2 dark:bg-gray-600 rounded-xl">
            <Link href={"/cart"}>
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
