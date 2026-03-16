## Layout

- Use HeroSection como primeiro componente de qualquer landing page
- Use Breadcrumb no topo de páginas internas (após o header)
- Agrupe BlogCards em grids de 3 colunas (lg), 2 colunas (md), 1 coluna (sm)
- Use CTASection entre seções de conteúdo para conversão
- Use FAQSection perto do final da página, antes do footer
- Use NewsletterSection como penúltima seção
- AuthorCard e CategoryCard em grids de 3 ou 4 colunas
- ArticleHero é exclusivo para páginas de artigo individual

## Tipografia

Use as classes utilitárias do tokens.css, NUNCA valores arbitrários como text-[22px]:

- `.text-display` — 48px, bold — hero titles
- `.text-title-1` — 40px, bold — page titles (h1)
- `.text-title-2` — 32px, bold — section titles (h2)
- `.text-title-3` — 24px, bold — card titles (h3)
- `.text-title-4` — 20px, semibold — sub-headings (h4)
- `.text-body-lg` — 18px — large body text, descriptions
- `.text-body` — 16px — standard body text
- `.text-caption` — 13px — metadata, timestamps, small info
- `.text-badge` — 11px, bold, uppercase — badges, labels, categories

Fonte: Sora para headings (automático via font-heading), Inter para body (automático via font-sans).

## Espaçamento

Use as classes utilitárias, NUNCA valores arbitrários como py-[41px]:

- `.section-padding` — padding vertical de seções (96px top/bottom, 16px/32px horizontal)
- `.container-page` — max-width 1280px com margin auto
- `.container-content` — max-width 896px para conteúdo de leitura
- `.container-narrow` — max-width 768px para conteúdo estreito
- Gaps entre seções: `gap-12` (48px)
- Gaps entre componentes: `gap-8` (32px)
- Gaps dentro de componentes: `gap-6` (24px)
- Gaps pequenos: `gap-4` (16px)

## Cards

- Use `.card-base` para o estilo padrão de cards (border, radius, shadow, hover)
- Padding interno: `p-6` (padrão) ou `p-8` (cards grandes)

## Botões

- `.btn-primary` — CTA principal (laranja, rounded-full, bold)
- `.btn-secondary` — ação secundária (outline, rounded-full)
- NUNCA use valores arbitrários de padding/radius em botões

## Cores

- Brand: `text-primary` / `bg-primary` (laranja)
- Texto principal: `text-foreground`
- Texto secundário: `text-muted-foreground`
- Bordas: `border-border`
- Backgrounds: `bg-background`, `bg-card`, `bg-bg-secondary`, `bg-bg-tertiary`
- NUNCA use valores hexadecimais hardcoded como #f47340 ou #2a2a2a

## Sombras

- `.shadow-card` — sombra padrão de cards
- `.shadow-card-hover` — sombra no hover
- `.shadow-glow` — glow laranja para destaques

## Dark Mode

- Prefira dark mode com classe `dark` no html
- Todos os tokens adaptam automaticamente entre light/dark
- Use `dark:` prefix apenas quando precisar de override específico
