import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, NavLink } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Login from "@/pages/Auth/Login";

import { Menu } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="py-3 px-2 flex items-center justify-between  ">
      {/* LOGO */}
      <div className="font-semibold text-xl">
        <NavLink to={"/"}> BookMyPlay </NavLink>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:block ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem >
              <NavLink to={"/about"} className="px-3 font-medium hover:font-semibold hover:text-green-600 duration-150">
                <NavigationMenuLink >
                  About Us
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem >
              <NavLink to={"/contact"} className="px-3 font-medium hover:font-semibold hover:text-green-600 duration-150">
                <NavigationMenuLink >
                  Contact Us
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* MOBILE MENU */}
      <div className="block lg:hidden ml-auto">
        <Sheet>
          <SheetTrigger>
            <Menu className="size-8 text-right " />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* THEME TOGGLE */}

      {/* LOGIN LOGOUT PROFILE */}
      <div className="flex items-center lg:gap-4">
        <ThemeSwitcher />
        <Button variant={"outline"}>
        <Login />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
