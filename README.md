<a id="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">LEVEL UP</h1>
  <p align="center">
Log achievements, create workouts, and share them with thecommunity!   <br />
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#built-with">Built With</a>
    <ul>
    <li><a href="#deployment">Deployment</a></li>
    </ul>
    </li>
     <li><a href="#installadion">Installation</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>

## About The Project

Level Up allows users to generate and customize workouts, track personal bests and calculate performance metrics. Users can save workouts and interact with their fitness community.

## Features

- **Mobile-First Design**: Optimized interface for seamless use on mobile devices.
- **User Authentication**: Secure login and registration using JWT.
- **CRUD Operations**: Create, read, update, and delete functionalities and delete functionalities for managing user data.
- **RESTful API**: Built with Node.js and Express for efficient data handling.
- **File Upload**: Upload and store files using AWS S3 and Multer.
- **Search Functionality**: Users can search through the database with specific filters.

## Usage

- **View and Manage Workouts**: Browse detailed workout results, edit, or delete personal entries.
- **Engage with Posts**: Like, comment, and share workout results in the feed.
- **Discover Workouts**: Generate random workouts for variety.
- **Filter by Type**: Find specific workouts using filter options.
- **Track your Progress**: Review personal workout history at any time.

For more examples, please go to the [Use Cases](https://github.com/Debi312/level-up/blob/main/doc/README.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=282c34) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

- ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

- ![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=aws&logoColor=white) ![Multer](https://img.shields.io/badge/Multer-0078D4?style=for-the-badge&logo=Microsoft&logoColor=white)

- ![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white) ![Chai](https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white)

### Deployment

- **Backend**: Deployed on [Render](https://render.com) for efficient server-side handling and scalability.
- **Frontend**: Deployed on [Netlify](https://www.netlify.com) for fast and reliable static site hosting.
- **Database**: Managed with [MongoDB Atlas](https://www.mongodb.com/atlas) for a scalable and secure database solution.
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Installation

### Prerequisites

```sh
   npm install npm@latest -g
```

### Installation

Make sure you have the following prerequisites before proceeding with the installation:

- Node.js (version 14 or above)
- MongoDB

### Steps to Run the App and API

1. **Clone the repository**:
   Clone the repository to your local machine using the following command:

   ```sh
   git clone https://github.com/yourusername/your-repository.git
   ```

2. Install NPM packages: First, navigate to both the app and API directories and install the required dependencies.

   ```sh
   cd app
   npm install
   ```

   ```sh
   cd api
   npm install
   ```

3. Configure the .env file: Create a .env file in both the api and app directories and configure it with the necessary API keys, database URLs, etc.

   ```sh
   api/.env

   PORT = 8080
   JWT_SECRET = XXX
   MONGODB_URL= mongodb://localhost:XXXX/levelup

   app/.env

   VITE_API_URL=8080

   ```

4. Run the App (Frontend):

   ```sh
   npm run dev
   ```

5. Run the API (Backend)

   ```sh
   npm start
   ```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Edit user profile
- [ ] Add photo/avatar
- [ ] Implement analytics to calculate weights and repetitions based on personal bests
- [ ] Allow users to customize workouts
- [ ] Add single movement tracking to achievements
- [ ] Display progress graphs
- [ ] Calculate and display personal records (PR)

See the [open issues](https://github.com/Debi312/level-up/issues/1) for a full list of proposed features and known issues.

## Contact

- **Debora Garcia**: [Debi312](https://github.com/Debi312)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/
