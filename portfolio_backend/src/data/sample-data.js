//
// Centralized static in-memory sample data for portfolio backend
//

/**
 * Sample projects array
 */
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

/**
 * Sample profile object
 */
const profile = {
  name: 'Jane Doe',
  title: 'Full Stack Developer',
  bio: 'Experienced developer with a demonstrated history of building web applications. Passionate about clean code and modern technologies.',
  location: 'San Francisco, CA',
  email: 'jane.doe@example.com',
  social: {
    github: 'https://github.com/janedoe',
    linkedin: 'https://www.linkedin.com/in/janedoe',
    twitter: 'https://twitter.com/janedoe'
  }
};

/**
 * Sample resume object
 */
const resume = {
  summary: 'Full Stack Developer with 5+ years experience building web apps.',
  experience: [
    {
      company: 'Tech Solutions',
      position: 'Software Engineer',
      startYear: 2020,
      endYear: 2023,
      description: 'Built scalable web services and APIs.'
    },
    {
      company: 'Startup Labs',
      position: 'Frontend Developer',
      startYear: 2018,
      endYear: 2020,
      description: 'Developed user-friendly and performant web frontends.'
    }
  ],
  education: [
    {
      school: 'University of Example',
      degree: 'B.S. in Computer Science',
      year: 2018
    }
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Python']
};

module.exports = {
  projects,
  profile,
  resume
};
