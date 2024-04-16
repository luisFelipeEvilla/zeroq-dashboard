"use client";

import { useContext, useEffect, useState } from "react";
import { getOfficesService } from "../services/offices";
import { Office } from "../types/office";
import { OfficeFiltersContext } from "../context/OfficeFilters";
import { useDebounce } from "./useDebounce";

export default function useOffices() {
    const [offices, setOffices] = useState<Office[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { search } = useContext(OfficeFiltersContext);

    const debouncedSearch = useDebounce(search, 300);

    useEffect(() => {
        const interval = setInterval(() => {
            if (loading) return;
            fetchData();
        }, 60000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        console.log("fetching data...")
        fetchData();
    }, [debouncedSearch]);

    async function fetchData() {
        console.log(debouncedSearch);
        console.log(search)
        setLoading(true);
        const response = await getOfficesService({ name: debouncedSearch });
        setOffices(response);
        setLoading(false);
    }

    return { offices, loading, fetchData, error };
}