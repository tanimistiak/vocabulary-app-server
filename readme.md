# Server Side Code - README

## Folder Structure

```
/server
├── /models            # Mongoose models
├── /routes            # API routes
│   ├── /admin         # Admin-specific routes
│   └── /user          # User-specific routes
├── /middleware        # Middleware for authentication, validation, etc.
├── /services          # Business logic and services
│   ├── /admin         # Admin-related services
│   └── /user          # User-related services
├── /utils             # Utility functions (e.g., error handling, logging)
├── .env.local               # Environment variables for local development
├── server.js          # Entry point of the server
└── package.json       # NPM dependencies and scripts
```

## Prerequisites

Before starting the server, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Firebase](https://firebase.google.com/) account for the service key to get firebase admin

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tanimistiak/vocabulary-app-server.git
   cd vocabulary-app-server
   ```

2. **Install dependencies:**

   Ensure you are in the root directory of the project and run:

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create two `.env` files in the root directory:

   - `.env.local` for local development

   Example `.env.local` file:

   ```env
   MONGO_URI=mongodb://localhost:27017/your-database-name
   KEY=your-firebase-service-key
   ```

4. **Start the server:**

   To start the server in development mode, run:

   ```bash
   npm run start-dev
   ```

   If you're ready for production, use:

   ```bash
   npm run start
   ```

5. **Server should now be running on `http://localhost:5000` by default.**

## Project Structure

### `server.js`

- The entry point of the server where I set up middleware, routes, and connect to the database.

### `/models`

- Contains Mongoose models for the database schema.
- Example: `Vocabulary.js` for user schema, `Lesson.js` for lesson schema, etc.

### `/routes`

- Contains the route handlers for both the **Admin** and **User** sections of the application.
- **Admin routes** are in `admin/`, and **User routes** are in `user/`.

### `/middleware`

- Contains middleware functions such as authentication, validation, error handling, etc.
- Example: `authentication.js` that verifies cookies protected routes.

### `/services`

- Business logic for **Admin** and **User** operations.
- **Admin services** are in `/services/admin/`, and **User services** are in `/services/user/`.

### `/utils`

- DB connection function used across the application.

## API Endpoints

### Admin Routes

- `GET /admin/add-lesson` - Add Lesson.
- `POST /admin/add-vocabulary` - Add Vocabulary.

### User Routes

- `POST /user/get-lessons` - User view lessons.

## Firebase Integration

This project integrates Firebase for user authentication and other services. Ensure you have your Firebase service key in the `.env` file as `KEY`.

### Firebase Service Key

- Obtain your Firebase service key from the Firebase Console.
- Add it to your `.env` and `.env.production` files.

Example:

```env
KEY=your-firebase-service-key
```

## Database Configuration

The project uses MongoDB as the database. The connection URI is configured in the `.env` file as `MONGO_URI`.

Make sure your MongoDB database is running or connect to a MongoDB Atlas cluster in the cloud.

## Running in Production

To run the server in production mode:

1. Set the environment variables for production in `.env.production`.
2. Build the app:

   ```bash
   npm run build
   ```

3. Start the server:

   ```bash
   npm run start
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
