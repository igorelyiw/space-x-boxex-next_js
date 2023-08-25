"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Select({ shipmentList }) {
  const [value, setValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    router.push(`/?q=${value}`);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form>
      <div className="relative">
        <input
          type="search"
          list="list"
          autoComplete="on"
          value={value}
          placeholder="Search"
          className="w-[320px] p-4 pl-10 text-sm rounded-lg bg-transparent border-solid border-2 border-black bg-white"
          onChange={handleChange}
        />
        <i className="fa fa-search search-icon" />
        <datalist id="list">
          {shipmentList.map((d) => (
            <option key={d.id} data-value={d.id}>
              {d.name}
            </option>
          ))}
        </datalist>
      </div>
    </form>
  );
}
