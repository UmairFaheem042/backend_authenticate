# Authentication System using Node.js, Express, MongoDB, JWT, and BcryptJS  

A simple and secure authentication system built with **Node.js, Express.js, MongoDB, JWT (JSON Web Token), and BcryptJS**.  
This project includes **user registration, login, authentication using JWT, and secure password hashing**.

---

## 🚀 Features
- 🔐 **User Authentication** (Register & Login)
- 🔑 **JWT-based authentication**
- 🔒 **Password hashing with BcryptJS**
- 🍪 **Secure cookie-based authentication**
- 🔄 **Logout functionality**
- 📦 **RESTful API with JSON responses**

---

## 🛠 Technologies Used
- **Node.js** - Backend runtime  
- **Express.js** - Web framework  
- **MongoDB & Mongoose** - Database & ORM  
- **JWT (jsonwebtoken)** - Token-based authentication  
- **BcryptJS** - Secure password hashing  
- **Dotenv** - Environment variable management  
- **Cookie-parser** - Handling cookies  

---

## 📌 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/UmairFaheem042/backend_authenticate.git
cd backend_authenticate
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
```sh
PORT=<your-choice>
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
JWT_EXPIRES=7d
NODE_ENV=development
```

### 4️⃣ Start the Server
```sh
npm start
or
npm run dev
```


### API Endpoints

- Sign Up: ```/api/user/signup```
- Sign In: ```/api/user/signin```
- Sign Out: ```/api/user/signout```