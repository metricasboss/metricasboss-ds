# metricasboss-ds

Design System do Métricas Boss — registry de componentes para [Blokos](https://github.com/metricasboss/blokos).

## Uso

```bash
# Conectar ao registry
npx blokos connect https://github.com/metricasboss/metricasboss-ds

# Listar componentes disponíveis
npx blokos list

# Instalar um componente
npx blokos add hero-section

# Instalar todos
npx blokos add --all
```

## Componentes

### Marketing

| Componente | Descrição | Props |
|-----------|-----------|-------|
| **HeroSection** | Hero banner com título, descrição, CTA e imagem | title, description, ctaText, ctaLink, imageUrl, imageAlt, locals |
| **CtaSection** | Call-to-action com variante default/card | title, description, primaryAction, primaryHref, secondaryAction, secondaryHref, variant |
| **NewsletterSection** | Seção de newsletter com embed Substack | title, description, substackUrl |

### Content

| Componente | Descrição | Props |
|-----------|-----------|-------|
| **BlogCard** | Card de artigo com imagem, autor e CTA | slug, image, category, title, description, authorName, authorAvatar, readTime |
| **ArticleHero** | Hero de página de artigo com share | category, title, description, authorName, authorAvatar, authorDate, readTime, image |
| **FaqSection** | FAQ com accordion nativo | title, items (question + answer) |
| **MaterialCard** | Card de material/download | title, description, image, category, downloadUrl |

### Data Display

| Componente | Descrição | Props |
|-----------|-----------|-------|
| **AuthorCard** | Card de autor com avatar, bio e stats | name, slug, role, bio, avatarUrl, linkedinUrl, articleCount, categories |
| **CategoryCard** | Card de categoria com contadores | name, slug, description, articleCount, authorCount |

### Navigation

| Componente | Descrição | Props |
|-----------|-----------|-------|
| **Breadcrumb** | Navegação hierárquica com semântica ARIA | items (label + href) |

## Regras de Composição

- `HeroSection` como primeiro componente de landing pages
- `Breadcrumb` no topo de páginas internas
- `BlogCard` e `MaterialCard` em grids de 3 colunas (lg), 2 (md), 1 (sm)
- `CtaSection` entre seções para conversão
- `FaqSection` perto do final da página
- `NewsletterSection` como penúltima seção
- Cor accent: `orange-500` — fonte títulos: Sora — fonte corpo: Inter
- Todos os componentes usam Tailwind CSS com suporte a dark mode

## Stack

- React / Next.js
- Tailwind CSS
- Lucide React (ícones)
- Zod (schemas)

## Desenvolvimento

```bash
# Editar componentes
# Depois re-publicar o registry
npx blokos publish
```

## License

MIT
