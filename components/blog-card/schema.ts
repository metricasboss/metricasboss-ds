import { z } from "zod"

export const blogCardSchema = z.object({
  slug: z.string().describe("URL slug for the blog post"),
  image: z.string().describe("Cover image URL for the blog post"),
  category: z.string().describe("Category label displayed as a badge on the image"),
  title: z.string().describe("Blog post title"),
  description: z.string().describe("Short excerpt or description of the blog post"),
  authorName: z.string().describe("Name of the blog post author"),
  authorAvatar: z.string().describe("Avatar image URL of the author"),
  readTime: z.string().describe("Estimated reading time, e.g. '5 min de leitura'"),
})

export type BlogCardProps = z.infer<typeof blogCardSchema>
