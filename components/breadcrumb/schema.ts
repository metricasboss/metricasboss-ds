import { z } from "zod"

export const breadcrumbItemSchema = z.object({
  label: z.string().describe("Display text for the breadcrumb item"),
  href: z.string().optional().describe("URL link for the breadcrumb item. If omitted, renders as plain text (current page)."),
})

export const breadcrumbSchema = z.object({
  items: z.array(breadcrumbItemSchema).describe("Ordered list of breadcrumb items from root to current page"),
})

export type BreadcrumbItem = z.infer<typeof breadcrumbItemSchema>
export type BreadcrumbProps = z.infer<typeof breadcrumbSchema>
