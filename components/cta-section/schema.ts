import { z } from "zod"

export const ctaSectionSchema = z.object({
  title: z.string().describe("Main heading for the CTA section"),
  description: z.string().optional().describe("Supporting text below the title"),
  primaryAction: z.string().describe("Label for the primary action button"),
  primaryHref: z.string().describe("URL for the primary action button"),
  secondaryAction: z.string().optional().describe("Label for the secondary action button"),
  secondaryHref: z.string().optional().describe("URL for the secondary action button"),
  variant: z.enum(["default", "card"]).optional().describe("Visual variant: 'default' renders inline, 'card' wraps in a bordered card"),
})

export type CtaSectionProps = z.infer<typeof ctaSectionSchema>
