"use client";

import { useContext, useEffect, useState } from "react";
import { getOfficesService } from "../../services/offices";
import { Office } from "../../types/office";
import { OfficeFiltersContext } from "../../context/OfficeFilters";
import { useDebounce } from "../useDebounce";

export default function useOffices(props: { offices?: Office[] }) {
  const [offices, setOffices] = useState<Office[]>(props.offices || []);
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
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [debouncedSearch]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await getOfficesService({ name: debouncedSearch });
      setOffices(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return { offices, loading, fetchData, error };
}
