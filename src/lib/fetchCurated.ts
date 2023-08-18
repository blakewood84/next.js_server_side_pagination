import { PhotoResponseSchema } from "@/types/photo";

export const fetchCurated = async ({ page }: { page: string }) => {
  try {
    const response = await fetch(`/api/curated?page=${page}`);
    const json = response.json();
    return PhotoResponseSchema.parse(json);
  } catch (error) {
    throw new Error("Error fetching curated photos.");
  }
};