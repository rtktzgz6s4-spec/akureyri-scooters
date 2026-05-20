// Business data for Akureyri Scooters
export const businessData = {
  name: 'Akureyri Scooters ehf',
  phone: '+354 898 8100',
  email: 'akureyriscooters@akureyriscooters.is',
  address: 'Grímseyjargata 1, 600 Akureyri',
  orgNumber: '701224-1080',
  vat: '155493',
  hours: {
    weekday: '10:00 - 16:00',
    weekend: 'Closed',
    note: 'Contact us if these times do not suit you',
  },
  location: {
    distanceFromPort: '50 meters',
    latitude: 65.6838,
    longitude: -18.0823,
  },
  rentals: [
    {
      id: 'single',
      name: 'Single Scooter',
      description: 'Comfortable single-seat mobility scooter for city exploration',
      pricing: [
        { duration: '1 hour', isk: '4.500 kr', usd: '$35' },
        { duration: '2 hours', isk: '6.500 kr', usd: '$55' },
        { duration: '3 hours', isk: '9.000 kr', usd: '$75' },
        { duration: '4 hours', isk: '12.500 kr', usd: '$100' },
      ],
    },
    {
      id: 'double',
      name: 'Double Scooter',
      description: 'Two-seat scooter perfect for couples and families',
      pricing: [
        { duration: '1 hour', isk: '6.500 kr', usd: '$55' },
        { duration: '2 hours', isk: '11.500 kr', usd: '$90' },
        { duration: '3 hours', isk: '14.000 kr', usd: '$115' },
        { duration: '4 hours', isk: '16.500 kr', usd: '$135' },
      ],
    },
  ],
  socialLinks: {
    tripadvisor: 'https://www.tripadvisor.com',
    googleMaps: 'https://maps.google.com',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
}
