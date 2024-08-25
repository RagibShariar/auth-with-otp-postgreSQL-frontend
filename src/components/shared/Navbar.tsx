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

const Navbar = () => {
  return (
    <nav className="py-3 px-2 flex items-center justify-between bg-red-300 ">
      {/* LOGO */}
      <div className="">
        <NavLink to={"/"}> Logo </NavLink>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to={"/"}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
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
        <Login />
      </div>
    </nav>
  );
};

export default Navbar;
