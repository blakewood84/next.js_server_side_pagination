import "server-only";

import { cache } from "react";
import { PhotoResponseSchema } from "@/types/photo";

export const fetchCurated = cache(
  async ({
    page = "1",
    per_page = "15",
  }: {
    page?: string;
    per_page?: string;
  }) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/curated?page=${page}&per_page=${per_page}`
      );
      const json = await response.json();
      return PhotoResponseSchema.parse(json);
    } catch (error) {
      console.log("error: ", error);
      throw new Error(`Error fetching curated photos: ${error}`);
    }
  }
);
