import { HugeiconsIcon } from "@hugeicons/react";
import type { HugeiconsIconProps } from "@hugeicons/react";

export type { HugeiconsIconProps, IconSvgElement } from "@hugeicons/react";

export interface IconProps extends HugeiconsIconProps {
  /** Icon size in px (default: 24) */
  size?: number;
  /** Stroke width (default: 1.5) */
  strokeWidth?: number;
}

/**
 * Icon — wrapper around HugeIcons React.
 *
 * Import the icon data from the icon package you want:
 *   import { Home01Icon } from "@hugeicons/core-free-icons"
 *
 * Then pass it as the `icon` prop:
 *   <Icon icon={Home01Icon} size={20} />
 */
export function Icon({ size = 24, strokeWidth = 1.5, ...props }: IconProps) {
  return <HugeiconsIcon size={size} strokeWidth={strokeWidth} {...props} />;
}
