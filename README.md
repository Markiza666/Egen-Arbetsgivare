# Egen Arbetsgivare - Employer Management Platform

A modern full-stack web application designed to simplify the process of becoming and managing personal assistance as an employer. Developed as a professional degree project in Systems Development.

## 🚀 Features

- **Step-by-Step Registration Guide:** A dynamic walkthrough for users to become their own employers.
- **Service Overview:** Comprehensive information about available assistance services.
- **Contact Integration:** Functional contact form connected to an Express 5/MongoDB backend.
- **State Management:** Ready for robust data handling with Redux Toolkit.
- **Testing Suite:** Unit and integration tests powered by Vitest.

## 📊 Project Status
**Code Coverage: 100%** > Both Frontend (Client) and Backend (Server) have achieved full test coverage across all statements, branches, and functions.
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

You can run scripts either from the root directory (to manage both Client & Server) or navigate into each directory for granular control.

### Root Directory
- `npm test`: Runs all tests (Client & Server sequentially).
- `npm run test:coverage`: **The Hero Script**. Runs coverage for both Client and Server sequentially and generates full reports.

### Client Directory (/client)
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the production-ready application.
- `npm test`: Runs the Vitest suite for frontend.
- `npm run test:coverage`: Generates a full Vitest coverage report.

### Server Directory (/server)
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
Egen-Arbetsgivare/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # View components
│   │   └── types/          # TS definitions
├── server/                 # Backend (Express + Node)
│   ├── src/
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API endpoints
│   │   └── app.ts          # Server entry point
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
This project maintains a strict 100% coverage policy. Both the client and server use Vitest.

### Quick Start (Root)
To verify the entire project's health in one command:

```bash
npm run test:coverage
```

### Manual Verification
If you prefer to run tests for a specific part:

1. Navigate to ```\client``` or ```\server```.

2. Run ```npm test``` or ```npm run test:coverage```.
