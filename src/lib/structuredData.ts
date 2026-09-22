import { business, SITE_URL } from './siteConfig';

/**
 * `LocalBusiness` is the accurate, defensible Schema.org type here: it grants
 * local-search eligibility (address, phone, map, hours) without asserting a
 * clinical/medical designation the business hasn't confirmed, and without
 * misusing `LodgingBusiness` (built for hotels/short-term lodging, not
 * residential care). Only confirmed facts from the existing site are
 * included — no fabricated ratings, reviews, prices or opening hours.
 */
export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.legalName,
    description: business.description,
    url: SITE_URL,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    // Confirmed by existing site copy: "available 24 hours a day, 7 days a week".
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: business.parentOrganisation,
    },
    areaServed: {
      '@type': 'City',
      name: 'Grimsby',
    },
    image: `${SITE_URL}/meadows-front-photo.png`,
    // sameAs (social profiles) intentionally omitted — none are confirmed in the repo.
    // See docs/business-info-checklist.md.
  } as const;
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  } as const;
}
