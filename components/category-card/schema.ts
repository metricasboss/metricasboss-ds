import { z } from "zod"

export const categoryCardSchema = z.object({
  name: z.string().describe("Category display name"),
  slug: z.string().describe("URL slug for the category page"),
  description: z.string().optional().describe("Short description of the category"),
  articleCount: z.number().describe("Number of articles in this category"),
  authorCount: z.number().describe("Number of authors writing in this category"),
})

export type CategoryCardProps = z.infer<typeof categoryCardSchema>
