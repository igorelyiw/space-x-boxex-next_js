"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function ListItem({ name }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("q");

  return (
    <li className={search === name ? "text-white" : ""}>
      <Link href={`?q=${name}`}>{name}</Link>
    </li>
  );
}
