import type { FaqSectionProps } from "./schema"

export function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <section className="bg-[var(--bg-secondary)] py-28">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16">
          {title}
        </h2>

        <div className="space-y-0">
          {items.map((faq, index) => (
            <details
              key={index}
              className={`group ${
                index < items.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none py-6 text-2xl font-bold text-foreground [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 shrink-0 ml-4 transition-transform duration-300 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="overflow-hidden transition-all duration-300 pb-6">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
