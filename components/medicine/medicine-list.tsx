import React from 'react';
import { Pill } from 'lucide-react';

interface Medicine {
  id: string;
  name: string;
  form: string;
  dosage: string;
  price: string;
  laboratory: string;
}

const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Doliprane',
    form: 'Comprimé',
    dosage: '1000mg',
    price: '25 DH',
    laboratory: 'Sanofi',
  },
  {
    id: '2',
    name: 'Augmentin',
    form: 'Comprimé',
    dosage: '1g',
    price: '80 DH',
    laboratory: 'GSK',
  },
];

interface MedicineListProps {
  searchQuery: string;
}

export const MedicineList: React.FC<MedicineListProps> = ({ searchQuery }) => {
  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-4 space-y-4">
      {filteredMedicines.map((medicine) => (
        <div
          key={medicine.id}
          className="bg-white p-4 rounded-xl shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg flex items-center">
                <Pill className="w-5 h-5 mr-2 text-emerald-600" />
                {medicine.name} {medicine.dosage}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {medicine.form} • {medicine.laboratory}
              </p>
            </div>
            <span className="text-lg font-semibold text-emerald-600">
              {medicine.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};