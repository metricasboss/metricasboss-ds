import type { HeroSectionProps } from "./schema"

export function HeroSection({
  title,
  description,
  ctaText,
  ctaLink,
  imageUrl,
  imageAlt,
  locals,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Decorative blurs */}
      <div className="absolute right-32 top-20 size-32 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="absolute left-10 bottom-20 size-40 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              {locals && locals.length > 0 && (
                <p className="text-primary text-lg md:text-xl font-medium">
                  {locals.join(" | ")}
                </p>
              )}

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-white font-bold text-lg leading-[27px] px-8 py-4 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                aria-label={`${ctaText} (abre em nova aba)`}
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          {imageUrl && (
            <div className="relative">
              <div className="p-6 bg-card backdrop-blur border-2 rounded-xl">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={imageAlt || title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
