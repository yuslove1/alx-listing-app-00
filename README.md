# Milestone 1: Scaffolding and Initial Setup

This project lays the foundation for a modern Airbnb clone, focusing on a well-organized and scalable codebase using Next.js, TypeScript, Tailwind CSS, and ESLint. This milestone establishes a clean folder structure, reusable components, and adheres to best practices for building a dynamic, responsive, and user-friendly property listing page.

## Learning Objectives

This milestone aims to strengthen expertise in modern web application development, enabling learners to:

* Gain hands-on experience scaffolding a production-ready Next.js project.
* Implement TypeScript for type safety and reusable interfaces.
* Configure Tailwind CSS for responsive and accessible UI components.
* Structure a Next.js project following industry best practices.
* Create foundational reusable components and organize assets effectively.

## Requirements

* Basic knowledge of Next.js, React, and TypeScript.
* Familiarity with Tailwind CSS and modern styling techniques.
* Understanding of ESLint and its role in code quality.
* Proficiency in organizing projects for scalability.

## Technical Requirements

* Next.js version 13+
* Node.js version 16+
* Text editor (e.g., VS Code) with TypeScript and Tailwind CSS extensions


### Project Setup

* Next.js application named `alx-listing-app` with TypeScript, ESLint, and Tailwind CSS.
* Minimal Tailwind CSS configuration (`tailwind.config.js` and `globals.css`).

### Folder Structure and Reusability

* Clean folder structure: `components/`, `interfaces/`, `constants/`, and `public/assets/`.
* Reusable components: `Card` and `Button`.

### TypeScript Integration

* TypeScript interfaces (`CardProps`, `ButtonProps`, etc.) in `interfaces/index.ts`.

### Asset Management

* Assets (images and SVGs) organized under `public/assets/`.

## Getting Started

1. **Clone the repository:**
git clone https://github.com/yuslove1/alx-listing-app.git


2. **Navigate to the project directory:**
cd alx-listing-app

3. **install dependencies:**
npm install

4. **Run the development servrer:**
npm run dev


## Folder Structure
alx-listing-app/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ...
├── constants/
│   └── ...
├── interfaces/
│   └── index.ts
├── public/
│   └── assets/
│       ├── images/
│       └── svgs/
├── pages/
│   └── ...
├── styles/
│   └── globals.css
├── tailwind.config.js
└── ...