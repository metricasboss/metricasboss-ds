import type { CtaSectionProps } from "./schema"

export function CtaSection({
  title,
  description,
  primaryAction,
  primaryHref,
  secondaryAction,
  secondaryHref,
  variant = "default",
}: CtaSectionProps) {
  const content = (
    <div className={`space-y-6 ${variant === "card" ? "p-8" : ""}`}>
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={primaryHref}
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          {primaryAction}
        </a>
        {secondaryAction && secondaryHref && (
          <a
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            {secondaryAction}
          </a>
        )}
      </div>
    </div>
  )

  if (variant === "card") {
    return (
      <div className="rounded-xl border bg-card text-card-foreground shadow hover:border-primary/50 transition-colors">
        {content}
      </div>
    )
  }

  return <section>{content}</section>
}
