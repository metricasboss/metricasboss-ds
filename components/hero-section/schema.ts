import { z } from "zod"

export const heroSectionSchema = z.object({
  title: z.string().describe("The main headline text for the hero section"),
  description: z.string().describe("Supporting description text below the title"),
  ctaText: z.string().describe("Label for the call-to-action button"),
  ctaLink: z.string().describe("URL the call-to-action button links to"),
  imageUrl: z.string().optional().describe("URL for the hero image displayed on the right"),
  imageAlt: z.string().optional().describe("Alt text for the hero image"),
  locals: z.array(z.string()).optional().describe("Array of location/date strings displayed above the title"),
})

export type HeroSectionProps = z.infer<typeof heroSectionSchema>
