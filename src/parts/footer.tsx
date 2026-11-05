import { Download } from 'lucide-react';
import { windowsStoreUrl, windowsStoreWebUrl } from '../content/store-links';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'hsl(var(--primary))' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="/" className="flex items-center gap-2.5" aria-label="HomeBill home">
              <img src="/homebill-icon.svg" alt="" className="h-9 w-9 rounded-xl" />
              <span className="font-heading text-xl font-bold text-white">HomeBill</span>
            </a>
            <p className="text-sm" style={{ color: 'hsl(var(--primary-foreground) / 0.75)' }}>
              Bills under control. Home feels easier.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://homebill.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-80"
              style={{ color: 'hsl(var(--primary-foreground) / 0.85)' }}
            >
              homebill.eu
            </a>
            <a
              href="/guides/"
              className="text-sm transition-opacity hover:opacity-80"
              style={{ color: 'hsl(var(--primary-foreground) / 0.85)' }}
            >
              Guides
            </a>
            <a
              href={windowsStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
              style={{ color: 'hsl(var(--primary-foreground) / 0.85)' }}
            >
              <Download size={15} />
              Download for Windows
            </a>
              <a
                href={windowsStoreWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-80"
                style={{ color: 'hsl(var(--primary-foreground) / 0.85)' }}
              >
                Microsoft Store listing
              </a>
            <a
              href="/privacy-policy/"
              className="text-sm transition-opacity hover:opacity-80"
              style={{ color: 'hsl(var(--primary-foreground) / 0.85)' }}
            >
              Privacy Policy
            </a>
            <a
              href="https://buymeacoffee.com/tomadalexau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-80"
              style={{ color: 'hsl(var(--primary-foreground) / 0.85)' }}
            >
              Buy me a coffee
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t" style={{ borderColor: 'hsl(var(--primary-foreground) / 0.15)' }}>
          <p className="text-center text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.5)' }}>
            © {currentYear} HomeBill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
