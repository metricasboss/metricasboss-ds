import { z } from "zod";

export const hugeIconSchema = z.object({
  size: z
    .number()
    .optional()
    .describe("Icon size in pixels (default: 24)"),
  strokeWidth: z
    .number()
    .optional()
    .describe("Stroke width (default: 1.5)"),
  primaryColor: z
    .string()
    .optional()
    .describe("Primary color (CSS color string)"),
  secondaryColor: z
    .string()
    .optional()
    .describe("Secondary color for duotone icons"),
  disableSecondaryOpacity: z
    .boolean()
    .optional()
    .describe("Disable opacity on secondary color"),
});
