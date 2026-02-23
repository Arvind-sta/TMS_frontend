import { MenuAsideItem } from "../../../_interfaces";
import React from "react";
import AsideMenuItem from "./Item";

export const menuItems: MenuAsideItem[] = [
  {
    label: "User & Access",
    menu: [
      { label: "Users", href: "/users" },
      { label: "Roles", href: "/roles" },
    ],
  },
  {
    label: "Master Data",
    menu: [
      { label: "Customers", href: "/customers" },
      { label: "Locations", href: "/locations" },
      { label: "Carriers", href: "/carriers" },
      { label: "Drivers", href: "/drivers" },
      { label: "Trucks", href: "/trucks" },
      { label: "Trailers", href: "/trailers" },
      { label: "Equipment Types", href: "/equipment-types" },
      { label: "Charge Types", href: "/charge-types" },
      { label: "Status Masters", href: "/status-masters" },
    ],
  },
  {
    label: "Operations",
    menu: [
      { label: "Load Board", href: "/loads" },
      { label: "Dispatch", href: "/dispatch" },
      { label: "Tracking", href: "/tracking" },
    ],
  },
  {
    label: "Reports",
    menu: [
      { label: "Reports", href: "/reports" },
    ],
  },
  {
    label: "Admin",
    menu: [
      { label: "Admin Settings", href: "/admin" },
    ],
  },
];

type AsideMenuListProps = {
  menu: MenuAsideItem[];
  onRouteChange: () => void;
};

export const AsideMenuList: React.FC<AsideMenuListProps> = ({ menu, onRouteChange }) => (
  <ul>
    {menu.map((item, idx) => (
      <AsideMenuItem key={item.label + idx} item={item} onRouteChange={onRouteChange} />
    ))}
  </ul>
);