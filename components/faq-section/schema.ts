import { z } from "zod"

export const faqItemSchema = z.object({
  question: z.string().describe("The FAQ question text"),
  answer: z.string().describe("The FAQ answer text"),
})

export const faqSectionSchema = z.object({
  title: z.string().describe("Section heading displayed above the FAQ items"),
  items: z.array(faqItemSchema).describe("Array of question/answer pairs"),
})

export type FaqItem = z.infer<typeof faqItemSchema>
export type FaqSectionProps = z.infer<typeof faqSectionSchema>
