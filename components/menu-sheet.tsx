import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";

export default function MenuSheet() {
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
      navlink: "/blogs",
      navlabel: "Blogs",
    },
    {
      navlink: "/gallery",
      navlabel: "Gallery",
    },
    {
      navlink: "/about",
      navlabel: "About",
    },
    {
      navlink: "/cart",
      navlabel: "Cart",
    },
    {
      navlink: "/contact",
      navlabel: "Contact",
    },
  ];
  return (
    <>
      <Sheet>
        <SheetTrigger>Menu</SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Rishab Portfolio App</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-4">
                {nav.map(({ navlabel, navlink }, index) => {
                  return (
                    <Link key={index} href={navlink} className="ml-4">
                      <SheetClose>{navlabel}</SheetClose>
                    </Link>
                  );
                })}
                <Button className="ml-4" asChild>
                  <Link href={"/contact"}>Contact Us</Link>
                </Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
