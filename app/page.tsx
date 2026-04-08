export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-primary bg-dot-grid flex flex-col items-center justify-center overflow-hidden px-6 py-16">

      {/* Central glow */}
      <div className="glow-center animate-glow-pulse" />

      {/* Main content */}
      <main className="relative z-10 w-full max-w-2xl flex flex-col items-start gap-8">

        {/* Logo mark */}
        <div
          className="fade-up animate-delay-1 corner-brackets px-3 py-1.5"
        >
          <span className="font-mono text-xs text-text-muted tracking-[0.25em] uppercase">
            maiante.labs / v1.0
          </span>
        </div>

        {/* Brand name */}
        <div className="fade-up animate-delay-2 w-full">
          <h1
            className="font-display font-black text-brand-gradient leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 10vw, 6.5rem)" }}
          >
            MAIANTE
            <br />
            LABS
          </h1>
          <span className="line-draw mt-4" />
        </div>

        {/* Headline */}
        <div className="fade-up animate-delay-3">
          <p
            className="font-display font-bold text-text-primary leading-tight"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
          >
            Construindo sistemas escaláveis
            <br />e produtos digitais
            <span className="cursor" />
          </p>
        </div>

        {/* Subheadline */}
        <p
          className="fade-up animate-delay-4 font-mono text-text-secondary leading-relaxed"
          style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)" }}
        >
          Um estúdio focado em backend criando APIs,
          <br className="hidden sm:block" />
          plataformas SaaS e arquiteturas modernas.
        </p>

        {/* Status badge */}
        <div className="fade-up animate-delay-5 flex items-center gap-3">
          <span className="status-dot" />
          <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">
            Site em construção
          </span>
        </div>

        {/* Coming soon */}
        <p className="fade-up animate-delay-6 font-mono text-text-muted text-xs tracking-widest uppercase">
          Em breve. Acompanhe as novidades.
        </p>

        {/* CTA */}
        <div className="fade-up animate-delay-7">
          <a
            href="mailto:contato@miantelabs.com"
            className="btn-primary"
          >
            Entrar em contato
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 w-full max-w-2xl">
        <div className="border-t border-bg-surface pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="font-mono text-text-muted text-xs">
            © 2026 Maiante Labs. Todos os direitos reservados.
          </p>
          <p className="font-mono text-text-muted text-xs opacity-50">
            backend · saas · sistemas
          </p>
        </div>
      </footer>
    </div>
  );
}
