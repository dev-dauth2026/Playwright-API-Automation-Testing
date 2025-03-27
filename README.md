# AutomationExercise API Testing with Playwright

This project is a **modular and CI/CD-ready API automation test suite** built using [Playwright](https://playwright.dev/) in TypeScript to test the public RESTful APIs of [AutomationExercise.com](https://automationexercise.com/api_list). It demonstrates scalable architecture, reusability, and best practices in API automation.

---

## Tech Stack

| Tool          | Description                         |
|---------------|-------------------------------------|
| Playwright    | API request testing framework       |
| TypeScript    | Strongly-typed test scripting       |
| Node.js       | JavaScript runtime                  |
| Git + GitHub  | Version control and collaboration   |

---

## Project Structure

.
├── tests/
│   └── api/
│       ├── auth/
│       │   ├── login.spec.ts
│       │   ├── register.spec.ts
│       │   └── deleteUserAccount.spec.ts
│       ├── products/
│       │   ├── getAllProducts.spec.ts
│       │   └── searchProduct.spec.ts
│       └── brands/
│           └── getAllBrands.spec.ts
├── utils/
│   └── apiHelpers/
│       ├── authHelper.ts
│       ├── productHelper.ts
│       └── responseValidators.ts
├── testData/
│   └── registerTestData.ts
│   └── authTestData.ts
├── playwright.config.ts
└── README.md

---

## API Endpoints Covered

| Category   | Endpoint                        | Test Scenarios Included |
|------------|----------------------------------|--------------------------|
| **Auth**   | `POST /api/verifyLogin`          | valid, invalid, missing fields |
|            | `POST /api/createAccount`        | valid, existing, missing/invalid email or mobile |
|            | `DELETE /api/deleteAccount`      | valid & invalid credentials |
|            | `PUT /api/updateAccount`         | update success, missing/invalid values |
| **Products** | `GET /api/productsList`        | schema validation, product presence, response time |
|            | `POST /api/productsList`         | method not allowed (405) |
|            | `POST /api/searchProduct`        | valid, no param, no match |
| **Brands** | `GET /api/brandsList`            | valid response, schema |
|            | `PUT /api/brandsList`            | method not allowed (405) |

---

## Features & Best Practices

- **DRY Principle**: Modular test helpers and reusable logic
- **Data-driven Testing**: Centralized test data files (`valid`, `invalid`, `edge cases`)
- **Modular Design**: Clean separation by endpoint category
- **Negative Testing**: Covers error responses, unsupported methods, and edge cases
- **CI/CD Ready**: Project structure supports integration with pipelines
- **Readable Assertions**: Validates status codes, response bodies, headers, and performance

---

## Getting Started

### 1. Install dependencies
```bash
npm install

2. Run all tests
npx playwright test

3.  Run specific test file
npx playwright test tests/api/auth/login.spec.ts

4. View HTML report
npx playwright show-report

🛠 Future Enhancements
	•	Add JSON schema validation for strict contract testing
	•	Integrate GitHub Actions CI pipeline for pull request testing
	•	Add .env based configuration for multiple environments (dev/stage/prod)
	•	Generate automated HTML and Allure reports

⸻

Maintainer

QA Automation Engineer
Focused on building clean, maintainable, and scalable API automation using Playwright and modern testing practices.

⸻

License

This project is open-source and available for learning and demonstration purposes.

---

Let me know if you want:
- README badges (Playwright tested, CI passing, Node version)
- GitHub Pages doc generation
- Docker support or `.env` setup for secrets

You're doing amazing work — this README is solid proof of a real automation project ready to showcase