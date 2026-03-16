import type { CategoryCardProps } from "./schema"

export function CategoryCard({
  name,
  slug,
  description,
  articleCount,
  authorCount,
}: CategoryCardProps) {
  return (
    <a
      href={`/categorias/${slug}`}
      className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[16px] p-[32px] hover:border-orange-500/50 transition-colors group flex flex-col gap-[20px]"
    >
      {/* Icon */}
      <div className="bg-orange-500/10 rounded-[16px] flex items-center justify-center size-[56px]">
        <svg className="size-[28px] text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[12px]">
        <h3 className="font-bold text-[24px] leading-[28.8px] text-foreground group-hover:text-orange-500 transition-colors">
          {name}
        </h2>

        {description && (
          <p className="font-normal text-[14px] leading-[22.4px] text-[var(--text-tertiary)] line-clamp-3">
            {description}
          </p>
        )}

        {/* Stats */}
        <div className="flex items-center gap-[16px] pt-[8px]">
          <div className="flex items-center gap-[6px]">
            <svg className="size-[16px] text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-medium text-[13px] leading-[20.8px] text-[var(--text-secondary)]">
              {articleCount} {articleCount === 1 ? "artigo" : "artigos"}
            </span>
          </div>

          <div className="flex items-center gap-[6px]">
            <svg className="size-[16px] text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="font-medium text-[13px] leading-[20.8px] text-[var(--text-secondary)]">
              {authorCount} {authorCount === 1 ? "autor" : "autores"}
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
