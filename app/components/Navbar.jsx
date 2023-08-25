"use client";

import Image from "next/image";
import logo from "../../public/logo.svg";
import Select from "./Select";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { useSearchParams } from "next/navigation";

export function Navbar({ shipmentList }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  const search = searchParams.get("q");

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [search]);
  return (
    <>
      <header className="h-full max-h-screen overflow-y-auto flex items-center justify-between md:justify-items-start mt-4 flex-wrap">
        <nav className="flex gap-11">
          <Image src={logo} alt="logo" width={212} quality={100} />
          <div className="hidden md:block">
            <Select shipmentList={shipmentList} />
          </div>
        </nav>

        <button
          class="text-white block md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <i className="fa fa-close text-lg" />
          ) : (
            <i className="fa fa-bars text-lg" />
          )}
        </button>
      </header>
      <div class={`menu ${isOpen ? "active" : ""}`}>
        <ul className="h-full overflow-scroll">
          {shipmentList.map((item) => (
            <ListItem name={item.name} />
          ))}
        </ul>
      </div>
    </>
  );
}
