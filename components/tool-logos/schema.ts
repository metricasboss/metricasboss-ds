import { z } from 'zod'

export const toolLogosSchema = z.object({
  tool: z
    .enum(['ga4', 'bigquery', 'googleAds', 'lookerStudio', 'gtm', 'mixpanel', 'amplitude'])
    .describe('Which tool logo to render'),
  size: z
    .number()
    .optional()
    .describe('Width and height in pixels (default: 32)'),
  className: z
    .string()
    .optional()
    .describe('CSS class applied to the SVG element'),
})
