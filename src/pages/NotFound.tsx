import { Link } from 'react-router-dom';
import { Seo } from '../components/seo/Seo';
import { ROUTES } from '../lib/routes';

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-cream">
      <Seo
        title="Page Not Found | The Meadows Care Home"
        description="The page you're looking for doesn't exist. Find your way back to The Meadows Care Home website."
        path="/404"
        noindex
      />
      <div className="max-w-xl mx-auto px-6 text-center py-24">
        <h1 className="text-4xl font-serif text-sage-deep mb-4">Page not found</h1>
        <p className="text-text-mid mb-8">
          Sorry, we couldn't find that page. It may have moved, or the link may be out of date.
        </p>
        <Link
          to={ROUTES.home}
          className="inline-block px-8 py-4 bg-gold hover:bg-gold-deep text-white font-bold rounded-full transition-all shadow-soft"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
