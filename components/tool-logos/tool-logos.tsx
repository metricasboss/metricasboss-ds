import type { SVGProps } from "react"

export interface ToolLogoProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function GoogleAnalytics4({ size = 32, ...props }: ToolLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google Analytics 4"
      {...props}
    >
      <rect width="192" height="192" rx="24" fill="white" />
      <path
        d="M108 144V68c0-6.627 5.373-12 12-12s12 5.373 12 12v76c0 6.627-5.373 12-12 12s-12-5.373-12-12z"
        fill="#F9AB00"
      />
      <path
        d="M60 144v-28c0-6.627 5.373-12 12-12s12 5.373 12 12v28c0 6.627-5.373 12-12 12s-12-5.373-12-12z"
        fill="#E37400"
      />
      <circle cx="120" cy="144" r="12" fill="#F9AB00" />
      <path
        d="M84 144V100c0-6.627 5.373-12 12-12s12 5.373 12 12v44"
        fill="#E8EAED"
      />
      <path
        d="M84 144V100c0-6.627 5.373-12 12-12s12 5.373 12 12v44c0 6.627-5.373 12-12 12s-12-5.373-12-12z"
        fill="#4285F4"
      />
    </svg>
  )
}

export function GoogleBigQuery({ size = 32, ...props }: ToolLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google BigQuery"
      {...props}
    >
      <rect width="192" height="192" rx="24" fill="white" />
      <path
        d="M96 24C57.34 24 26 55.34 26 94c0 38.66 31.34 70 70 70 15.07 0 29.03-4.77 40.42-12.87l19.73 19.73c3.12 3.12 8.19 3.12 11.31 0 3.12-3.12 3.12-8.19 0-11.31l-19.73-19.73C155.23 123.03 160 109.07 160 94c0-38.66-31.34-70-70-70z"
        fill="#4285F4"
      />
      <path
        d="M96 40c29.82 0 54 24.18 54 54s-24.18 54-54 54-54-24.18-54-54 24.18-54 54-54z"
        fill="white"
      />
      <path
        d="M80 76h32v8H80v-8zM80 92h32v8H80v-8zM80 108h20v8H80v-8z"
        fill="#4285F4"
      />
      <path
        d="M148 148l16 16"
        stroke="#4285F4"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GoogleAds({ size = 32, ...props }: ToolLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google Ads"
      {...props}
    >
      <rect width="192" height="192" rx="24" fill="white" />
      <path
        d="M32 136L80 52l24 41.57L80 136H32z"
        fill="#FBBC04"
      />
      <path
        d="M104 93.57L80 52l48-28 24 41.57L128 112 104 93.57z"
        fill="#4285F4"
      />
      <path
        d="M128 112l24-46.43L160 112l-16 24H96l32-24z"
        fill="#34A853"
      />
      <circle cx="48" cy="136" r="16" fill="#FBBC04" />
      <circle cx="144" cy="136" r="16" fill="#34A853" />
    </svg>
  )
}

export function LookerStudio({ size = 32, ...props }: ToolLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Looker Studio"
      {...props}
    >
      <rect width="192" height="192" rx="24" fill="white" />
      <circle cx="96" cy="96" r="64" fill="#4285F4" />
      <path
        d="M96 32v64l45.25 45.25C122.87 157.47 110.02 160 96 160c-35.35 0-64-28.65-64-64s28.65-64 64-64z"
        fill="#34A853"
      />
      <path
        d="M96 96l45.25 45.25C128.08 153.28 112.78 160 96 160V96z"
        fill="#FBBC04"
      />
      <circle cx="96" cy="96" r="24" fill="white" />
    </svg>
  )
}

export function GoogleTagManager({ size = 32, ...props }: ToolLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google Tag Manager"
      {...props}
    >
      <rect width="192" height="192" rx="24" fill="white" />
      <path
        d="M96 28L28 96l68 68 68-68L96 28z"
        fill="#8AB4F8"
      />
      <path
        d="M96 28L28 96l34 34 34-34V28z"
        fill="#4285F4"
      />
      <path
        d="M130 130l34-34L96 28v68l34 34z"
        fill="#4285F4"
        opacity="0.7"
      />
      <rect
        x="84"
        y="60"
        width="24"
        height="72"
        rx="12"
        fill="white"
      />
    </svg>
  )
}

export function Mixpanel({ size = 32, ...props }: ToolLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mixpanel"
      {...props}
    >
      <rect width="192" height="192" rx="24" fill="#7856FF" />
      <circle cx="56" cy="96" r="20" fill="white" />
      <circle cx="96" cy="96" r="20" fill="white" opacity="0.7" />
      <circle cx="136" cy="96" r="20" fill="white" opacity="0.4" />
    </svg>
  )
}

export function Amplitude({ size = 32, ...props }: ToolLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Amplitude"
      {...props}
    >
      <rect width="192" height="192" rx="24" fill="#1A1A2E" />
      <path
        d="M96 36L36 156h28l12-28h40l12 28h28L96 36z"
        fill="white"
      />
      <path
        d="M96 80l14 36H82l14-36z"
        fill="#1A1A2E"
      />
      <circle cx="152" cy="148" r="12" fill="#00B4D8" />
    </svg>
  )
}

// Convenience: all logos as a map
export const TOOL_LOGOS = {
  ga4: GoogleAnalytics4,
  bigquery: GoogleBigQuery,
  googleAds: GoogleAds,
  lookerStudio: LookerStudio,
  gtm: GoogleTagManager,
  mixpanel: Mixpanel,
  amplitude: Amplitude,
} as const

export type ToolLogoKey = keyof typeof TOOL_LOGOS
