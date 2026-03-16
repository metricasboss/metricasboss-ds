import { ExternalLink } from "lucide-react"
import type { MaterialCardProps } from "./schema"

export function MaterialCard({
  title,
  description,
  image,
  category,
  downloadUrl,
}: MaterialCardProps) {
  return (
    <a
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <article className="bg-[var(--bg-secondary)] border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer h-full">
        {/* Image with Category Tag */}
        <div className="relative h-[235px] bg-[var(--bg-tertiary)] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-[var(--bg-secondary)]/90 border border-[var(--border-primary)] rounded-[10px] px-3 py-1.5">
            <span className="text-foreground text-[11px] font-bold leading-[16.5px] tracking-[0.275px] uppercase">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-[22px] font-bold leading-[28.6px] text-foreground line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[var(--text-secondary)] text-[15px] leading-[24px] line-clamp-3">
            {description}
          </p>

          {/* Separator */}
          <div className="h-px bg-border" />

          {/* Access Button */}
          <div className="flex items-center gap-2 text-primary text-[15px] font-medium leading-[22.5px] group-hover:gap-3 transition-all">
            <ExternalLink className="w-4 h-4" />
            Acessar material
          </div>
        </div>
      </article>
    </a>
  )
}
