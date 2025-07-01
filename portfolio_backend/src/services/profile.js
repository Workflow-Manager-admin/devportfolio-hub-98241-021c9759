//
// Service for profile API (serves sample data)
//

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

// PUBLIC_INTERFACE
exports.getProfile = () => profile;
