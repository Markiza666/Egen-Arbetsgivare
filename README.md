# Egen Arbetsgivare - Employer Management Platform

A modern full-stack web application designed to simplify the process of becoming and managing personal assistance as an employer. Developed as a professional degree project in Systems Development.

## 🚀 Features

- **Step-by-Step Registration Guide:** A dynamic walkthrough for users to become their own employers.
- **Service Overview:** Comprehensive information about available assistance services.
- **Contact Integration:** Functional contact form connected to an Express 5/MongoDB backend.
- **State Management:** Ready for robust data handling with Redux Toolkit.
- **Testing Suite:** Unit and integration tests powered by Vitest.

## 📊 Project Status
- **Frontend:** 100% Unit & Integration test coverage.
- **Backend:** 100% Integration test coverage with in-memory database testing.
- **Accessibility:** Fully WCAG 2.1 compliant (AA level).

## 🛠 Tech Stack

### Frontend (Client)
- **React 19** with **TypeScript 5.9**
- **Vite 8** (Next-generation build tool)
- **Redux Toolkit** & **React-Redux** (Global state management)
- **React Router Dom 7** (Client-side navigation)
- **Sass (SCSS)** with CSS Modules for encapsulated styling
- **Axios** (Promise-based HTTP client)
- **Lucide React** (Icons)

### Backend (Server)
- **Node.js** with **Express 5**
- **TypeScript** (Runtime execution via `tsx`)
- **MongoDB** with **Mongoose 9** (Data persistence)
- **Nodemailer** (Automated email services)
- **Express-Validator** & **Helmet** (Input validation and security headers)
- **Morgan** (HTTP request logging)
- **Supertest** (Fluent API for testing HTTP servers)
- **MongoDB Memory Server** (In-memory database for isolated testing)

### Configuration (.env)
Create a `.env` file in the **server** directory with the following variables:
```text
| Variable      | Description                  | Default/Example                |
| :------------ | :--- ----------------------- | :--- ------------------------- |
| `PORT`        | The port the server runs on  | `5001`                         |
| `MONGODB_URI` | Connection string to MongoDB | `mongodb://localhost:27017/db` |
| `CLIENT_URL`  | The URL of your frontend     | `http://localhost:5173`        |
| `JWT_SECRET`  | Secret key for encryption    | `your_random_string`           |
```

## 📜 Available Scripts

### Client
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the production-ready application.
- `npm test`: Runs the Vitest suite.
- `npm run test:coverage`: Generates a full Vitest coverage report.

### Server
- `npm run dev`: Starts the server with `tsx` watch mode.
- `npm start`: Runs the compiled production server.
- `npm test`: Runs backend integration and unit tests.

### Testing & Quality
- **Vitest** (Fast unit testing and benchmarking)
- **@vitest/coverage-v8** (Comprehensive code coverage reports)
- **React Testing Library** (User-centric UI testing)
- **ESLint** (Code quality and linting)


## 📁 Project Structure

```text
src/
├── assets/         # Static assets (SVG, Images)
├── components/     # Reusable UI components (Common, Header, Footer)
├── data/           # Static content (e.g., registration steps)
├── hooks/          # Custom React hooks
├── pages/          # View components (Home, Registration, Services, etc.)
├── routes/         # Routing configuration (AppRoutes.tsx)
├── styles/         # Global styles and SCSS variables
└── types/          # TypeScript definitions and interfaces
```


## ⚙️ Getting Started

This project is divided into two main directories: client and server. You need to start both to run the full application.

### 1. Server Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start development server with tsx watch
npm run dev
```


### 2. Client Setup
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

## 🧪 Testing

Both the client and server use Vitest. To run the test suites, navigate to the respective directory and run:

1. Run Standard Tests
To run the test suite normally (or in watch mode):
```bash
npm test
```
2. Generate Coverage Report
To generate the full coverage report (the one that shows 100% coverage):
```bash
npm run test:coverage
```
