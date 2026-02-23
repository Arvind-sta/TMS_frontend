
"use client";
import AsideMenu from "./_components/AsideMenu";
import NavBar from "./_components/NavBar";
import { menuItems } from "./_components/AsideMenu/List";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      <AsideMenu
        menu={menuItems}
        isAsideMobileExpanded={false}
        isAsideLgActive={true}
        onAsideLgClose={() => {}}
        onRouteChange={() => {}}
      />

      <div className="flex-1 flex flex-col">
        <NavBar menu={[]} className="">
          <></>
        </NavBar>

        <main className="flex-1 p-6 bg-gray-100 dark:bg-slate-800">
          {children}
        </main>
      </div>
    </div>
  );
}