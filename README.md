Netflix Clone with React, Redux, Firebase Authentication, Tailwind CSS, and Vite
Netflix Clone

Overview
This project is a Netflix clone built with React, Redux, Firebase Authentication, Tailwind CSS, and Vite. It allows users to browse and watch movie trailers. The website is deployed on Netlify, and you can access it here.

Features
User Authentication: Firebase Authentication is integrated to provide secure user authentication. Users can sign up, log in, and enjoy a personalized experience.

Movie Catalog: The website displays a catalog of movies that users can browse. Each movie is accompanied by a title, description, and poster.

Trailer Playback: Users can play movie trailers directly on the website, enhancing the user experience.

Responsive Design: Tailwind CSS is used to ensure a responsive and visually appealing design across various devices and screen sizes.

Getting Started
To get a local copy of the project up and running, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/netflix-clone.git
Change into the project directory:

bash
Copy code
cd netflix-clone
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add your Firebase configuration:

env
Copy code
REACT_APP_API_KEY=your-api-key
REACT_APP_AUTH_DOMAIN=your-auth-domain
REACT_APP_PROJECT_ID=your-project-id
REACT_APP_STORAGE_BUCKET=your-storage-bucket
REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_APP_ID=your-app-id
Replace your-api-key, your-auth-domain, etc., with your Firebase project details.

Start the development server:

bash
Copy code
npm run dev
The application should now be running locally at http://localhost:3000.

Deployment
The project is deployed on Netlify. Any changes pushed to the main branch will automatically trigger a new deployment.

Technologies Used
React
Redux
Firebase Authentication
Tailwind CSS
Vite
Contributing
Feel free to contribute to the project. Fork the repository, make your changes, and submit a pull request.
