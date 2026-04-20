import { Leaf } from 'lucide-react';

interface FooterProps {
  setPage: (page: string) => void;
}

export function Footer({ setPage }: FooterProps) {
  const handleNavClick = (id: string) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sage-deep text-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-sage-light/20 pb-10 mb-10 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-sage-light/20 text-cream">
              <Leaf size={28} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-white">The Meadows Grimsby</h2>
              <p className="text-sage-pale/80 font-sans text-sm mt-1">Compassionate Care in the Heart of Grimsby</p>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-xl font-medium text-white mb-6">About Us</h3>
            <p className="text-sage-pale/80 text-sm leading-relaxed">
              A premium, family-oriented residential care home offering exceptional 
              accommodation, specialist dementia care, and a truly homely environment for up to 36 residents.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-sage-pale/80">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick('home-life')} className="hover:text-white transition-colors">The Home</button></li>
              <li><button onClick={() => handleNavClick('funding')} className="hover:text-white transition-colors">Funding & Support</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-white mb-6">Our Care</h3>
            <ul className="space-y-4 text-sm text-sage-pale/80">
              <li><button onClick={() => handleNavClick('care')} className="hover:text-white transition-colors">Residential Care</button></li>
              <li><button onClick={() => handleNavClick('care')} className="hover:text-white transition-colors">Dementia Care</button></li>
              <li><button onClick={() => handleNavClick('care')} className="hover:text-white transition-colors">Respite Care</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-sage-pale/80">
              <li>The Meadows Care Home</li>
              <li>88 Louth Road</li>
              <li>Scartho, Grimsby</li>
              <li>Lincolnshire</li>
              <li className="pt-2"><a href="tel:01472823287" className="text-gold-soft hover:text-white font-bold transition-colors">01472 823287</a></li>
              <li><a href="mailto:jamie@shirecarehomes.com" className="hover:text-white transition-colors">jamie@shirecarehomes.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-sage-light/20 text-xs text-sage-pale/60 gap-4">
          <p>© 2025 The Meadows Care Home. 88 Louth Road, Scartho, Grimsby. Registered in England.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
            <div className="px-3 py-1 border border-sage-light/30 rounded-full text-white bg-sage/20 font-bold tracking-wider uppercase">
              CQC Rated: Good
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
