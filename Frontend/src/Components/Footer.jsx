import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background text-muted-foreground">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">UNMUTE</span>
          <span className="text-sm">© {year}</span>
        </div>

        {/* Center: Navigation */}
        <nav className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
      </div>
    </footer>
  );
};

export default Footer;
