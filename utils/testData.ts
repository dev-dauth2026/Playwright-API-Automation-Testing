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

export const newTestUser = {
    name: 'Test User',
    email: `testuser${Date.now()}@mail.com`, // unique email to avoid "already exists" error
  };

  export const existingUser = {
    name: 'Test User',
    email: 'ref712producttest11@gmail.com',
  };