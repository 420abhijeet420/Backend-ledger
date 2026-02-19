# Backend Ledger — Secure Banking & Transaction Management System

A production-ready backend system that simulates core banking operations such as account management, secure authentication, transactions, and ledger-based balance computation.
The project is designed with scalability, security, and real-world financial system principles in mind.

It demonstrates how modern backend architectures handle financial data integrity using concepts like idempotent transactions, ledger derivation, JWT authentication, and event-based notifications.

---

## Overview

This backend provides a complete financial transaction infrastructure where users can:

* Register and authenticate securely
* Create and manage accounts
* Perform transactions with consistency guarantees
* Track balances derived from immutable ledger entries
* Receive automated email notifications
* Maintain secure session handling with token blacklisting

The architecture follows clean separation of concerns with models, controllers, middleware, and configuration layers.

---

## Key Features

### Authentication & Security

* JWT-based authentication
* Password hashing using bcrypt
* Secure cookie handling
* Token blacklist for logout security
* Input validation and email regex verification

### Account & Ledger System

* Account creation and management
* Ledger-driven balance computation (aggregation pipeline)
* Immutable financial records design
* Transaction status lifecycle (pending → completed)

### Transaction Engine

* Idempotent transaction validation to prevent duplicates
* Sender balance verification
* Atomic transaction creation logic
* Email notifications for financial events

### Email Integration

* Automated emails using Nodemailer
* Registration confirmation emails
* Transaction notifications

### Production-Ready Practices

* Environment variable management with dotenv
* Modular architecture
* MongoDB Atlas cloud database integration
* Deployment-ready configuration

---

## Tech Stack

Backend Framework
Node.js, Express.js

Database
MongoDB Atlas, Mongoose

Authentication & Security
JWT, bcrypt, cookie-parser

Email Service
Nodemailer

Testing Tools
Postman

Deployment
Cloud deployment compatible (Render / Railway / VPS)

---

## Project Structure

```
Backend-ledger/
│── config/
│   ├── db.js
│
│── controllers/
│   ├── authController.js
│   ├── accountController.js
│   ├── transactionController.js
│
│── middleware/
│   ├── authMiddleware.js
│
│── models/
│   ├── User.js
│   ├── Account.js
│   ├── Transaction.js
│   ├── Ledger.js
│   ├── Blacklist.js
│
│── routes/
│   ├── authRoutes.js
│   ├── accountRoutes.js
│   ├── transactionRoutes.js
│
│── utils/
│   ├── sendEmail.js
│
│── .env
│── server.js
│── package.json
```

---

## System Design Concepts Implemented

### Ledger-Based Balance Computation

Instead of storing balance directly, the system derives it from ledger entries using MongoDB aggregation pipelines.
This approach ensures financial correctness and auditability.

### Idempotency Protection

Each transaction includes idempotency validation to prevent duplicate financial operations due to retries or network failures.

### Transaction Lifecycle

Transactions move through defined states:

Pending → Processing → Completed / Failed

This mimics real banking workflows.

### Security Layering

Multiple layers of security are implemented:

* Hashed passwords
* JWT authentication
* HTTP-only cookies
* Token blacklisting
* Input validation

---

## Installation & Setup

### Clone Repository

```
git clone https://github.com/420abhijeet420/Backend-ledger.git
cd Backend-ledger
```

### Install Dependencies

```
npm install
```

### Environment Variables

Create a `.env` file in root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### Run Server

```
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## API Modules

### Authentication

* Register User
* Login User
* Logout User

### Account

* Create Account
* Fetch Account Details
* Check Account Status

### Transactions

* Create Transaction
* Validate Idempotency
* Fetch Balance
* Transaction Notifications

---

## Testing

APIs were tested using Postman with proper authentication headers and cookies.

---

## Deployment

The project can be deployed on platforms such as:

* Render
* Railway
* AWS EC2
* DigitalOcean

Environment variables must be configured in the deployment dashboard.

---

## Learning Outcomes

This project demonstrates practical understanding of:

* Backend system architecture
* Financial data consistency
* Secure authentication workflows
* Database modeling for transactional systems
* Production-ready Node.js development
* Real-world banking system principles

---

## Future Improvements

* Role-based access control (RBAC)
* Rate limiting and fraud detection
* Microservices architecture migration
* Payment gateway integration
* Real-time transaction monitoring using WebSockets

---

## Author

Abhijeet
Aspiring Software Developer focused on backend systems, scalable architectures, and real-world problem solving.

---

## License

This project is intended for educational and demonstration purposes.
