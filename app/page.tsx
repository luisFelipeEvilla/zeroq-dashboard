import OfficesGrid from "@/components/Grids/OfficesGrid/OfficesGrid";
import { getOfficesService } from "./services/offices";
import OfficeCard from "@/components/cards/OfficeCard/OfficeCard";
export default async function Home() {
  const offices = await getOfficesService();

  return (
    <main className="max-w-[1024px] mx-auto py-8 px-4 h-full">
      <OfficesGrid offices={offices} />
    </main>
  );
}
