import { z } from "zod";

const PhotoResponseSchema = z.object({
  photos: z.array(
    z.object({
      id: z.number(),
      width: z.number(),
      height: z.number(),
      url: z.string(),
      photographer: z.string(),
      photographer_url: z.string(),
      photographer_id: z.number(),
      avg_color: z.string(),
      src: z.object({
        original: z.string(),
        large: z.string(),
        large2x: z.string(),
        medium: z.string(),
        small: z.string(),
        portrait: z.string(),
        landscape: z.string(),
        tiny: z.string(),
      }),
      alt: z.string(),
    })
  ),
  page: z.number(),
  per_page: z.number(),
  total_results: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
});

export type PhotoResponse = z.infer<typeof PhotoResponseSchema>;
