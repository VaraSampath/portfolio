"use client";

import {
  IconContract,
  IconDevices2,
  IconPinnedFilled,
  IconTimeline,
  IconUser,
} from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

const Navbar = ({
  activeNav,
  setActiveNav,
}: {
  activeNav: number;
  setActiveNav: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <nav className="flex flex-col gap-4">
      <button
        className={activeNav == 0 ? "active-nav" : "inactive-nav"}
        onClick={() => {
          setActiveNav(0);
        }}
      >
        <IconUser color={activeNav == 0 ? "black" : "white"} />
      </button>
      <button
        className={activeNav == 1 ? "active-nav" : "inactive-nav"}
        onClick={() => {
          setActiveNav(1);
        }}
      >
        <IconDevices2 color={activeNav == 1 ? "black" : "white"} />
      </button>
      <button
        className={activeNav == 2 ? "active-nav" : "inactive-nav"}
        onClick={() => {
          setActiveNav(2);
        }}
      >
        <IconPinnedFilled color={activeNav == 2 ? "black" : "white"} />
      </button>
      <button
        className={activeNav == 3 ? "active-nav" : "inactive-nav"}
        onClick={() => {
          setActiveNav(3);
        }}
      >
        <IconTimeline color={activeNav == 3 ? "black" : "white"} />
      </button>
      <button
        className={activeNav == 4 ? "active-nav" : "inactive-nav"}
        onClick={() => {
          setActiveNav(4);
        }}
      >
        <IconContract color={activeNav == 4 ? "black" : "white"} />
      </button>
    </nav>
  );
};

export default Navbar;
