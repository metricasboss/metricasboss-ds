import { z } from "zod"

export const authorCardSchema = z.object({
  name: z.string().describe("Full name of the author"),
  slug: z.string().describe("URL slug for the author profile page"),
  role: z.string().optional().describe("Professional role or title of the author"),
  bio: z.string().optional().describe("Short biography text"),
  avatarUrl: z.string().optional().describe("URL of the author's avatar image"),
  linkedinUrl: z.string().optional().describe("URL to the author's LinkedIn profile"),
  articleCount: z.number().optional().describe("Number of articles written by the author"),
  categories: z.array(z.string()).optional().describe("List of category names the author writes about"),
})

export type AuthorCardProps = z.infer<typeof authorCardSchema>
