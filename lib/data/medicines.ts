export interface Medicine {
  id: string;
  name: string;
  form: string;
  dosage: string;
  price: string;
  laboratory: string;
  description: string;
  category: string;
  prescription: boolean;
  alternatives: string[];
}

export const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Doliprane',
    form: 'Comprimé',
    dosage: '1000mg',
    price: '25 DH',
    laboratory: 'Sanofi',
    description: 'Paracétamol pour le traitement de la douleur et de la fièvre',
    category: 'Antalgique',
    prescription: false,
    alternatives: ['Panadol', 'Efferalgan']
  },
  {
    id: '2',
    name: 'Augmentin',
    form: 'Comprimé',
    dosage: '1g',
    price: '80 DH',
    laboratory: 'GSK',
    description: 'Antibiotique à large spectre',
    category: 'Antibiotique',
    prescription: true,
    alternatives: ['Clamoxyl', 'Amoxicilline']
  },
  {
    id: '3',
    name: 'Voltaren',
    form: 'Gel',
    dosage: '1%',
    price: '45 DH',
    laboratory: 'Novartis',
    description: 'Anti-inflammatoire local pour les douleurs articulaires',
    category: 'Anti-inflammatoire',
    prescription: false,
    alternatives: ['Profenid Gel', 'Ketum Gel']
  },
  {
    id: '4',
    name: 'Spasfon',
    form: 'Comprimé',
    dosage: '80mg',
    price: '30 DH',
    laboratory: 'Teva',
    description: 'Antispasmodique pour les douleurs abdominales',
    category: 'Antispasmodique',
    prescription: false,
    alternatives: ['Buscopan', 'No-Spa']
  },
  {
    id: '5',
    name: 'Xanax',
    form: 'Comprimé',
    dosage: '0.25mg',
    price: '90 DH',
    laboratory: 'Pfizer',
    description: 'Anxiolytique pour le traitement de l\'anxiété',
    category: 'Psychotrope',
    prescription: true,
    alternatives: ['Lexomil', 'Lysanxia']
  }
];