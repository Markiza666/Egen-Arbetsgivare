# Egen Arbetsgivare - Employer Management Platform

A modern full-stack web application designed to simplify the process of becoming and managing personal assistance as an employer. Developed as a professional degree project in Systems Development.

## 🚀 Features

- **Step-by-Step Registration Guide:** A dynamic walkthrough for users to become their own employers.
- **Service Overview:** Comprehensive information about available assistance services.
- **Contact Integration:** Functional contact form connected to an Express 5/MongoDB backend.
- **State Management:** Ready for robust data handling with Redux Toolkit.
- **Testing Suite:** Unit and integration tests powered by Vitest.

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
