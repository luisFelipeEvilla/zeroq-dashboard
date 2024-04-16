"use client";

import { OfficeFiltersContext } from "@/app/context/OfficeFilters";
import { useContext, useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { useDebounce } from "@/app/hocks/useDebounce";

export default function Navbar() {
  const {search, setSearch} = useContext(OfficeFiltersContext);

  return (
    <nav className="bg-secondary w-full">
      <div className="w-full flex justify-center xl:max-w-[1024px] md:justify-start mx-auto py-3 px-4">
        <form className="">
          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Buscar sucursal"
              className={`w-[300px] md:w-[350px] bg-white rounded-sm py-[2px] pl-10  text-base
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
