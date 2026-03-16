import type { AuthorCardProps } from "./schema"

export function AuthorCard({
  name,
  slug,
  role,
  bio,
  avatarUrl,
  linkedinUrl,
  articleCount = 0,
  categories = [],
}: AuthorCardProps) {
  return (
    <a href={`/autores/${slug}`} className="block">
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] border-solid flex flex-col gap-[20px] items-start px-[33px] py-[33px] rounded-[16px] overflow-hidden hover:border-[#f47340]/50 transition-colors cursor-pointer">
        {/* Header: Avatar + Name/Role + LinkedIn */}
        <div className="flex gap-[20px] items-start w-full min-w-0">
          {/* Avatar with shadow border */}
          <div className="shrink-0">
            <div className="bg-[rgba(255,255,255,0)] rounded-[16px] shadow-[0px_0px_0px_2px_rgba(244,115,64,0.15)] size-[88px] overflow-clip">
              <div className="relative size-full">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--bg-tertiary)] flex items-center justify-center text-foreground text-2xl font-bold">
                    {name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name + Role */}
          <div className="flex-1 flex flex-col gap-[4px] min-w-0">
            <h2 className="font-bold text-[22px] leading-[26.4px] text-foreground">
              {name}
            </h2>
            {role && (
              <p className="font-normal text-[14px] leading-[22.4px] text-[#f47340]">
                {role}
              </p>
            )}
          </div>

          {/* LinkedIn Button */}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--bg-tertiary)] rounded-[10px] size-[36px] flex items-center justify-center shrink-0 hover:bg-[#2a2a2a] transition-colors"
            >
              <svg className="size-[16px]" fill="white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>

        {/* Bio */}
        {bio && (
          <div className="w-full min-w-0">
            <p className="font-normal text-[14px] leading-[23.8px] text-[var(--text-secondary)] break-words">
              {bio}
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-[var(--border-primary)] border-solid pt-4 flex flex-col gap-3 w-full">
          {/* Line 1: Article Count + Ver Perfil */}
          <div className="flex items-center justify-between w-full">
            {/* Article Count */}
            <div className="bg-[var(--bg-tertiary)] flex gap-[6px] h-[26px] items-center px-[10px] rounded-[8px]">
              <svg className="size-[14px]" fill="none" stroke="#bbb" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="font-normal text-[12px] leading-[18px] text-[var(--text-secondary)]">
                {articleCount} {articleCount === 1 ? "artigo" : "artigos"}
              </p>
            </div>

            {/* Ver Perfil Text */}
            <div className="relative flex items-center shrink-0">
              <p className="font-normal text-[13px] leading-[19.5px] text-[#f47340]">
                Ver perfil
              </p>
              <svg className="size-[14px] ml-[4px]" fill="none" stroke="#f47340" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Line 2: Categories */}
          {categories.length > 0 && (
            <div className="flex items-center gap-[6px] flex-wrap">
              {categories.slice(0, 3).map((category, index) => (
                <div
                  key={index}
                  className="bg-[rgba(244,115,64,0.08)] border border-[rgba(244,115,64,0.15)] border-solid h-[22.5px] rounded-[33554400px] px-[8px] flex items-center shrink-0"
                >
                  <p className="font-normal text-[11px] leading-[16.5px] text-[rgba(244,115,64,0.8)] uppercase whitespace-nowrap">
                    {category}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  )
}
