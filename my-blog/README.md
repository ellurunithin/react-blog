# My React Blog

A blog platform built with React and Vite.

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:5173 in your browser

## Project Structure
my-blog/
├── node_modules/       # Dependencies (don't modify)
├── public/             # Static files like images or icons
├── src/                # Your source code
│   ├── App.jsx         # Main application component, renders the UI
│   ├── main.jsx        # Application entry point, starts the app
│   ├── index.css       # Global styles for your application
│   └── components/     # Folder for reusable components like Header, Footer, etc.
│       └── Header.jsx  # Header component containing the blog's title and navigation
├── package.json        # Project configuration, includes dependencies and scripts
├── vite.config.js      # Vite configuration for the development build tool
├── .gitignore          # Specifies files and folders to be ignored by Git
└── README.md           # Project description and setup instructions


## Screenshot
![header component](image.png)

## What I Learned
React components, vite Setup and Benefits and Version Control with Git

## Components Structure
BlogPost: Displays an individual blog post, showing the title, content, author, date, and read time.
BlogList: Acts as a container for multiple blog posts, rendering a list of BlogPost components.
Header: Contains the site navigation and title, serving as the main header for the website.

## Styling Approach

I chose CSS Modules to keep styles scoped locally to each component, avoiding class name collisions and making styles easier to manage. This approach ensures cleaner, more maintainable code in a component-based structure.

## New Features
BlogPost Component: Displays individual blog posts with title, content, author, date, and read time.

BlogList Component: Contains multiple BlogPost components, rendering a list of blog posts dynamically.

Responsive Design: Ensures the blog layout adjusts for smaller screen sizes.

CSS Modules: Provides scoped styling to avoid class name conflicts, enhancing maintainability and readability.

## Screenshots
![Desktop view](image-1.png)
![Mobile view](image-2.png)