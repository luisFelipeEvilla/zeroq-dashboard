"use client";

import { createContext, useState } from "react";

export const OfficeFiltersContext = createContext({
  online: true,
  setOnline: (online: boolean) => {},
  search: "",
  setSearch: (search: string) => {},
});

export const OfficeFiltersProvider = ({ children }: any) => {
  const [online, setOnline] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <OfficeFiltersContext.Provider
      value={{ online, setOnline, search, setSearch }}
    >
      {children}
    </OfficeFiltersContext.Provider>
  );
};
