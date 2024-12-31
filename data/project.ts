// data/projects.ts

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl: {
      url: string;
      type: string; // Specifies the type for icon rendering
    }[];
    features: string[];
  }
  
  export const projects: Project[] = [
    {
      title: "JobBoard Frontend",
      description:
        "A web application designed for job seekers, employers, and admins. Features role-based dashboards, job listings, and dark mode support.",
      image: "jobportal.png",
      tags: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Radix UI",
        "React Query",
        "Next-Themes",
        "JWT Authentication",
      ],
      liveUrl: "https://react-job-portal-frontend-ten.vercel.app/",
      githubUrl: [
        { url: "https://github.com/ADITHYANBASOK/React-Job-Portal-Frontend", type: "FaReact" },
        { url: "https://github.com/ADITHYANBASOK/Node-Job-Portal-Backend", type: "FaNodeJs" },
      ],
      features: [
        "Role-Based Dashboard",
        "Job Listings",
        "Applications Management",
        "Messaging System",
        "User Profiles",
        "Admin Controls",
        "Dark Mode Support",
        "JWT Authentication",
      ],
    },
    {
      title: "ExpenseTracker",
      description:
        "A modern expense tracking application built with React and Vite, featuring a responsive design, dark mode support, and comprehensive expense management capabilities.",
      image: "expensetraker.png",

      features: [
        "💰 Expense Management: Add, edit, and delete expenses, Categorize expenses, Track spending patterns, Set budgets and receive alerts.",
        "📊 Dashboard Analytics: Monthly expense trends, Category-wise breakdown, Budget vs. actual spending, Savings rate calculation.",
        "🎨 Modern UI/UX: Responsive design, Dark/Light theme, Mobile-first approach, Smooth transitions.",
        "🔒 Authentication: User registration, Secure login, Protected routes.",
      ],
      tags: ["React.js", "Vite", "Dark Mode", "Responsive Design"],
      liveUrl: "https://react-expense-traker-frontend.vercel.app/",
      githubUrl: [
        { url: "https://github.com/ADITHYANBASOK/React-ExpenseTraker-Frontend", type: "FaReact" },
        { url: "https://github.com/ADITHYANBASOK/Node-ExpenseTraker-backend", type: "FaNodeJs" },
      ],
    },
    {
      title: "SnapNotes",
      description:
        "A Note Application built with React, TypeScript, and Vite. It provides an optimized setup for fast development with HMR (Hot Module Replacement) and strict linting rules for cleaner, more reliable code.",
      image: "snapnotes.png",

      features: [
        "🚀 Lightweight & Fast: Powered by Vite for a speedy development experience.",
        "✅ Type Safety: Fully typed with TypeScript.",
        "🔍 Linting: Includes ESLint with customizable rules.",
        "⚛️ Modern React: Built with React 18 and JSX runtime.",
        "📂 Expandability: Easily extendable to include new features like markdown support, tags, and search functionality.",
      ],
      tags: ["React.js", "TypeScript", "Vite", "ESLint", "HMR"],
      liveUrl: "https://react-snap-notes.vercel.app/", // Replace with actual live URL if available
      githubUrl: [
        {
          url: "https://github.com/ADITHYANBASOK/React-SnapNotes",
          type: "FaReact",
        },
      ],
    },
    {
      title: "YouTube Clone",
      description:
        "A responsive YouTube-like application built with React and Vite, utilizing the YouTube Data API for dynamic video content. This project demonstrates core React concepts, routing with react-router-dom, and a clean UI using Tailwind CSS.",
      image: "youtube-clone.png",

      features: [
        "🔥 Trending Videos: Display trending content fetched from the YouTube API.",
        "📂 Dynamic Sidebar: Collapsible sidebar for easy navigation.",
        "🎵 Video Categories: Explore different categories like Music, Gaming, and Movies.",
        "📽️ Video Details: View detailed information about a specific video.",
        "🔍 Search Functionality: Find videos with keyword-based search.",
      ],
      tags: ["React.js", "Vite", "Tailwind CSS", "YouTube API", "Routing"],
      liveUrl: "https://react-youtube-clone-psi.vercel.app/", // Replace with the actual live link if available
      githubUrl: [
        {
          url: "https://github.com/ADITHYANBASOK/React-Youtube-clone",
          type: "FaReact",
        },
      ],
    },
    {
      "title": "Language Translator 🌐",
      "description": "A responsive web application built with React for real-time language translation, text-to-speech, voice input, and clipboard support.",
      "image": "translator.png",
      "tags": ["React", "Translation", "Text-to-Speech", "Voice Input", "Responsive Design"],
      "liveUrl": "https://react-language-translator-xi.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Language-Translator",
          "type": "FaReact"
        },
        {
          "url": "https://github.com/ADITHYANBASOK/Language-Translator-Backend",
          "type": "FaNodeJs"
        }
      ],
      "features": [
        "Language Translation: Translate text between various supported languages.",
        "Text-to-Speech: Convert translated text into speech.",
        "Voice Input: Use your microphone to input text for translation.",
        "Clipboard Support: Easily copy text or translations to your clipboard.",
        "Hot Module Replacement (HMR): Instantly updates modules without a full reload.",
        "ESLint: Ensures code quality and consistency."
      ]
    },
    {
      "title": "E-Commerce App",
      "description": "A simple e-commerce web application built with React to browse, view, and manage products, featuring cart functionality and responsive design.",
      "image": "ecommerce.png",
      "tags": ["React", "Axios", "React Router", "Tailwind CSS"],
      "liveUrl": "https://react-ecommerce-app-liard.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Ecommerce-App",
          "type": "FaReact"
        }
      ],
      "features": [
        "Home page displaying featured products.",
        "Category page to browse products by category with sorting options.",
        "Detailed product view with information and related products.",
        "Cart page to add, view, and remove products from the shopping cart.",
        "Responsive design for optimized usability across devices."
      ]
    },
    {
      "title": "Weather App (React)",
      "description": "A responsive weather dashboard providing real-time weather updates, hourly forecasts, and a 5-day outlook, with features like geolocation-based weather and favorite cities.",
      "image": "breezi.png",
      "tags": ["React", "TypeScript", "Weather", "Geolocation", "React Query", "Responsive UI"],
      "liveUrl": "https://react-whether-app.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Whether-App",
          "type": "React"
        }
      ],
      "features": [
        "Current Weather: View temperature, humidity, wind speed, and more.",
        "Hourly Forecast: 24-hour temperature predictions.",
        "Weather Details: Visibility, pressure, sunrise/sunset times.",
        "5-Day Forecast: Extended weather outlook.",
        "Location-based Weather: Uses geolocation to show weather.",
        "City Search: Find weather data globally.",
        "Favorites: Save cities for quick access.",
        "Responsive Design: Optimized for mobile, tablet, and desktop."
      ]
    },
    {
      "title": "QR Code Generator",
      "description": "A React.js application that generates customizable QR codes with options to download or share.",
      "image": "qr-generator.png",
      "tags": ["React", "Tailwind CSS", "QRCode.react", "Dark Mode"],
      "liveUrl": "https://react-qr-code-generator-smoky.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-QR-Code-Generator",
          "type": "FaReact"
        }
      ],
      "features": [
        "Generate QR codes for text or URLs.",
        "Customize QR code size, colors, and error correction levels.",
        "Dark mode for enhanced usability.",
        "Download QR codes as PNG or SVG.",
        "Share QR codes via browser's native sharing capabilities."
      ]
    },
    {
      "title": "Text to Speech Application",
      "description": "An interactive Text to Speech (TTS) application built with React, enabling users to convert text to speech, select voices, adjust speed, and download the audio.",
      "image": "text-speech.png",
      "tags": ["React", "Text to Speech", "Interactive", "Audio Conversion", "Responsive Design"],
      "liveUrl": "https://react-text-to-speach.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Text-to-Speach",
          "type": "frontend"
        }
      ],
      "features": [
        "Text Input: Users can enter any text to be converted to speech.",
        "Voice Selection: Choose from a variety of available voices.",
        "Speed Control: Adjust the speed of the speech (0.5x to 2x).",
        "Playback Controls: Play, pause, stop, and download the generated audio.",
        "Responsive Design: Optimized for all devices."
      ]
    },
    {
      "title": "Animation Showcase",
      "description": "A React Vite application showcasing various animations using Framer Motion and React Spring, featuring interactive components, SVG animations, and physics-based transitions.",
      "image": "animation.png",
      "tags": ["React", "Vite", "Framer Motion", "React Spring", "Animations"],
      "liveUrl": "https://react-animation-showcase.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Animation-Showcase",
          "type": "frontend"
        }
      ],
      "features": [
        "Framer Motion Examples:",
        " - SVG car animation.",
        " - Animated list.",
        " - Spring bouncing ball.",
        " - Interactive button with hover and tap effects.",
        " - Draggable card.",
        " - Scroll-triggered animations.",
        "React Spring Examples:",
        " - Physics-based bouncing ball.",
        " - Spring-powered hover effects.",
        " - Toggle animations.",
        " - Fading text with looping animations.",
        " - Rotating square with smooth transitions."
      ]
    },
    {
      title: "KALIKA",
      description: "Kalika is a web application for Disabled persons. It provides disabled persons a platform to sell their manufactured products and offers free online doctor consultations.",
      image: "kalika.png",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "Git"],
      // liveUrl: "https://react-youtube-clone-psi.vercel.app/",
      githubUrl: [
        { url: "https://github.com/ADITHYANBASOK/React-Kalika-Frontend", type: "FaReact" },
        { url: "https://github.com/ADITHYANBASOK/Node-Kalika-Backend", type: "FaNodeJs" },
      ],
      features: [
        "Online doctor consultations",
        "User-friendly dashboard",
        "Real-time chat support",
        "Customizable product listings"
      ]
    },
    {
      "title": "Memory Game",
      "description": "A fun and interactive memory game built with React! The game challenges players to match pairs of cards while tracking moves, time, and high scores.",
      "image": "memmory-game.png",
      "tags": ["React", "Game", "Interactive", "Animations", "Responsive Design"],
      "liveUrl": "https://react-memory-card-game-gilt.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Memory-card-game",
          "type": "FaReact"
        }
      ],
      "features": [
        "Two Difficulty Levels: Easy (4x4 grid) and Medium (6x6 grid).",
        "Real-time Updates: Moves counter, timer, and high score tracking.",
        "Responsive Design: Works seamlessly across devices.",
        "Animations & Sounds: Flip animation, match feedback, and victory sound effects."
      ]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      image: "task-hive.png",
      tags: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
      liveUrl: "https://taks-hive.vercel.app/",
      githubUrl: [
        { url: "https://github.com/ADITHYANBASOK/TaksHive", type: "FaReact" },       
      ],
      features: [
        "Real-time collaboration",
        "Task assignment and tracking",
        "Project timelines and Gantt charts",
        "Notifications and reminders"
      ]
    },
    {
      "title": "Real-Time Chat Application",
      "description": "A real-time chat application built using React, Node.js, Socket.IO, and MongoDB, featuring user authentication, real-time messaging, and user presence tracking.",
      "image": "Realchat.png",
      "tags": ["React", "Node.js", "Socket.IO", "MongoDB", "Authentication", "Real-Time Messaging"],
      // "liveUrl": "https://chat-app-example.com",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Real-Chat-FrontEnd",
          "type": "FaReact"
        },
        {
          "url": "https://github.com/ADITHYANBASOK/Node-Real-Chat-Backend",
          "type": "FaNodeJs"
        }
      ],
      "features": [
        "Authentication: Users can sign up, log in, and access their dashboard.",
        "Real-time Messaging: Chat with other users in real-time using WebSockets (via Socket.IO).",
        "User Presence: Displays online/offline status for users.",
        "Search Users: Ability to search for users to start direct messages.",
        "Responsive Design: Built with Tailwind CSS for a responsive layout.",
        "Private Route: Protect certain pages (e.g., dashboard and settings) with authentication."
      ],
      // "techStack": [
      //   "Frontend: React, React Router DOM, Tailwind CSS, Axios, React Hot Toast (for notifications), Headless UI (for modal), Heroicons (for icons).",
      //   "Backend: Node.js, Express.js, Socket.IO (for real-time communication), MongoDB, JWT Authentication."
      // ]
    },
    {
      "title": "Pomodoro Timer",
      "description": "A customizable Pomodoro Timer application built with React, Zustand, and Tailwind CSS to help enhance productivity using the Pomodoro Technique.",
      "image": "pomodoro.png",
      "tags": ["React", "Zustand", "Tailwind CSS", "Productivity"],
      "liveUrl": "https://react-pomodoro-timer-bay.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Pomodoro-Timer",
          "type": "FaReact"
        }
      ],
      "features": [
        "Focus and break phases using the Pomodoro Technique.",
        "Customizable durations for work, short breaks, and long breaks.",
        "Desktop notifications with sound alerts.",
        "Session tracking with automatic transitions between phases.",
        "Responsive design powered by Tailwind CSS.",
        "Built with React and Vite for a fast development experience.",
        "Support for SWC and Babel for optimized builds."
      ]
    },
    {
      "title": "Quiz App",
      "description": "A responsive and interactive quiz application built with React and Framer Motion, featuring progress tracking, question navigation, hints, and a detailed results summary.",
      "image": "mcq.png",
      "tags": ["React", "Framer Motion", "Quiz", "Interactive", "Progress Tracking"],
      "liveUrl": "https://react-quiz-app-beta-eight.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Quiz-App",
          "type": "frontend"
        }
      ],
      "features": [
        "Dynamic Questions: Displays a series of questions with multiple-choice answers.",
        "Progress Tracking: Displays current progress with a progress bar.",
        "Hint System: Provides optional hints for questions.",
        "Interactive Animations: Animations powered by Framer Motion for a smooth user experience.",
        "Results Summary: Detailed summary of answers after completing the quiz.",
        "Restart Functionality: Option to retake the quiz."
      ]
    },
    {
      "title": "Form Validation Comparison",
      "description": "A React application comparing two popular form validation methods: Formik and React Hook Form, both integrated with Yup for schema validation.",
      "image": "form-validation.png",
      "tags": ["React", "Formik", "React Hook Form", "Yup", "Form Validation"],
      "liveUrl": "https://react-form-validator-seven.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Form-Validator",
          "type": "FaReact"
        }
      ],
      "features": [
        "Formik Validation: Using Formik's form management and Yup for validation.",
        "React Hook Form Validation: Using React Hook Form's simple and performant form management, with Yup for validation.",
        "Demonstrates both libraries in the same application.",
        "Supports multiple field types, including text, file uploads, and passwords.",
        "Displays a success message upon form submission."
      ]
    },
    {
      "title": "Tic Tac Toe",
      "description": "A simple and responsive Tic Tac Toe game built with React, allowing users to play against a friend or AI, track scores, and reset the game.",
      "image": "tic-tac-toe.png",
      "tags": ["React", "TypeScript", "Game", "Tic Tac Toe", "Interactive"],
      "liveUrl": "https://react-tic-tac-toe-bice-nine.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Tic-Tac-Toe",
          "type": "frontend"
        }
      ],
      "features": [
        "Play Tic Tac Toe against a friend or AI (if extended).",
        "Tracks the score of Player X and Player O.",
        "Displays the game status (winner or draw).",
        "Option to reset the game and clear the scores."
      ]
    },
    {
      "title": "Angular Todo App",
      "description": "An interactive and minimalist Todo App built using Angular with standalone components, enabling users to manage tasks efficiently in a reactive environment.",
      "image": "todo-angular.png",
      "tags": ["Angular", "RxJS", "Standalone Components", "Todo App", "Reactive Design"],
      "liveUrl": "https://angular-to-do-app-tau.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/Angular-ToDo-App",
          "type": "frontend"
        }
      ],
      "features": [
        "Add Todo: Input new tasks to add to the todo list.",
        "Mark as Complete/Incomplete: Toggle tasks between completed and pending states.",
        "Delete Todo: Remove tasks from the list.",
        "Reactive Design: Leverages Angular's reactive patterns for real-time updates."
      ],  
    },
    {
      "title": "React Calculator App",
      "description": "A feature-rich calculator application built with React and Vite. This app provides essential arithmetic operations, a responsive interface, and support for keyboard inputs.",
      "image": "calculator.png",
      "tags": ["React", "Vite", "Calculator", "Responsive", "Keyboard Support"],
      "liveUrl": "https://react-calculator-one-vert.vercel.app/",
      "githubUrl": [
        {
          "url": "https://github.com/ADITHYANBASOK/React-Calculator",
          "type": "frontend"
        }
      ],
      "features": [
        "Basic arithmetic operations: Addition, Subtraction, Multiplication, Division.",
        "Supports decimal calculations.",
        "Clear and Backspace functionality.",
        "Keyboard navigation for seamless input.",
        "Responsive design suitable for all devices."
      ]
    },
    {
      title: "Weather Forecast App (Vue.js)",
      description: "A sleek weather application with location-based forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["Vue.js" , "OpenWeatherMap API"],
      liveUrl: "https://weather-app-x23b.vercel.app/",
      githubUrl: [
        { url: "https://github.com/ADITHYANBASOK/Weather_app", type: "FaReact" },
      ],
      features: [
        "Real-time weather updates",
        "Location-based forecasting",
        "Interactive maps with weather layers",
        "7-day forecast and alerts"
      ]
    }
  ];
  