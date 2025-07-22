const mongoose = require('mongoose');
const services = require('./models/ourservices.js');

mongoose.connect('mongodb+srv://mucisa:Ezra12352@mucisa.wiwff6z.mongodb.net/?retryWrites=true&w=majority&appName=mucisa')
  .then(() => {
    console.log('MongoDB connected');
    return services.insertMany([
      {
        title: 'Research and Development',
        description: 'we conduct research and development in various fields including AI, IoT, and Blockchain.',
        image: 'research.jpg'
      },{
        title: 'Hackathons and Coding Competitions',
        description: 'we organize hackathons and coding competitions to foster innovation and teamwork.',
        image: 'innovation.jpg'
      }, {
        title: 'Tech Talks and Guest Lectures',
        description: 'we invite industry experts to share their knowledge and experiences with our members.',
        image: 'conference.jpg'
      },
      {
        title: 'Coding Nights',
        description: 'we conduct weekly coding nights where members can collaborate on projects and learn from each other.',
        image: 'kesha.jpg'
      },{
        title: 'Study Jams',
        description: 'we have peer led learning sessions where members can collaborate and learn from each other.',
        image: 'study.jpg'
      },
      {
        title: 'Network Configuration and Management',
        description: 'we have experts who have specialized interest in network configuration and management.They offer services at comparatively lower rates.',
        image: 'networking.jpg'
      },
      {
        title: 'Enterprise Web Development services',
        description: 'we provide market ready web development services to startups and enterprises.',
        image: 'web.jpg'
      },
      {
        title: 'UI/UX Design and Prototyping',
        description: 'we Design modern and user-friendly interfaces for web and mobile applications.Alongside peer to peer UI/UX design training.',
        image: 'design.jpg'
      },
      {
        title: 'Games, fun and networking sessions',
        description: 'students can participate in games and fun activities to build connections and network with each other.',
        image: 'mobile_apps.jpg'
      }
    ]);
  })
  .then(() => {
    console.log('services seeded');
    mongoose.disconnect();
  })
  .catch(err => console.error(err));