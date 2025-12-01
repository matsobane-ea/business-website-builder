import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-primary">M2 Vanguard</span>
          </div>
          <p className="text-muted-foreground text-center">
            © 2025 M2 Vanguard — All Rights Reserved
          </p>
          <p className="text-sm text-muted-foreground text-center">
            M2 Vanguard is a tech solutions company registered in South Africa
          </p>
          <p className="text-xs text-muted-foreground/70">
            CIPC Registration Number: [To be added]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
