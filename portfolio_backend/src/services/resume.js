//
// Service for resume API (sample data structure)
//

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

// PUBLIC_INTERFACE
exports.getResume = () => resume;
