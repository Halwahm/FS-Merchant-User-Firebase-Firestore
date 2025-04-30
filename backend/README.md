# Future AI BE APP

## Requirements

- **Node.js (at least v18.x)**: You need to have Node.js installed on your machine. Download it from [nodejs.org](https://nodejs.org/).
- **pnpm**: A package manager to install dependencies.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Environment Variables

Before running the project, you need to create and fill in a `.env` file with the following variables:

- **PORT**: The port on which the server will run. Default is `3001`.
- **FIREBASE_API_KEY**: The API key used for Firebase services.
- **FIREBASE_AUTH_DOMAIN**: The authentication domain for Firebase, used for managing authentication.
- **FIREBASE_PROJECT_ID**: The Firebase project ID that identifies your Firebase project.
- **FIREBASE_STORAGE_BUCKET**: The storage bucket URL for Firebase, used to store files such as images.
- **FIREBASE_MESSAGING_SENDER_ID**: The sender ID for Firebase Cloud Messaging, used to send notifications.
- **FIREBASE_APP_ID**: The unique identifier for your Firebase application.
- **FIREBASE_MEASUREMENT_ID**: The measurement ID used for Google Analytics integration with Firebase.
- **CLIENT_EMAIL**: The client email for Firebase Admin SDK, used for authenticating server requests.
- **PRIVATE_KEY**: The private key for Firebase Admin SDK, used for authenticating server requests (make sure to properly format the key and handle it securely).

- **MAIL_HOST**: The SMTP server address used for sending emails.
- **MAIL_USER**: The username for the email account used to send emails.
- **MAIL_PASSWORD**: The password for the email account used to send emails.
- **MAIL_FROM**: The email address that will appear as the sender of the emails.
- **MAIL_PORT**: The port number used for connecting to the SMTP server.

Ensure all these environment variables are filled correctly before running the project.