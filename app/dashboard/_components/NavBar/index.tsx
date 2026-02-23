"use client";

import React, { ReactNode, useState } from "react";
import { mdiClose, mdiDotsVertical, mdiLogout } from "@mdi/js";
import { containerMaxW } from "../../../_lib/config";
import Icon from "../../../_components/Icon";
import NavBarItemPlain from "./Item/Plain";
import NavBarMenuList from "./MenuList";
import { MenuNavBarItem } from "../../../_interfaces";

type Props = {
  menu: MenuNavBarItem[];
  className?: string;
  children: ReactNode;
};

export default function NavBar({ menu, className = "", children }: Props) {
  const [isMenuNavBarActive, setIsMenuNavBarActive] = useState(false);

  const handleMenuNavBarToggleClick = () => {
    setIsMenuNavBarActive((prev) => !prev);
  };

  const handleRouteChange = () => {
    setIsMenuNavBarActive(false);
  };

  // ✅ LOGOUT HANDLER
  const handleLogout = () => {
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.href = "/login";
  };

  return (
    <nav
      className={`${className} fixed inset-x-0 top-0 z-30 h-14 w-screen bg-gray-50 transition-(--transition-position) lg:w-auto dark:bg-slate-800`}
    >
      <div className={`flex lg:items-stretch ${containerMaxW}`}>
        {/* LEFT SIDE */}
        <div className="flex h-14 flex-1 items-stretch">
          {children}
        </div>

        {/* DESKTOP LOGOUT */}
        <div className="hidden lg:flex h-14 items-center">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition"
          >
            <Icon path={mdiLogout} size="18" />
            Logout
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex h-14 flex-none items-stretch lg:hidden">
          <NavBarItemPlain onClick={handleMenuNavBarToggleClick}>
            <Icon
              path={isMenuNavBarActive ? mdiClose : mdiDotsVertical}
              size="24"
            />
          </NavBarItemPlain>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`${
            isMenuNavBarActive ? "block" : "hidden"
          } absolute top-14 left-0 max-h-[calc(100dvh-(--spacing(14)))] w-screen overflow-y-auto bg-gray-50 shadow-lg lg:static lg:flex lg:w-auto lg:overflow-visible lg:shadow-none dark:bg-slate-800`}
        >
          <div className="flex flex-col w-full">
            <NavBarMenuList menu={menu} onRouteChange={handleRouteChange} />

            {/* MOBILE LOGOUT */}
            <button
              onClick={handleLogout}
              className="m-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}