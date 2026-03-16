import { ChevronRight } from "lucide-react"
import type { BreadcrumbProps } from "./schema"

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="overflow-x-auto">
      <ol className="flex items-center gap-1.5 text-[13px] leading-[19.5px]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {item.href ? (
              <a
                href={item.href}
                className="text-[var(--text-tertiary)] hover:text-foreground transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-foreground whitespace-nowrap" aria-current="page">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="w-[12px] h-[12px] text-[var(--text-tertiary)] shrink-0" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
