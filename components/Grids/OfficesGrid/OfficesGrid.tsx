"use client";

import useOffices from "@/app/hocks/OfficesHook";
import { Office } from "@/app/types/office";
import OfficeCard from "@/components/cards/OfficeCard/OfficeCard";
import { Spinner } from "@nextui-org/react";

export default function OfficesGrid(props: { offices: Office[] }) {
  const { offices, loading } = useOffices();

  return (
    <div className="flex justify-center md:justify-start flex-wrap gap-4 h-full w-full">
      {loading ? (
        <div className="m-auto">
          <Spinner size="lg" color="danger" />
        </div>
      ) : (
        offices?.map((office) => <OfficeCard key={office.id} {...office} />)
      )}
    </div>
  );
}
