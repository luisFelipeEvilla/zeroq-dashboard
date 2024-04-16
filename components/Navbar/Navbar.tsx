"use client";

import { OfficeFiltersContext } from "@/app/context/OfficeFilters";
import { useContext, useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { useDebounce } from "@/app/hocks/useDebounce";

export default function Navbar() {
  const {search, setSearch} = useContext(OfficeFiltersContext);

  return (
    <nav className="bg-secondary w-full">
      <div className="max-w-[1024px] mx-auto py-3">
        <form className="">
          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Buscar sucursal"
              className={`w-[350px] bg-white rounded-sm py-[2px] pl-10  text-base
              focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50`}
            />
            <img
              src="/icons/search.png"
              alt="Buscar"
              className="w-5 h-5 absolute top-[6px] left-2"
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
