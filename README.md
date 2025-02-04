# AllRounder Social Network

![AllRounder Social Network Logo](public/imgs/AllRounder-smaller.png)

A modern social networking platform built with Node.js, Express, and MongoDB.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Overview

AllRounder Social Network is a full-stack social media application that enables users to share moments, connect with friends, and engage with their community. The platform supports image sharing, user interactions, and real-time social features.

## Features

- 🔐 **User Authentication**
  - Secure login and registration
  - Password encryption with bcrypt
  - Session management
- 📱 **Core Social Features**
  - Create posts with images and captions
  - Follow/unfollow other users
  - Like and comment on posts
  - User profile customization
- 🎯 **Technical Features**
  - Cloudinary integration for image management
  - Async/await pattern for database operations
  - RESTful API architecture
  - Responsive design for all devices

## Tech Stack

- **Frontend:**

  - EJS templating
  - Tailwind CSS
  - JavaScript (ES6+)

- **Backend:**

  - Node.js & Express.js
  - MongoDB with Mongoose ODM
  - Passport.js for authentication
  - Cloudinary for image hosting

- **DevOps:**
  - Git for version control
  - Environment variables for configuration
  - Error handling and logging

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Cloudinary account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/AllRounder-Social-Network.git
cd AllRounder-Social-Network
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

- Create a `.env` file in the root directory.
- Define environment variables like `PORT`,

* `DB_STRING`,
* `CLOUDINARY_CLOUD_NAME`,
* `CLOUDINARY_API_KEY`,
* `CLOUDINARY_API_SECRET`.

5. Start the server:

```bash
npm run dev
```

### Project Structure

```bash
└── AllRounder-Social-Network
    ├── config/
    │   ├── database.js    # Database configuration
    │   └── passport.js    # Authentication configuration
    ├── controllers/       # Route controllers
    ├── middleware/        # Custom middleware
    ├── models/           # Database models
    ├── public/           # Static files
    ├── routes/           # Application routes
    ├── views/            # EJS templates
    └── server.js         # Application entry point
```

### Environment Variables

```bash
PORT=3000                        # Application port
DB_STRING=                       # MongoDB connection string
CLOUDINARY_CLOUD_NAME=           # Cloudinary cloud name
CLOUDINARY_API_KEY=              # Cloudinary API key
CLOUDINARY_API_SECRET=           # Cloudinary API secret
```

### Roadmap

- [ ]Migrate frontend to React.js
- [ ]Implement OAuth 2.0 authentication
- [ ]Add real-time notifications using WebSocket
- [ ]Build mobile applications (iOS/Android)
- [ ]Implement content recommendation system
- [ ]Add direct messaging feature
- [ ]Enhance accessibility features

### Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the LICENSE file for details.
