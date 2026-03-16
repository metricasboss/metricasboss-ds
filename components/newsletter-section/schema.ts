import { z } from "zod"

export const newsletterSectionSchema = z.object({
  title: z.string().optional().default("Anti Achismo Social Club").describe("Heading text for the newsletter section"),
  description: z.string().optional().describe("Description text below the title"),
  substackUrl: z.string().describe("Base Substack URL for the embed iframe, e.g. 'https://lucianfialho.substack.com'"),
})

export type NewsletterSectionProps = z.infer<typeof newsletterSectionSchema>
