"use client";

import { OfficeFiltersContext } from "@/app/context/OfficeFilters";
import useOffices from "@/app/hocks/OfficesHook";
import { getOfficesService } from "@/app/services/offices";
import { Office } from "@/app/types/office";
import OfficeCard from "@/components/cards/OfficeCard/OfficeCard";
import { useContext, useEffect, useState } from "react";

export default function OfficesGrid(props: { offices: Office[]}) {
    const { offices } = useOffices();

    return (
        <div className="flex flex-wrap gap-4 ">
            {offices?.map((office) => (
                <OfficeCard key={office.id} {...office} />
            ))}
        </div>
    )
}