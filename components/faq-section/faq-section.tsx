import type { FaqSectionProps } from "./schema"

export function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <section className="bg-[var(--bg-secondary)] py-28">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <h2 className="text-5xl font-bold text-foreground mb-16">
          {title}
        </h2>

        <div className="space-y-8">
          {items.map((faq, index) => (
            <div
              key={index}
              className={`space-y-3 ${
                index < items.length - 1
                  ? "border-b border-[#2a2a2a] pb-8"
                  : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground">{faq.question}</h3>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
