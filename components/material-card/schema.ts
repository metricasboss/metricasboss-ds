import { z } from "zod"

export const materialCardSchema = z.object({
  title: z.string().describe("Title of the downloadable material"),
  description: z.string().describe("Short description of the material"),
  image: z.string().describe("Cover image URL for the material"),
  category: z.string().describe("Category label displayed as a badge on the image"),
  downloadUrl: z.string().describe("External URL where the material can be downloaded"),
})

export type MaterialCardProps = z.infer<typeof materialCardSchema>
