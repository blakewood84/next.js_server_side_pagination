import { PhotoResponseSchema } from "@/types/photo";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.PEXELS_API_KEY ?? "",
    },
    cache: "force-cache" as RequestCache,
  };

  const url =
    `${process.env.PEXELS_API_ENDPOINT}/?` +
    new URLSearchParams({
      page: "1",
      per_page: "15",
    });

  try {
    const response = await fetch(url, options).then(
      async (res) => await res.json()
    );
    const result = PhotoResponseSchema.parse(response);
    return NextResponse.json(result);
  } catch (error) {
    console.log("error: ", error);
  }
}
