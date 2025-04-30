# Future AI FE APP

## Requirements

- **Node.js**: You need to have Node.js installed on your machine. Download it from [nodejs.org](https://nodejs.org/).
- **pnpm**: A package manager to install dependencies.

## Environment Setup

Before starting, make sure you have created and filled the `.env` file with the necessary Firebase configuration values. This file should be located at the root of your project directory. You need to include the following environment variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
```

Replace `YOUR_FIREBASE_*` with the appropriate values from your Firebase project settings. These values are required for Firebase services such as authentication and storage.

### Environment Variables Explained

- **NEXT_PUBLIC_FIREBASE_API_KEY**: The API key for your Firebase project, used to interact with Firebase services.
- **NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN**: The domain used for Firebase authentication.
- **NEXT_PUBLIC_FIREBASE_PROJECT_ID**: The unique identifier for your Firebase project.
- **NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET**: The cloud storage bucket for your project, used for storing files.
- **NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID**: The sender ID for Firebase Cloud Messaging, used for notifications.
- **NEXT_PUBLIC_FIREBASE_APP_ID**: The unique app ID for the Firebase project.

## Local API Setup

To test the application locally, you need to modify the base URL in `app/constants/api.ts`:

1. Navigate to `app/constants/api.ts`.
2. Update the `baseURL` value to `http://localhost:3000` to ensure the API points to your local environment.

## Install Dependencies

First, install the project dependencies using **pnpm**:

```bash
pnpm install
```

## Run the Development Server

Then, run the development server:

```bash
pnpm dev
```

Once the server is up and running, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- **app/constants/api.ts**: Contains the API base URL, which should be set to your local environment during testing.
- **app/components/**: Contains reusable UI components used throughout the project.
- **app/hooks/**: Contains custom hooks used for managing state and side effects.
- **app/services/**: Contains service files that handle API calls to the backend.
- **app/types/**: Contains TypeScript type definitions for various entities used in the app.
- **app/validation/**: Contains validation schemas for forms using Yup.

## Important Notes

- Ensure that all environment variables are set correctly before running the application to avoid runtime errors.
- Use **pnpm** as the package manager to ensure consistency with the lock file and avoid dependency issues.