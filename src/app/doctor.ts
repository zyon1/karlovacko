export interface Doctor {
  firstName: string;
  lastName: string;
  age?: string;
  specialization: string;
  companyName: string;
  companyAddress: string;
  oib: number;
  address: string;
  location: { lat: number; lng: string };
  description: string;
  working_hours: {
    from: string;
    to: string;
  };
}
