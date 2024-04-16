"use client";

import { OfficeFiltersProvider } from "./context/OfficeFilters";

export default function Providers({children}: any) {
    return (
        <OfficeFiltersProvider>
            {children}
        </OfficeFiltersProvider>
    )
}