import { fetchCurated } from "@/lib/fetchCurated";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = typeof searchParams.page === "string" ? searchParams.page : "1";
  const result = (await fetchCurated({ page })).photos;
  const timeout = await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main className="container mx-auto">
      <div className="p-10">Hello</div>
      <div className="flex flex-wrap">
        {result.map((photo, index) => {
          return (
            <div className="relative w-[300px] h-[200px]">
              <Image
                className="object-cover"
                src={photo.src.landscape}
                fill
                alt={`Photo by ${photo.photographer}`}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
