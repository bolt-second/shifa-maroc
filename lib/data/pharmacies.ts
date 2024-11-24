export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  coordinates: [number, number];
  status: 'Ouverte' | 'Fermée' | 'De Garde';
  distance?: string;
  schedule: {
    [key: string]: string;
  };
  medicines: {
    name: string;
    price: string;
    available: boolean;
  }[];
}

export const pharmacies: Pharmacy[] = [
  {
    id: '1',
    name: 'Pharmacie Centrale',
    address: '123 Avenue Hassan II',
    city: 'Casablanca',
    phone: '+212 522-123456',
    coordinates: [33.5731, -7.5898],
    status: 'Ouverte',
    distance: '350m',
    schedule: {
      'Lundi': '08:00 - 20:00',
      'Mardi': '08:00 - 20:00',
      'Mercredi': '08:00 - 20:00',
      'Jeudi': '08:00 - 20:00',
      'Vendredi': '08:00 - 20:00',
      'Samedi': '09:00 - 19:00',
      'Dimanche': '09:00 - 13:00'
    },
    medicines: [
      { name: 'Doliprane 1000mg', price: '25 DH', available: true },
      { name: 'Advil 400mg', price: '35 DH', available: true },
      { name: 'Augmentin 1g', price: '80 DH', available: false },
      { name: 'Voltaren Gel', price: '45 DH', available: true }
    ]
  },
  {
    id: '2',
    name: 'Pharmacie Al Shifa',
    address: '45 Rue Mohammed V',
    city: 'Casablanca',
    phone: '+212 522-789012',
    coordinates: [33.5891, -7.6156],
    status: 'De Garde',
    distance: '500m',
    schedule: {
      'Lundi': '08:00 - 23:00',
      'Mardi': '08:00 - 23:00',
      'Mercredi': '08:00 - 23:00',
      'Jeudi': '08:00 - 23:00',
      'Vendredi': '08:00 - 23:00',
      'Samedi': '09:00 - 23:00',
      'Dimanche': '09:00 - 23:00'
    },
    medicines: [
      { name: 'Doliprane 1000mg', price: '25 DH', available: true },
      { name: 'Augmentin 1g', price: '80 DH', available: true },
      { name: 'Voltaren Gel', price: '45 DH', available: true },
      { name: 'Spasfon', price: '30 DH', available: false }
    ]
  },
  {
    id: '3',
    name: 'Pharmacie Ibn Sina',
    address: '78 Boulevard Anfa',
    city: 'Casablanca',
    phone: '+212 522-345678',
    coordinates: [33.5933, -7.6326],
    status: 'Fermée',
    distance: '750m',
    schedule: {
      'Lundi': '09:00 - 21:00',
      'Mardi': '09:00 - 21:00',
      'Mercredi': '09:00 - 21:00',
      'Jeudi': '09:00 - 21:00',
      'Vendredi': '09:00 - 21:00',
      'Samedi': '09:00 - 20:00',
      'Dimanche': 'Fermé'
    },
    medicines: [
      { name: 'Doliprane 1000mg', price: '25 DH', available: true },
      { name: 'Augmentin 1g', price: '80 DH', available: true },
      { name: 'Voltaren Gel', price: '45 DH', available: false },
      { name: 'Spasfon', price: '30 DH', available: true }
    ]
  }
];