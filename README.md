# 🌐 Radikal | Next-Gen Web3 E-Commerce Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Web3](https://img.shields.io/badge/Web3-RainbowKit_&_Wagmi-blue?style=for-the-badge)

Radikal is an industry-standard, production-ready Web3 marketplace prototype. It bridges the gap between traditional e-commerce flows and decentralized blockchain interactions, wrapped in a premium, glassmorphism UI.

> **View Live Demo:** [Insert your deployed link here still yet to deploy]

---

## ✨ Core Features

* **Hybrid API Architecture:** Utilizes Axios for primary data fetching with a seamless, zero-downtime local fallback mechanism. The UI never breaks, even if the external REST API drops.
* **Web3 Integration:** Built-in decentralized wallet connection using **RainbowKit** and **Wagmi**, supporting MetaMask, WalletConnect, and Coinbase Wallet out of the box.
* **Smart Cart State:** Global state management powered by **Redux Toolkit (RTK)** for instant UI updates, quantity tracking, and cart persistence without prop-drilling.
* **Atomic Design System:** UI components are strictly structured into Atoms, Molecules, and Organisms, ensuring high reusability and maintainable code scaling.
* **Premium UX/UI:** Fully responsive, mobile-first design leveraging **Tailwind CSS v4**. Features complex glassmorphism effects, smooth routing transitions, and accessible form handling.

---

## 🛠️ Tech Stack

* **Core Framework:** React 18 + Vite (for lightning-fast HMR)
* **Styling:** Tailwind CSS v4 + React Icons
* **State Management:** Redux Toolkit (RTK) + React-Redux
* **Routing:** React Router DOM v6 (createBrowserRouter)
* **Web3/Blockchain:** Wagmi v2, Viem, RainbowKit
* **Data Fetching:** Axios + TanStack React Query

---

## 🏗️ Architecture & Methodology

This project intentionally avoids the "spaghetti code" common in standard React apps by adhering to top 1% engineering standards:

1. **Atomic Folder Structure:** Separation of logical UI layers (`src/components/atoms`, `molecules`, `organisms`).
2. **Service Layer Pattern:** API calls are abstracted into `src/services/api.js`. Components do not fetch their own data directly, keeping them pure and easy to test.
3. **Custom Utility Merging:** Utilizes `clsx` and `tailwind-merge` (`cn` utility) to prevent CSS class collisions during dynamic rendering.

---

## 🚀 Getting Started

To run this project locally:

### 1. Clone the repository
```bash
git clone [https://github.com/aondonaprecious/radikal-web3-store.git](https://github.com/aondonaprecious/radikal-web3-store.git)
cd radikal-web3-store
