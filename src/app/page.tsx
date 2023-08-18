import { fetchCurated } from "@/lib/fetchCurated";
import Image from "next/image";
import Link from "next/link";

// Pages are per_page / total
export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = typeof searchParams.page === "string" ? searchParams.page : "1";
  const result = await fetchCurated({ page });
  return (
    <main className="container mx-auto">
      <div className="p-10">Hello</div>
      <div className="flex flex-wrap">
        {result.photos.map((photo, index) => {
          return (
            <div className="relative w-[300px] h-[200px]" key={index}>
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
      <div className="w-full flex justify-center gap-4 pt-10">
        <Link
          href={`?page=${Number(page) + 1}`}
          className="border rounded px-4 py-1 cursor-pointer"
        >
          Next
        </Link>
        <Link
          href={Number(page) > 2 ? `?page=${Number(page) - 1}` : "/"}
          className="border rounded px-4 py-1 cursor-pointer"
        >
          Previous
        </Link>
      </div>
    </main>
  );
}
