export const validRegisterUser = {
    name: 'Senior QA',
    email: `seniorqa_${Date.now()}@mail.com`,
    password: 'SeniorQA@123',
    title: 'Mr',
    birth_date: '10',
    birth_month: 'August',
    birth_year: '1990',
    firstname: 'Senior',
    lastname: 'Tester',
    company: 'QA Tech',
    address1: '456 Automation St',
    address2: 'Suite 500',
    country: 'United States',
    zipcode: '90210',
    state: 'California',
    city: 'San Diego',
    mobile_number: '+11234567890',
  };
  
  export const existingRegisterUser = {
    ...validRegisterUser,
    email: 'ref712producttest11@gmail.com',
  };
  
  export const emptyRegisterUser = {};
  
  export const invalidEmailUser = {
    ...validRegisterUser,
    email: 'not-an-email',
  };
  
  export const invalidMobileUser = {
    ...validRegisterUser,
    mobile_number: 'invalid-number',
  };
  
  export const missingPasswordUser = {
    ...validRegisterUser,
    password: '',
  };
  
  export const invalidTitleUser = {
    ...validRegisterUser,
    title: 'Doctor',
  };