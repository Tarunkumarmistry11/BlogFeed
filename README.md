MERN Blog Posting Application
This is a full-stack blog posting web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to create, view, and filter blogs based on their location. It also supports rich text editing for blog posts and includes user authentication and a payment checkout process for publishing blogs.

Features
User Authentication: Secure login using JWT and Google OAuth.
Blog Management: Users can create, edit, and delete blog posts.
Location-Based Filtering: Blogs are filtered based on the user's location.
Rich Text Editor: Allows users to create blogs using a block-based rich text editor.
Payment Integration: Users must complete a payment checkout to publish blogs.
Responsive Design: Built with Tailwind CSS to ensure an elegant and responsive UI across all devices.
Public Blog Feed: Anyone can browse public blogs posted by users.
Tech Stack
Frontend
React.js: For building the user interface.
Tailwind CSS: For styling and responsive design.
React Router: For client-side routing between pages.
Rich Text Editor: A block-based editor for blog creation.
Backend
Node.js: For server-side logic.
Express.js: As the backend framework.
MongoDB: As the NoSQL database.
Mongoose: For MongoDB object modeling.
JWT Authentication: For securing routes and user sessions.
Google OAuth: For enabling Google login.
Deployment
Vercel: For deploying the frontend.
Render/Heroku: For deploying the backend (Node.js/Express.js server).
Prerequisites
Before you begin, ensure you have met the following requirements:

You have installed the latest version of Node.js.
You have a MongoDB Atlas account or a local instance of MongoDB.
You have a Google Developer account for OAuth configuration.
You have a payment gateway setup (e.g., Stripe) if required.
Getting Started
Follow these steps to set up the project on your local machine:

Clone the Repository
bash
Copy code
git clone https://github.com/mistrytarun2000/mern-blog-app.git
cd mern-blog-app
Install Dependencies
Navigate to the root of the project and install backend dependencies:

bash
Copy code
cd backend
npm install
Then, navigate to the frontend folder and install the frontend dependencies:

bash
Copy code
cd ../frontend
npm install
Environment Variables
Create a .env file in the backend directory and add the following variables:

bash
Copy code
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.kq6ty.mongodb.net/<database_name>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
PORT=5000
Replace <username>, <password>, and <database_name> with your MongoDB credentials.

Running the Application
Start the backend server:
bash
Copy code
cd backend
npm run dev
Start the frontend React app:
bash
Copy code
cd ../frontend
npm start
The backend server will run on http://localhost:5000, and the frontend React app will run on http://localhost:3000.

Folder Structure


mern-blog-app/
│
├── backend/
│   ├── controllers/        # Route handlers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Authentication middleware (JWT)
│   ├── server.js           # Main backend server file
│   ├── .env                # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/     # React components (Dashboard, Login, Blog Editor)
│   │   ├── App.js          # Main React app file
│   │   ├── index.js        # Entry point for React
│   │   ├── styles/         # Tailwind CSS styles
│   ├── .env                # Environment variables for frontend
│
├── README.md               # Project documentation





API Endpoints

Authentication
POST /api/users/register: Register a new user.
POST /api/users/login: User login with email and password.
GET /api/users/google: Google OAuth login.
Blogs
GET /api/blogs: Fetch all public blogs.
POST /api/blogs: Create a new blog (requires authentication and payment).
PUT /api/blogs/:id: Edit an existing blog (requires authentication).
DELETE /api/blogs/:id: Delete a blog (requires authentication).
Deployment
Frontend Deployment
Deploy the React frontend on Vercel:

Link your GitHub repository to Vercel.
Configure the necessary environment variables in Vercel.
Backend Deployment
Deploy the backend on Render or Heroku:

Push your repository to GitHub.
Link your Render or Heroku app to the GitHub repository.
Add the environment variables in the Render/Heroku settings.
Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and make your changes. Feel free to open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more information.

Contact
For any inquiries or feedback, please contact Tarun Kumar Mistry.





