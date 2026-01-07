<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/43dfbfa4-721a-4d34-b1da-01858ff56fb9" />
<img width="1847" height="914" alt="image" src="https://github.com/user-attachments/assets/543081a5-39c0-4f92-919d-7ac894de3ca8" />
<img width="1866" height="901" alt="image" src="https://github.com/user-attachments/assets/4e757bb6-5a5b-481c-8ded-26991e62d410" />

# 🧑‍💼 User Management & Analytics Dashboard

A modern ** Admin Dashboard** built with **React, TypeScript, TailwindCSS, and Zustand**, featuring user management, detailed user profiles, analytics, and polished UI/UX patterns.


---

## 👥 Users Management

- Users list with:
  - Avatar
  - Name
  - Email
  - Status (Active / Inactive)
  - Created Date
- Search by name
- Filter by status
- Client-side pagination
- Clickable rows → navigate to user details

---

## 👤 User Details Page (`/users/:id`)

- User profile card
- Activity summary (mock data)
- Last 5 actions
- Edit user modal:
  - Update name & status
  - Basic form validation
  - Instant UI update (local state)

---

## 📊 Analytics Overview (`/analytics`)

- User Signup Trend (Last 7 Days) — Line Chart
- Active vs Inactive Users — Donut Chart
- Responsive, card-based SaaS layout

---

## ✨ UI/UX Enhancements

- Light-mode SaaS design
- Fully responsive (mobile / tablet / desktop)
- Reusable UI components
- Skeleton loaders for better perceived performance
- Clean spacing, typography, and color system

---

## 🛠️ Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **TailwindCSS**
- **React Router v6**
- **Zustand** (state management)
- **Recharts** (data visualization)

---

## 🧠 Architecture & Design Decisions

### State Management
- **Zustand** was chosen for its simplicity and minimal boilerplate.
- Used to manage:
  - User list
  - Filters (search & status)
  - User updates (edit modal)

### Data Layer
- Uses a **simple JS array** as the data source.
- Architecture is backend-ready and can be easily extended with:
  - REST APIs
  - React Query
  - Server-side pagination

### UI Architecture
- Reusable, composable components:
  - `Card`
  - `Button`
  - `Modal`
  - `Skeleton`
- Clear separation of concerns:
  - **Pages** → layout & composition
  - **Components** → reusable UI logic
  - **Store** → global state

### UX Considerations
- Skeleton loaders instead of spinners
- Clickable table rows for faster navigation
- Modal-based editing to avoid page reloads
- Responsive layout using Tailwind utility classes

---

## ▶️ How to Run the Project Locally

1️⃣ Clone the repository
git clone https://github.com/anshumansingh5499/Analytics-Dashboard.git
cd user-management-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev

4️⃣ Open in browser
http://localhost:5173




