import { PhotoResponseSchema } from "@/types/photo";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.PEXELS_API_KEY ?? "",
      connection: "keep-alive",
    },
  };

  const url =
    `${process.env.PEXELS_API_ENDPOINT}/curated?` +
    new URLSearchParams({
      page: "1",
      per_page: "15",
    });

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const result = PhotoResponseSchema.parse(json);
    return NextResponse.json(result);
  } catch (error) {
    console.log("error: ", error);
    return new Response("Request Error ", { status: 500 });
  }
}
