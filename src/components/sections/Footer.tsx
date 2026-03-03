export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border/50 bg-background text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-medium">
          © {currentYear} Personal Portfolio. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Github", "Twitter", "LinkedIn", "Dribbble"].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
