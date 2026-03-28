# metricasboss-ds — Component Library

Design System do Métricas Boss — componentes reutilizáveis para páginas de analytics e web

TRIGGER when: user asks to create a page, section, layout, or component using this design system.

## Rules

- ONLY use components listed below. Do NOT invent new components.
- Follow the prop types exactly as defined.
- Import components from the paths shown.
- Output native TSX code (Next.js pages/components), NOT JSON specs.

## Available Components

### ArticleHero

A full article header with category badge, title, description, author info, read time, share dropdown, and a featured image.

**Category:** content

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| category | string | Yes | Category badge label displayed above the title |
| title | string | Yes | Article headline |
| description | string | Yes | Article summary or subtitle |
| authorName | string | Yes | Name of the article author |
| authorAvatar | string | Yes | Avatar image URL of the author |
| authorDate | string | Yes | Publication date string |
| readTime | string | Yes | Estimated reading time, e.g. '5 min de leitura' |
| image | string | Yes | Featured image URL displayed below the meta info |

**Examples:**

**Dependencies:** lucide-react

---

### AuthorCard

A card displaying an author's profile with avatar, name, role, bio, LinkedIn link, article count, and category tags.

**Category:** data-display

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | Full name of the author |
| slug | string | Yes | URL slug for the author profile page |
| role | string | No | Professional role or title of the author |
| bio | string | No | Short biography text |
| avatarUrl | string | No | URL of the author's avatar image |
| linkedinUrl | string | No | URL to the author's LinkedIn profile |
| articleCount | number | No | Number of articles written by the author |
| categories | array | No | List of category names the author writes about |

**Examples:**

---

### BlogCard

A card component for displaying blog post previews with cover image, category badge, title, description, author info, and read time.

**Category:** content

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| slug | string | Yes | URL slug for the blog post |
| image | string | Yes | Cover image URL for the blog post |
| category | string | Yes | Category label displayed as a badge on the image |
| title | string | Yes | Blog post title |
| description | string | Yes | Short excerpt or description of the blog post |
| authorName | string | Yes | Name of the blog post author |
| authorAvatar | string | Yes | Avatar image URL of the author |
| readTime | string | Yes | Estimated reading time, e.g. '5 min de leitura' |

**Examples:**

**Dependencies:** lucide-react

---

### Breadcrumb

A navigation breadcrumb trail showing the current page hierarchy with chevron separators.

**Category:** navigation

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Display text for the breadcrumb item |
| href | string | No | URL link for the breadcrumb item. If omitted, renders as plain text (current page). |

**Examples:**

**Dependencies:** lucide-react

---

### CategoryCard

A card displaying a content category with an icon, name, description, and article/author count stats.

**Category:** data-display

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | Category display name |
| slug | string | Yes | URL slug for the category page |
| description | string | No | Short description of the category |
| articleCount | number | Yes | Number of articles in this category |
| authorCount | number | Yes | Number of authors writing in this category |

**Examples:**

---

### CtaSection

A call-to-action section with title, description, and primary/secondary action buttons. Supports default and card variants.

**Category:** marketing

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | Yes | Main heading for the CTA section |
| description | string | No | Supporting text below the title |
| primaryAction | string | Yes | Label for the primary action button |
| primaryHref | string | Yes | URL for the primary action button |
| secondaryAction | string | No | Label for the secondary action button |
| secondaryHref | string | No | URL for the secondary action button |
| variant | "default" | "card" | No | Visual variant: 'default' renders inline, 'card' wraps in a bordered card |

**Examples:**

---

### FaqSection

A frequently asked questions section with a title and a list of question/answer pairs separated by dividers.

**Category:** content

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| question | string | Yes | The FAQ question text |
| answer | string | Yes | The FAQ answer text |

**Examples:**

---

### HeroSection

A full-width hero section with headline, description, call-to-action button, and an optional image. Supports location/date badges above the title.

**Category:** marketing

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | Yes | The main headline text for the hero section |
| description | string | Yes | Supporting description text below the title |
| ctaText | string | Yes | Label for the call-to-action button |
| ctaLink | string | Yes | URL the call-to-action button links to |
| imageUrl | string | No | URL for the hero image displayed on the right |
| imageAlt | string | No | Alt text for the hero image |
| locals | array | No | Array of location/date strings displayed above the title |

**Examples:**

---

### lesson-path

Zigzag learning path component — displays a list of items in an alternating left/right layout connected by curved path connectors, inspired by Duolingo. Framework-agnostic: works with Next.js, Vite, or any React setup. Card content is fully customizable via renderCard render prop.

**Category:** navigation

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| items | array | Yes | List of items to display in the zigzag path |
| pathColor | string | No | Color of the connector between cards (CSS color, default #1CB0F6) |
| className | string | No | CSS class applied to the outer wrapper |

**Examples:**

*Basic usage with image cards:*
```tsx
<lesson-path items={[{"id":"1","status":"current","groupLabel":"Beginner"},{"id":"2","status":"locked"},{"id":"3","status":"locked"}]} pathColor="#1CB0F6" />
```

*Bible series path:*
```tsx
<lesson-path items={[{"id":"genesis","status":"completed","groupLabel":"Old Testament"},{"id":"exodus","status":"current"},{"id":"leviticus","status":"locked"}]} />
```

---

### MaterialCard

A card for displaying downloadable materials with cover image, category badge, title, description, and an external link action.

**Category:** content

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | Yes | Title of the downloadable material |
| description | string | Yes | Short description of the material |
| image | string | Yes | Cover image URL for the material |
| category | string | Yes | Category label displayed as a badge on the image |
| downloadUrl | string | Yes | External URL where the material can be downloaded |

**Examples:**

**Dependencies:** lucide-react

---

### NewsletterSection

A newsletter subscription section with decorative blur effects, title, description, and an embedded Substack signup form.

**Category:** marketing

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | No | Heading text for the newsletter section |
| description | string | No | Description text below the title |
| substackUrl | string | Yes | Base Substack URL for the embed iframe, e.g. 'https://lucianfialho.substack.com' |

**Examples:**

---

### ToolLogos

SVG logo components for digital analytics and marketing tools: Google Analytics 4, Google BigQuery, Google Ads, Looker Studio, Google Tag Manager, Mixpanel, and Amplitude. Each logo is a standalone React component with configurable size and all standard SVG props.

**Category:** media

**Props:**

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| tool | "ga4" | "bigquery" | "googleAds" | "lookerStudio" | "gtm" | "mixpanel" | "amplitude" | Yes | Which tool logo to render |
| size | number | No | Width and height in pixels (default: 32) |
| className | string | No | CSS class applied to the SVG element |

**Examples:**

*Google Analytics 4 logo, 48px:*
```tsx
<ToolLogos tool="ga4" size={48} />
```

*All logos at default size:*
```tsx
<ToolLogos tool="bigquery" size={32} />
```

*Mixpanel logo large:*
```tsx
<ToolLogos tool="mixpanel" size={64} />
```

---

## Composition Rules

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

