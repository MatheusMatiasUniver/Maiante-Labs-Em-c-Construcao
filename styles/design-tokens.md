# Maiante Labs — Design Tokens

Referência de estilizações para reutilização na página principal.

## Fontes

| Variável CSS         | Fonte          | Uso                          |
|----------------------|----------------|------------------------------|
| `--font-unbounded`   | Unbounded      | Títulos, marca, headings     |
| `--font-jetbrains`   | JetBrains Mono | Body, labels, código, mono   |

Import no `layout.tsx` via `next/font/google`:
```ts
import { Unbounded, JetBrains_Mono } from "next/font/google";
```

## Paleta de Cores

| Variável CSS            | Valor     | Uso                          |
|-------------------------|-----------|------------------------------|
| `--ml-bg-primary`       | `#0F172A` | Fundo base da página         |
| `--ml-bg-surface`       | `#1E293B` | Cards, painéis, seções       |
| `--ml-bg-elevated`      | `#263548` | Hover states, modais, popups |
| `--ml-text-primary`     | `#F8FAFC` | Títulos, texto principal     |
| `--ml-text-secondary`   | `#94A3B8` | Subtítulos, legendas         |
| `--ml-text-muted`       | `#475569` | Placeholders, rodapé         |
| `--ml-accent`           | `#3B82F6` | Azul principal (CTAs, links) |
| `--ml-accent-bright`    | `#60A5FA` | Azul hover                   |
| `--ml-accent-cyan`      | `#06B6D4` | Complemento ciano            |

## Gradientes

```css
/* Nome da marca */
--ml-gradient-brand: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%);

/* Glow de fundo */
--ml-gradient-glow: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 70%);

/* Surface para cards */
--ml-gradient-surface: linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.9) 100%);
```

## Classes Utilitárias (globals.css)

| Classe                | Descrição                                           |
|-----------------------|-----------------------------------------------------|
| `.bg-dot-grid`        | Grade de pontos animada como fundo                  |
| `.glow-center`        | Brilho radial azul centralizado                     |
| `.text-brand-gradient`| Gradiente azul→ciano no texto                      |
| `.cursor`             | Cursor piscante estilo terminal (via `::after`)     |
| `.line-draw`          | Linha que se desenha da esquerda para a direita     |
| `.status-dot`         | Ponto pulsante de status                            |
| `.btn-primary`        | Botão outline azul com hover preenchido             |
| `.corner-brackets`    | Colchetes decorativos nos cantos (via pseudo-elem.) |
| `.fade-up`            | Animação fade-in + slide-up                         |
| `.animate-delay-1..7` | Delays escalonados para fade-up (0.1s → 1.2s)      |

## Transições

```css
--ml-transition-fast: 150ms ease;
--ml-transition-base: 300ms ease;
--ml-transition-slow: 600ms ease;
```

## Tailwind Config — Classes Customizadas

```
bg-bg-primary / bg-bg-surface / bg-bg-elevated
text-text-primary / text-text-secondary / text-text-muted
text-accent / text-accent-bright / text-accent-cyan
font-display / font-mono
animate-fade-up / animate-draw-line / animate-blink / animate-dot-pulse / animate-glow-pulse
```
