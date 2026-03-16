import { z } from "zod"

export const articleHeroSchema = z.object({
  category: z.string().describe("Category badge label displayed above the title"),
  title: z.string().describe("Article headline"),
  description: z.string().describe("Article summary or subtitle"),
  authorName: z.string().describe("Name of the article author"),
  authorAvatar: z.string().describe("Avatar image URL of the author"),
  authorDate: z.string().describe("Publication date string"),
  readTime: z.string().describe("Estimated reading time, e.g. '5 min de leitura'"),
  image: z.string().describe("Featured image URL displayed below the meta info"),
})

export type ArticleHeroProps = z.infer<typeof articleHeroSchema>
