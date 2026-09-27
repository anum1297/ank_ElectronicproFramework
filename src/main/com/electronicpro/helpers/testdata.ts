import { faker } from '@faker-js/faker';

export type CustomerProfile = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  companyName: string;
  streetAndNumber: string;
  apartment: string;
  zipCode: string;
  city: string;
  country: string;
  state: string;
  receiveInvoices: string;
  cardNumber: string;
};

export const customerProfile: CustomerProfile = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  companyName: '',
  streetAndNumber: '',
  apartment: '',
  zipCode: '',
  city: '',
  country: 'Germany',
  state: 'Brandenburg',
  receiveInvoices: 'by email',
  cardNumber: '4111 1111 1111 1111'
};

export function generateCustomerProfile(): CustomerProfile {
  const profile: CustomerProfile = {
    fullName: faker.person.fullName(),
    email: faker.internet.email({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      provider: 'example.com'
    }),
    password: faker.internet.password({
      length: 12,
      memorable: false,
      pattern: /[A-Za-z0-9!@#$%^&*]/
    }),
    confirmPassword: '',
    phone: faker.phone.number({ style: 'international' }),
    companyName: faker.company.name(),
    streetAndNumber: faker.location.streetAddress(true),
    apartment: faker.location.secondaryAddress(),
    zipCode: faker.location.zipCode('#####'),
    city: faker.location.city(),
    country: 'Germany',
    state: 'Brandenburg',
    receiveInvoices: 'by email',
    cardNumber: '4111 1111 1111 1111'
  };

  profile.confirmPassword = profile.password;
  Object.assign(customerProfile, profile);
  return customerProfile;
}

export const signupData = customerProfile;

export const addressData = {
  get yourName() { return customerProfile.fullName; },
  get email() { return customerProfile.email; },
  get phone() { return customerProfile.phone; },
  get companyName() { return customerProfile.companyName; },
  get streetAndNumber() { return customerProfile.streetAndNumber; },
  get apartment() { return customerProfile.apartment; },
  get zipCode() { return customerProfile.zipCode; },
  get city() { return customerProfile.city; },
  get country() { return customerProfile.country; },
  get state() { return customerProfile.state; },
  get receiveInvoices() { return customerProfile.receiveInvoices; }
};

export const paymentData = {
  get cardNumber() { return customerProfile.cardNumber; }
};

export const fullName = customerProfile.fullName;
export const email = customerProfile.email;
export const password = customerProfile.password;
export const confirmPassword = customerProfile.confirmPassword;
export const yourName = customerProfile.fullName;
export const addressEmail = customerProfile.email;
export const phone = customerProfile.phone;
export const companyName = customerProfile.companyName;
export const streetAndNumber = customerProfile.streetAndNumber;
export const apartment = customerProfile.apartment;
export const zipCode = customerProfile.zipCode;
export const city = customerProfile.city;
export const country = customerProfile.country;
export const state = customerProfile.state;
export const receiveInvoices = customerProfile.receiveInvoices;
export const cardNumber = customerProfile.cardNumber;
