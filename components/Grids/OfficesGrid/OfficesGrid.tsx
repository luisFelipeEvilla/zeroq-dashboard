"use client";

import useOffices from "@/app/hocks/useOffices/OfficesHook";
import { Office } from "@/app/types/office";
import OfficeCard from "@/components/cards/OfficeCard/OfficeCard";
import mockOffices from "@/app/mock/offices.json";

export default function OfficesGrid(props: { offices: Office[] }) {
  const { offices, loading } = useOffices({ offices: props.offices });

  return (
    <div className="flex justify-center md:justify-start flex-wrap gap-4 h-full w-full">
      {loading ? <LoadingView /> : <ResultsView />}
    </div>
  );

  function LoadingView() {
    return mockOffices.map((office) => (
      <OfficeCard key={office.id} {...office} isLoading={true} />
    ));
  }

  function ResultsView() {
    if (offices.length > 0) {
      return offices.map((office) => (
        <OfficeCard key={office.id} {...office} isLoading={loading} />
      ));
    }

    return (
      <p className="text-white text-3xl text-center">
        Ops... Parece que no se encontraron sucursales
      </p>
    );
  }
}
