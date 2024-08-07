# FoodieDelight Admin Panel

## Overview

FoodieDelight is a Restaurant Admin Panel built using React and MUI. This application allows administrators to add, edit, delete, and view restaurant details, including menu items. It is designed to be responsive, user-friendly, and easily deployable to a production environment.

## Features

- Add, edit, delete, and view restaurant details.
- Manage restaurant menus, including adding, editing, and deleting menu items.
- Upload and display restaurant images.
- Responsive design for seamless use on different devices.

## Technologies Used

- **Frontend:** React, MUI
- **State Management:** React Hook Form
- **Routing:** React Router
- **HTTP Client:** Axios
- **Build Tool:** Webpack
- **Testing:** Jest, React Testing Library
- **Deployment:** Netlify/Vercel/AWS S3 (Choose one based on your preference)

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or Yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sundaram-Meenakshi/foodie-delight
   cd foodie-delight
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   REACT_APP_API_BASE_URL=http://your-api-base-url
   REACT_APP_OTHER_ENV_VARIABLE=your-value
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

   The application will be available at `http://localhost:3000`.

2. **Build for production:**

   ```bash
   npm run build
   # or
   yarn build
   ```

   This will generate optimized static files in the `build` directory.

3. **Serve the production build locally (optional):**

   ```bash
   npx serve -s build
   ```

   This serves the production build locally to test before deployment.

### Running Tests

1. **Run unit and integration tests:**

   ```bash
   npm test
   # or
   yarn test
   ```

2. **Run end-to-end tests:**

   (Assuming you have set up Cypress or a similar tool)

   ```bash
   npm run e2e
   # or
   yarn e2e
   ```

### Deployment

1. **Deploy to Netlify:**

   - Connect your GitHub repository to Netlify.
   - Set up build settings with the build command `npm run build` and publish directory as `build`.
   - Add environment variables in the Netlify dashboard.

2. **Deploy to Vercel:**

   - Connect your GitHub repository to Vercel.
   - Configure project settings and deploy.

3. **Deploy to AWS S3:**

   - Build the project using `npm run build`.
   - Upload the contents of the `build` directory to an S3 bucket.
   - Configure the S3 bucket to serve a static website.
   - (Optional) Use CloudFront for CDN distribution.
