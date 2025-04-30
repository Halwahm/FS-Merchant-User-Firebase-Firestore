# Interview Task: Full Stack Software Developer

## Objective

The objective of this task is to develop a full-stack solution that demonstrates the ability to build a web application with two key personas: **Merchant** and **User**. Each persona has distinct functionalities and access to certain features. Your solution should include user authentication, CRUD operations, and basic business logic for custom deals.

---

## Task Overview

### Persona A: Merchant

A merchant should be able to:

1. **Sign-up/Sign-in:** Authentication via email or SMS (using Firebase).
2. **Create Custom Deals:** Merchants can create and manage custom deals for their customers.
3. **View/Update/Discontinue Deals:** Merchants should be able to view existing deals, update them, or discontinue them.

### Persona B: User

A user should be able to:

1. **Sign-up/Sign-in:** Authentication via email or SMS (using Firebase).
2. **Enroll into a Deal:** Users can browse available deals and enroll in them.
3. **Receive Deal Information:** Once enrolled, users receive an email with instructions on how to redeem the deal.

---

## Technology Requirements

The task must be built using the following technologies:

1. **Frontend: Next.js**
    - The frontend of the application should be developed using  **Next.js**.
2. **Backend: Node.js**
    - The backend side of application is developed using Nest.js.
3. **Authentication & Database: Firebase**
    - Use **Firebase** for user authentication (email).
    - Firestore can be used as the database to manage deals and other relevant information.

---

## Key Features to Implement

### For Merchant

- **Sign-up/Sign-in with Email:**
    - Use Firebase Authentication for merchant account management.
- **Create Custom Deals:**
    - Build a form for merchants to input details about their custom deals (e.g., deal description, title).
- **Manage Deals:**
    - Allow merchants to view all their created deals, update deal details, or discontinue deals.

### For User

- **Sign-up/Sign-in with Email:**
    - Firebase Authentication for user accounts.
- **Enroll in a Deal:**
    - Display available deals for users to browse and enroll in.
    - Once enrolled, trigger an email.
- **Deal Redemption:**
    - Inform users via email on how to redeem the deal after enrollment.

---

## Expected Deliverables

1. **Frontend:** A user interface built using Next.js that allows merchants and users to interact with the system.
2. **Backend:** Server logic for handling merchant deal creation, user enrollments, and Firebase interactions.
3. **Firebase:** Integration of Firebase for authentication (email) and Firestore for data storage.
4. **Email Trigger:** Set up a system to send emails when a user enrolls in a deal (via Firebase).

---