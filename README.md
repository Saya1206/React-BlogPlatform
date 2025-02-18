# Blog Platform

## Overview

Blog Platform is a web application built using React.js that allows users to authenticate via Firebase. The application restricts access to the home page to only authenticated users. It includes pages like **Create**, **About**, and **Contact Us**.

## Features

- **Firebase Authentication:** User login and signup using Firebase Authentication.
- **Authenticated Routes:** The homepage is accessible only to logged-in users.
- **Pages:**  
  - **Create Page**: Allows users to create a blog post (can be extended for CRUD operations).  
  - **About Page**: Displays information about the blog platform.  
  - **Contact Us Page**: A form for users to contact the blog team.  
- **Dynamic Navbar:** If logged in, a **Logout** button appears; otherwise, a **Login** button is displayed.  
- **Environment Variables for Security:** Firebase credentials are stored in a `.env` file instead of being hardcoded.

## Tech Stack

- **Frontend:** React.js  
- **Backend:** Firebase (for authentication)  

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/BlogPlatform.git
   cd BlogPlatform

2. Install dependencies:
    npm install

3. Set up Firebase Authentication: Follow the steps below to enable Firebase         Authentication in your project.

## Steps to Include Firebase Authentication
### **Step 1: Create a Firebase Project**
1. Go to Firebase Console.
2. Click on "Add Project" and follow the prompts to create a new Firebase project.
3. After the project is created, you'll be redirected to the Firebase Console dashboard for your project.

### **Step 2: Enable Firebase Authentication**
1. In the Firebase Console, click on "Authentication" in the left sidebar.
2. Under the "Sign-in method" tab, enable Email/Password sign-in by clicking the "Enable" button.
3. Save the changes.

### **Step 3: Get Firebase Configuration**
1. In the Firebase Console, go to Project Settings (click the gear icon in the top-left corner).
2. Scroll down to "Your apps", select "Web", and then click on the "Firebase SDK snippet".
3. Copy the Firebase configuration snippet that contains your API keys and other project-specific details.

### **Step 4: Secure Firebase Configuration Using .env File**
1. Create a .env file in the root directory of your project.

2. Add your Firebase credentials inside the .env file:

    Create a `.env` file in the root directory and add the following Firebase credentials:

    ```ini
    REACT_APP_API_KEY=your-api-key
    REACT_APP_AUTH_DOMAIN=your-auth-domain
    REACT_APP_PROJECT_ID=your-project-id
    REACT_APP_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_APP_ID=your-app-id

3. Update .gitignore to ensure the .env file is not committed to version control:
    # Ignore environment variable files
    .env

4. Modify the `firebase.js` file to use environment variables:

    ```javascript
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
    };

 
## Pages and Components

### **Create Page (CreatePost.js)**
1. This page allows authenticated users to create blog posts.
2. You can extend this to implement Create, Read, Update, and Delete functionality for posts later.

### **About Page (About.js)**
1. Provides information about the blog platform.

### **Contact Us Page (ContactUs.js)**
1. Contains a form for users to contact the blog team.

### **Navbar Component**
1. The navbar shows either a Login button (if the user is not logged in) or a Logout button (if the user is logged in).
2. The navbar is dynamic and changes based on the user's authentication status.

## Running the Project
1. Start the development server:
    npm start

2. Open http://localhost:3000/ in your browser.

## Live Demo

Check out the live version of this project:  
👉 **[Blog Platform Live Demo](https://react-blog-platform-89xm4rlqe-sayali-patils-projects-a2f87a14.vercel.app)**

