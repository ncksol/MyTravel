export interface NavItem {
  href: string;
  label: string;
  id: string;
  stamp: string;
}

export function jerseyNavItems(prefix: string): NavItem[] {
  return [
    { href: `${prefix}`,                  label: 'Overview',       id: 'home',           stamp: '⚓' },
    { href: `${prefix}/itinerary`,        label: 'Itinerary',      id: 'itinerary',      stamp: '☀' },
    { href: `${prefix}/restaurants`,      label: 'Restaurants',    id: 'restaurants',    stamp: '🦪' },
    { href: `${prefix}/sights`,           label: 'Sights',         id: 'sights',         stamp: '♖' },
    { href: `${prefix}/bookings`,         label: 'Bookings',       id: 'bookings',       stamp: '✉' },
    { href: `${prefix}/practical-info`,   label: 'Practical Info', id: 'practical-info', stamp: '✦' },
  ];
}
