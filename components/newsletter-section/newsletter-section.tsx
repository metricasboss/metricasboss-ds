"use client"

import type { NewsletterSectionProps } from "./schema"

export function NewsletterSection({
  title = "Anti Achismo Social Club",
  description = "Menos achismo, mais dados. Sem enrolação toda semana na sua caixa de entrada.",
  substackUrl,
}: NewsletterSectionProps) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-[var(--bg-secondary)] to-background border-t border-b border-border overflow-hidden">
      {/* Blur Effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[288px] h-[288px] bg-orange-500 rounded-full blur-[64px]" />
        <div className="absolute top-64 right-0 w-[384px] h-[384px] bg-orange-500 rounded-full blur-[64px]" />
      </div>

      <div className="container mx-auto max-w-3xl px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Title */}
          <h2 className="text-[42px] font-bold leading-[50.4px] text-foreground">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-[var(--text-secondary)] text-[18px] leading-[30.6px] max-w-[720px]">
              {description}
            </p>
          )}

          {/* Substack Embed */}
          <div className="w-full max-w-[500px]">
            <iframe
              src={`${substackUrl}/embed`}
              width="100%"
              height="150"
              scrolling="no"
              className="rounded-[14px] bg-transparent border-0"
              title="Assinar newsletter"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
