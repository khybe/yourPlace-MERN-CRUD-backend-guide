# yourPlace MERN CRUD Backend Guide

This repository contains the backend codebase for the "yourPlace" MERN (MongoDB, Express, React, Node.js) CRUD application. The backend handles various functionalities such as user authentication, place management, image storage, and more. This README provides an overview of the repository and its commit history.

## Getting Started

To set up the backend on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd yourPlace-MERN-CRUD-backend-guide`.
3. Install the required dependencies: `npm install`.
4. Configure your environment variables. Create a `.env` file and add the necessary configurations (e.g., MongoDB connection string, AWS S3 credentials, JWT secret, etc.).
5. Run the backend server: `npm start`.

## Commit History

### Apr 15, 2023

- Implemented Persistent Image Storage using AWS S3 with the `aws-sdk` for JavaScript.
- Author: @khybe

### Apr 9, 2023

- Cleaned up the `uploads/images` directory.
- Author: @khybe

### Mar 24, 2023

- Updated `package.json` main entry to `index.js`.
- Renamed `index.js` to `app.js`.
- Changed `app.js` to `index.js` for deployment to "cyclic".
- Removed `vercel.json` file.
- Removed `uploads` folder from `.gitignore`.
- Removed `engines` field from `package.json`.
- Author: @khybe

### Mar 23, 2023

- Added `process.env.PORT` configuration.
- Added deployed URL.
- Prepared for deployment to Vercel.
- Added `uploads` folder to `.gitignore` to prevent code changes pollution.
- Author: @khybe

### Mar 22, 2023

- Implemented Environment Variables setup for Node.js.
- Author: @khybe

### Mar 21, 2023

- Made general app improvements (requires corresponding frontend adjustments).
- Added authorization for 'Delete Places' and changed error code for Invalid requests.
- Added authorization to update places.
- Author: @khybe

### Mar 20, 2023

- Adjusted `check-auth.js` to accept OPTIONS method.
- Implemented backend route protection with Auth Middleware.
- Generated tokens (JWT) on the backend.
- Implemented user login with hashed passwords.
- Hashed user passwords securely.
- Deleted images when places are deleted.
- Implemented image upload for new places (requires frontend & backend code updates).
- Served images statically.
- Connected users to images (requires frontend coding).
- Author: @khybe

### Mar 19, 2023

- Fixed a typo.
- Implemented backend filtering for files (images only).
- Used Multer to save files (images) on the backend.
- Author: @khybe

### Mar 16, 2023

- Fixed a typo.
- Author: @khybe

### Mar 15, 2023

- Adjusted login response to include user's data for extracting its ID.
- Author: @khybe

### Mar 14, 2023

- Handled CORS errors after sending POST request from frontend to signup.
- Set up initial connection between frontend and backend by changing collection names.
- Author: @khybe

### Mar 13, 2023

- Cleaned up code.
- Implemented deleting places and removing them from the user.
- Created places and associated them with a user.
- Added relations between places and users.
- Fetched users.
- Added user login functionality.
- Used the user model for signup.
- Author: @khybe

### Mar 12, 2023

- Created the user model.
- Deleted a place.
- Updated a place.
- Author: @khybe

### Mar 11, 2023

- Fetched places by the userID.
- Fetched a place by the placeID.
- Created and stored documents in the database.
- Created the Place schema and model.
- Installed Mongoose and connected the backend to MongoDB.
- Author: @khybe

### Mar 10, 2023

- Created `nodemon.json` file and added it to `.gitignore` to ignore important configurations.
- Used Google's Geocoding API to convert an address into coordinates.
- Validated patch requests and user routes.
- Validated API input (request bodies).
- Set up user routes (signup, login, get users).
- Finalized 'Get Places by User ID' functionality.
- Deleted a place.
- Added a patch route to update a place.
- Author: @khybe

### Mar 9, 2023

- Handled errors for unsupported routes.
- Added a POST route and used Postman for testing.
- Added controllers.
- Implemented custom error model.
- Handled errors.
- Fetched a place by user ID.
- Added place-specific routes.
- Author: @khybe

### Mar 8, 2023

- Implemented basic routing setup.
- Set up the initial project structure.
- Author: @khybe

## Credits

This project is based on the online course by Maximilian Schwarzmüller. The commits in this repository represent steps taken in the course.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to use, modify, and distribute the code for educational purposes or personal use. If you're using this repository as a reference while following the online course, make sure to respect the terms and conditions of the course and the original author.

**Happy coding!**
