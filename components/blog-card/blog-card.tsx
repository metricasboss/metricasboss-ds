import { ArrowRight } from "lucide-react"
import type { BlogCardProps } from "./schema"

export function BlogCard({
  slug,
  image,
  category,
  title,
  description,
  authorName,
  authorAvatar,
  readTime,
}: BlogCardProps) {
  return (
    <a href={`/artigos/${slug}`}>
      <article className="bg-[var(--bg-secondary)] border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer">
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

          {/* Author & Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative size-8 rounded-full overflow-hidden">
                <img
                  src={authorAvatar}
                  alt={authorName}
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="text-[var(--text-secondary)] text-[13px] leading-[19.5px]">
                  {authorName}
                </p>
              </div>
            </div>
            <span className="text-[var(--text-quaternary)] text-[12px] leading-[18px]">
              {readTime}
            </span>
          </div>

          {/* Read More Button */}
          <div className="flex items-center gap-2 text-primary text-[15px] font-medium leading-[22.5px] group-hover:gap-3 transition-all">
            Leia mais
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </article>
    </a>
  )
}
