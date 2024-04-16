import { getOfficesService } from "./services/offices";
import OfficeCard from "@/components/cards/OfficeCard";
export default async function Home() {
  const offices = await getOfficesService();

  return (
    <main className="max-w-[1024px] mx-auto py-8">
      <div className="flex flex-wrap gap-4 ">
        {offices.map((office) => (
          <OfficeCard key={office.id} {...office} />
        ))}
      </div>
    </main>
  );
}
