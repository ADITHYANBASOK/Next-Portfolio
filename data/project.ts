// data/projects.ts

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string[];
    features: string[];
  }
  
  export const projects: Project[] = [
    {
      title: "KALIKA",
      description: "Kalika is a web application for Disabled persons. It provides disabled persons a platform to sell their manufactured products and offers free online doctor consultations.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "Git"],
      liveUrl: "https://example.com",
      githubUrl: ["https://github.com"],
      features: [
        "Online doctor consultations",
        "User-friendly dashboard",
        "Real-time chat support",
        "Customizable product listings"
      ]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
      liveUrl: "https://example.com",
      githubUrl: ["https://github.com"],
      features: [
        "Real-time collaboration",
        "Task assignment and tracking",
        "Project timelines and Gantt charts",
        "Notifications and reminders"
      ]
    },
    {
      title: "Weather Forecast App",
      description: "A sleek weather application with location-based forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["React Native", "Redux", "OpenWeatherMap API"],
      liveUrl: "https://weather-app-x23b.vercel.app/",
      githubUrl: ["https://github.com/ADITHYANBASOK/Weather_app", "https://github.com"],
      features: [
        "Real-time weather updates",
        "Location-based forecasting",
        "Interactive maps with weather layers",
        "7-day forecast and alerts"
      ]
    }
  ];
  