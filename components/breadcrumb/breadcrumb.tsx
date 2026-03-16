import { ChevronRight } from "lucide-react"
import type { BreadcrumbProps } from "./schema"

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-[13px] leading-[19.5px]">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          {item.href ? (
            <a
              href={item.href}
              className="text-[var(--text-tertiary)] hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ChevronRight className="w-[12px] h-[12px] text-[var(--text-tertiary)]" />
          )}
        </div>
      ))}
    </nav>
  )
}
