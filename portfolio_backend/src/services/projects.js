//
// Service for project API (exposes sample data)
//

// Sample project data
const projects = [
  {
    id: 1,
    name: 'Personal Portfolio Website',
    description: 'A fullstack portfolio website to showcase software projects, skills, and experience.',
    technologies: ['React', 'Express', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://portfolio.example.com'
  },
  {
    id: 2,
    name: 'Task Manager App',
    description: 'A task management app with real-time collaboration and notifications.',
    technologies: ['Vue.js', 'Firebase'],
    githubUrl: 'https://github.com/example/task-manager',
    liveUrl: 'https://taskmanager.example.com'
  }
];

// PUBLIC_INTERFACE
exports.getAllProjects = () => projects;
