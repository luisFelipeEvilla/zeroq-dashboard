"use client";

import { NextUIProvider } from "@nextui-org/react";
import { OfficeFiltersProvider } from "./context/OfficeFilters";

export default function Providers({ children }: any) {
  return (
    <NextUIProvider>
      <OfficeFiltersProvider>{children}</OfficeFiltersProvider>
    </NextUIProvider>
  );
}
