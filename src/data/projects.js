const projects = [
  {
    id: "1",
    title: "E-commerce Website",
    description: "A modern e-commerce platform with payment integration and user authentication.",
    // Try one of these approaches for the image path:
    image: "/src/assets/Sky.png", // Absolute path from project root
    // OR import the image directly at the top of your file:
    // import skyImage from '../assets/Sky.png'
    // and then use: image: skyImage,
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    longDescription: "This project is a full-featured e-commerce solution built with the MERN stack. It includes user authentication, product catalog, shopping cart, checkout process with Stripe integration, and an admin dashboard for managing products and orders.",
    challenges: "The biggest challenge was implementing a secure payment system and ensuring high performance with a large product catalog.",
    solution: "I implemented lazy loading for products, optimized database queries, and used Stripe's secure checkout to handle payments safely.",
    client: "RetailTech Inc.",
    duration: "3 months",
    techs: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Redux"],
    liveUrl: "https://example-ecommerce.com",
    codeUrl: "https://github.com/yourusername/ecommerce-project",
    gallery: [
     "/src/assets/Sky.png", // Update these paths too
     "/src/assets/Sky.png",
     "/src/assets/Sky.png",
    ]
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A productivity app for organizing tasks, projects, and collaborating with team members.",
    image: "https://via.placeholder.com/800x400?text=Task+App", // Using a placeholder as fallback
    category: "mobile",
    tags: ["React Native", "Firebase", "Redux"],
    longDescription: "This task management application helps users organize their work and personal projects. It features task creation, project organization, due dates, reminders, and team collaboration capabilities.",
    challenges: "Creating a responsive, intuitive UI that works well across different device sizes while maintaining good performance with real-time updates.",
    solution: "Implemented a carefully designed UI component system and used Firebase for real-time data synchronization with optimized queries.",
    client: "ProductivityPlus LLC",
    duration: "4 months",
    techs: ["React Native", "Firebase", "Redux", "Expo", "Google Auth"],
    liveUrl: "https://play.google.com/store/apps/taskmanager",
    codeUrl: "https://github.com/yourusername/task-manager-app",
    gallery: [
     "https://via.placeholder.com/600x400?text=Task+App+Screen+1",
     "https://via.placeholder.com/600x400?text=Task+App+Screen+2"
    ]
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    image: "https://via.placeholder.com/800x400?text=Portfolio", // Using a placeholder as fallback
    category: "web",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    longDescription: "This personal portfolio website was designed to showcase my projects, skills, and experience in a modern, interactive format. It features smooth animations, responsive design, and optimized performance.",
    challenges: "Creating a distinctive design that stands out while ensuring fast load times and accessibility.",
    solution: "Used Tailwind CSS for efficient styling, implemented lazy loading, and optimized assets for performance while maintaining visual appeal.",
    duration: "2 weeks",
    techs: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    codeUrl: "https://github.com/yourusername/portfolio-website",
    gallery: [
     "https://via.placeholder.com/600x400?text=Portfolio+Screen+1",
     "https://via.placeholder.com/600x400?text=Portfolio+Screen+2"
    ]
  }
 ];
 
 export default projects;