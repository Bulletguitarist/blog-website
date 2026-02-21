# 🚀 Full Stack Blog Website

A modern full-stack blog platform built using Node.js, Express, MongoDB, and vanilla HTML/CSS/JS.

Live Demo: https://blog-website-2-jxk1.onrender.com

---

## 📌 Features

- 🔐 User Registration
- 🔑 User Login (JWT Authentication)
- ✍️ Create Blog Posts
- 📖 View Blogs
- 🗑 Delete Blogs
- 🔒 Protected Routes using JWT
- 🌐 Deployed on Render
- 🗄 MongoDB Atlas Database
- 🎨 Fully styled UI with animations

---

## 🛠 Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (Authentication)
- bcryptjs (Password hashing)

---

## ⚙️ Installation (Run Locally)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/blog-website.git
cd blog-website
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Create a `.env` file

Create a file named `.env` in the root folder and add:

```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the server

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 🌍 Deployment

This project is deployed using:

- **Render** (Backend Hosting)
- **MongoDB Atlas** (Cloud Database)

Environment variables required on Render:

| Key        | Value                          |
|------------|--------------------------------|
| MONGO_URL  | MongoDB Atlas connection string |
| JWT_SECRET | Any random secret string        |

---

## 📂 Project Structure

```
blog-website/
│
├── models/
│   ├── User.js
│   └── Blog.js
│
├── routes/
│   ├── auth.js
│   └── blog.js
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── style.css
│
├── server.js
├── package.json
└── README.md
```

---

## 🔐 Authentication Flow

- Passwords are hashed using bcrypt.
- JWT token is generated on login.
- Protected routes require Authorization header.
- Token stored in localStorage.

---

## 💡 Future Improvements

- Edit blog feature
- Like & comment system
- User profile page
- Admin panel
- React frontend version

---

## 👨‍💻 Author

**Jyotirmoy Mahapatra**  


