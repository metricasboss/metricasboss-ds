"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Clock, Share2, Link2, Check } from "lucide-react"
import type { ArticleHeroProps } from "./schema"

export function ArticleHero({
  category,
  title,
  description,
  authorName,
  authorAvatar,
  authorDate,
  readTime,
  image,
}: ArticleHeroProps) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [copied, setCopied] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const closeDropdown = useCallback(() => setShowDropdown(false), [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdown()
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeDropdown()
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [showDropdown, closeDropdown])

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: description, url: window.location.href })
      } catch {
        // User cancelled or error
      }
    } else {
      setShowDropdown((prev) => !prev)
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard not available
    }
  }

  const getShareUrl = () => (typeof window !== "undefined" ? window.location.href : "")
  const getShareText = () => encodeURIComponent(title)

  const shareLinks = [
    {
      name: "X (Twitter)",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: `https://x.com/intent/tweet?text=${getShareText()}&url=${encodeURIComponent(getShareUrl())}`,
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl())}`,
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      href: `https://wa.me/?text=${getShareText()}%20${encodeURIComponent(getShareUrl())}`,
    },
    {
      name: "Telegram",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      href: `https://t.me/share/url?url=${encodeURIComponent(getShareUrl())}&text=${getShareText()}`,
    },
  ]

  return (
    <section className="bg-background pt-8 pb-12">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        {/* Category Badge */}
        <div className="inline-flex items-center bg-black/90 dark:bg-white/10 border border-white/20 dark:border-white/20 rounded-[10px] px-3 py-1.5 mb-6">
          <span className="text-white text-[11px] font-bold leading-[16.5px] tracking-[0.275px] uppercase">
            {category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[48px] font-bold text-foreground leading-[56px] mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-[18px] text-muted-foreground leading-[28px] mb-8">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="relative size-12 rounded-full overflow-hidden">
              <img
                src={authorAvatar}
                alt={authorName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-foreground text-[15px] font-medium">
                {authorName}
              </p>
              <p className="text-muted-foreground text-[13px]">
                {authorDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-[14px]">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>{readTime}</span>
            </div>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleShare}
                aria-expanded={showDropdown}
                aria-haspopup="menu"
                aria-label="Compartilhar artigo"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-[14px] hover:bg-accent transition-colors"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
                Compartilhar
              </button>

              {showDropdown && (
                <div
                  role="menu"
                  className="absolute right-0 top-full mt-2 w-52 bg-popover border border-border rounded-xl shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {shareLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="menuitem"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-4 py-3 text-[14px] text-foreground hover:bg-accent transition-colors"
                    >
                      {link.icon}
                      {link.name}
                    </a>
                  ))}
                  <div className="border-t border-border">
                    <button
                      onClick={handleCopyLink}
                      role="menuitem"
                      className="flex items-center gap-3 px-4 py-3 text-[14px] text-foreground hover:bg-accent transition-colors w-full"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
                      ) : (
                        <Link2 className="w-4 h-4" aria-hidden="true" />
                      )}
                      {copied ? "Link copiado!" : "Copiar link"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
