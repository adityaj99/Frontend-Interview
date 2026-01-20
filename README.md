# 📝 CA Monk Blog Application

A modern blog application built using **React + TypeScript**, demonstrating server state management with **TanStack Query**, clean UI with **Tailwind CSS**, and reusable components from **shadcn/ui**.

This project was developed as part of the **CA Monk Frontend Assignment**.

---

## 🚀 Features

- 📄 View all blogs in a list layout
- 🔍 View blog details by selecting a blog
- ✍️ Create a new blog using a right-side sliding panel
- 🔄 Automatic data refetch using TanStack Query
- ⏳ Skeleton loaders for better user experience
- 📱 Responsive layout
- 🧼 Clean and scalable project structure

---

## 🛠 Tech Stack

- **React (Vite)**
- **TypeScript**
- **TanStack Query**
- **Tailwind CSS**
- **shadcn/ui**
- **JSON Server**

---

## 📁 Project Structure

src/
├── api/ # API calls
├── hooks/ # React Query hooks
├── components/
│ ├── blog/ # Blog-related components
│ └── ui/ # shadcn/ui components
├── lib/ # Utility functions
├── types/ # TypeScript types

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js v18 or higher
- Git

---

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd frontend-interview
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Start JSON Server (Backend)

```bash
npm run server

Backend will run at:
👉 http://localhost:3001/blogs
```

---

### 4️⃣ Start the frontend

```bash
npm run dev

Frontend will run at:
👉 http://localhost:5173
```

---

### 📡 API Endpoints (JSON Server)

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/blogs`     | Get all blogs     |
| GET    | `/blogs/:id` | Get blog by ID    |
| POST   | `/blogs`     | Create a new blog |

---

### 🧠 Key Implementation Details

- TanStack Query is used for all data fetching and mutations.
- Query invalidation ensures the blog list updates after creating a blog.
- Conditional queries prevent unnecessary API calls when no blog is selected.
- shadcn/ui Sheet is used to create a right-side panel for blog creation.
- Skeleton loaders are implemented for loading states.

- TypeScript strict typing is followed (no any).

---

### 📌 Notes

- JSON Server used as backend
- Focus on clean architecture and UX

---

### ✅ Status

✔ Assignment completed
✔ Ready for submission
