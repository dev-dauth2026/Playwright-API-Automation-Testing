export const testUser = {
    name: "Senior QA",
    email: "ref712producttest11@gmail.com",
    password: "Henref1234#"
  };

export const invalidTestuser ={
    name: "Invalid",
    email: "invalidemail@gmail.com",
    password:"Invalid1234#"
}

// test user for successful registration
export const validRegisterUser = {
    name: 'Senior QA',
    email: `seniorqa_${Date.now()}@mail.com`, // unique email each time
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
  
  // existing user for negative case
  export const existingRegisterUser = {
    ...validRegisterUser,
    email: 'ref712producttest11@gmail.com', // known existing email
  };

  //  Missing fields
export const emptyRegisterUser = {};

//  Invalid email
export const invalidEmailUser = {
  ...validRegisterUser,
  email: 'not-an-email',
};

//  Invalid mobile number (text instead of digits)
export const invalidMobileUser = {
  ...validRegisterUser,
  mobile_number: 'invalid-number',
};

//  Missing required field: password
export const missingPasswordUser = {
  ...validRegisterUser,
  password: '',
};

//  Invalid title
export const invalidTitleUser = {
  ...validRegisterUser,
  title: 'Doctor',
};