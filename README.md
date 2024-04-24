# AllRounder Social Network

![AllRounder Social Network Logo](public/imgs/AllRounder.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

AllRounder Social Network is a full-stack web application that allows users to connect with friends, share posts, and engage in social interactions. It provides a platform for users to create accounts, log in, share posts with images and captions, like and comment on posts, and follow other users.

## Features

- **User authentication**: Register, log in, and log out securely.
- **Profile management**: Update user profile information and upload profile pictures.
- **Post creation**: Share posts with images and captions.
- **Like and comment system**: Interact with posts by liking and commenting.
- **Follow system**: Follow other users to see their posts in the feed.
- **Responsive design**: Supports various screen sizes for a seamless user experience on desktop and mobile devices.

## Technologies Used

### Frontend
- HTML/CSS
- JavaScript (with EJS templating engine)
- Bootstrap (v5.0) - for styling and layout
- Font Awesome - for icons

### Backend
- Node.js - JavaScript runtime environment
- Express.js - Web application framework for Node.js
- MongoDB - NoSQL database for storing user data, posts, and comments
- Mongoose - MongoDB object modeling for Node.js
- Cloudinary - Cloud-based image management for uploading and storing images

### Authentication
- Passport.js - User authentication middleware for Node.js

## Installation

1. Clone the repository:
git clone https://github.com/your-username/AllRounder-Social-Network.git

2. Navigate to the project directory:
cd AllRounder-Social-Network

3. Install dependencies:
npm install

4. Set up environment variables:
- Create a `.env` file in the root directory.
- Define environment variables like `PORT`, 
* `MONGODB_URI`, 
* `SESSION_SECRET`, 
* `CLOUDINARY_CLOUD_NAME`, 
* `CLOUDINARY_API_KEY`,
* `CLOUDINARY_API_SECRET`.

5. Start the server:
npm start

6. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. Register for an account or log in if you already have one.
2. Explore the feed to see posts from users.
3. Create your own posts with images and captions.
4. Like and comment on posts from other users.
5. Follow  users to see their posts in your feed or Unfollow them up to you.

## Future Todoes

- [ ] **UI Renovation using React**: Considering redesigning the frontend using React.js to improve performance, modularity, and user experience.
  
- [ ] **Integrating OAuth 2.0**: Implementation of OAuth 2.0 authentication to allow users to sign in with their existing accounts from popular social media platforms like Google, Facebook, or Twitter.

- [ ] **Real-time Updates**: Planning on adding real-time updates for notifications, likes, and comments using technologies like WebSockets or server-sent events.

- [ ] **Explore Page**: An explore page to discover new users, trending posts, or recommended content based on user interests and interactions is a good idea.

- [ ] **Mobile Application**: Developing a mobile application for iOS and Android platforms.

- [ ] **Accessibility Improvements**: Ensure the application meets accessibility standards and guidelines to make it usable for all users, including those with disabilities.


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
