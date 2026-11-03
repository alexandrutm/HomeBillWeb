import { Home, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-[4.5rem] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="HomeBill home">
          <span className="brand-mark"><Home size={19} strokeWidth={2.2} /></span>
          <span className="font-heading text-xl font-bold tracking-tight text-primary">HomeBill</span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#availability"
            className="button-primary px-4 py-2.5 text-sm"
          >
            Coming soon
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="md:hidden border-t border-border bg-background px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#availability"
            className="button-primary justify-center px-4 py-3 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Coming soon
          </a>
        </nav>
      )}
    </header>
  );
}
