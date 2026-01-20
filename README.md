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

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd camonk-interview
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

### Evaluation Criteria

Your submission will be evaluated on:

- ✅ Correct implementation of TanStack Query hooks
- ✅ Proper use of Tailwind CSS for styling
- ✅ Integration of shadcn/ui components
- ✅ Code organization and structure
- ✅ Error handling and loading states
- ✅ Responsive design []
- ✅ User experience and UI polish

## Sample Blog Object

```json
{
  "id": 1,
  "title": "Future of Fintech",
  "category": ["FINANCE", "TECH"],
  "description": "Exploring how AI and blockchain are reshaping financial services",
  "date": "2026-01-11T09:12:45.120Z",
  "coverImage": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  "content": "Full blog content..."
}
```

description: A short summary of the blog  
content: The full content of the blog

## Tips

- Set up TanStack Query's `QueryClientProvider` in your app root
- Configure Tailwind CSS properly in your config files
- Use shadcn components like `Card`, `Button`, `Input`, etc.
- Handle loading states with skeletons
- Implement proper error boundaries
- Consider using React Router for navigation (optional)

## Submission

Once you've completed the assignment:

1. Ensure all tasks are working correctly
2. Commit your changes with clear commit messages
3. Push to your repository
4. Share the repository link for review in the google form provided

## FAQ

**Do I need to deploy the code?**  
No. Simply clone the repository, commit and push your changes, and share the repository link via the Google Form.

**Is it mandatory to use TypeScript and TanStack Query?**  
Yes, using both TypeScript and TanStack Query is compulsory for this assignment.

**Is using JSON Server mandatory, or can I create my own server?**  
Using JSON Server is mandatory. Please use the provided JSON Server setup rather than creating your own backend.

**What should I use for styling?**  
Use **Tailwind CSS** and **shadcn/ui** for styling. You are expected to install, configure, and use both Tailwind CSS and shadcn/ui components in your implementation.

**Have more questions?**  
If you have any additional doubts, feel free to reach out at: `developer@camonk.com`.

Good luck! 🚀
