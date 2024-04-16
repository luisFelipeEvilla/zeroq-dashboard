"use client";

import { useContext, useEffect, useState } from "react";
import { getOfficesService } from "../services/offices";
import { Office } from "../types/office";
import { OfficeFiltersContext } from "../context/OfficeFilters";

export default function useOffices() {
    const [offices, setOffices] = useState<Office[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { search } = useContext(OfficeFiltersContext);

    useEffect(() => {
        fetchData();
    }, [search]);

    async function fetchData() {
        setLoading(true);
        const response = await getOfficesService({ name: search });
        setOffices(response);
        setLoading(false);
    }

    return { offices, loading, fetchData };
}