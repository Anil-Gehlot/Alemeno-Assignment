export const COURSES = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: '/api/placeholder/400/200',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native, setting up your development environment.' },
        { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app using React Native components.' }
      ],
      students: [{ id: 101, name: 'Alice Johnson', email: 'alice@example.com' }]
    },
    {
      id: 2,
      name: 'Advanced JavaScript Patterns',
      instructor: 'Jane Smith',
      description: 'Deep dive into advanced JavaScript patterns and best practices.',
      enrollmentStatus: 'In Progress',
      thumbnail: '/api/placeholder/400/200',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Intermediate JavaScript knowledge'],
      syllabus: [{ week: 1, topic: 'Design Patterns', content: 'Understanding common JavaScript design patterns.' }],
      students: []
    },
    {
      id: 3,
      name: 'Full-Stack Web Development',
      instructor: 'Michael Brown',
      description: 'Master front-end and back-end web development using modern technologies.',
      enrollmentStatus: 'Open',
      thumbnail: '/api/placeholder/400/200',
      duration: '12 weeks',
      schedule: 'Saturdays and Sundays, 10:00 AM - 2:00 PM',
      location: 'Hybrid (Online & In-Person)',
      prerequisites: ['Basic HTML, CSS, and JavaScript'],
      syllabus: [
        { week: 1, topic: 'HTML & CSS Basics', content: 'Fundamentals of HTML and CSS for structuring and styling web pages.' },
        { week: 2, topic: 'JavaScript & DOM Manipulation', content: 'Learn JavaScript fundamentals and how to interact with the DOM.' }
      ],
      students: [{ id: 102, name: 'Robert Wilson', email: 'robert@example.com' }]
    },
    {
      id: 4,
      name: 'Python for Data Science',
      instructor: 'Sarah Thompson',
      description: 'Learn Python programming with a focus on data science and machine learning.',
      enrollmentStatus: 'Closed',
      thumbnail: '/api/placeholder/400/200',
      duration: '6 weeks',
      schedule: 'Fridays, 5:00 PM - 7:00 PM',
      location: 'Online',
      prerequisites: ['Basic Python programming knowledge'],
      syllabus: [
        { week: 1, topic: 'Introduction to Python', content: 'Understanding Python syntax, data types, and basic operations.' },
        { week: 2, topic: 'Data Manipulation with Pandas', content: 'Learn how to handle and manipulate data using the Pandas library.' }
      ],
      students: []
    },
    {
      id: 5,
      name: 'UI/UX Design Fundamentals',
      instructor: 'David Martinez',
      description: 'Explore the principles of UI/UX design and create user-friendly interfaces.',
      enrollmentStatus: 'Open',
      thumbnail: '/api/placeholder/400/200',
      duration: '8 weeks',
      schedule: 'Wednesdays, 6:30 PM - 8:30 PM',
      location: 'In-Person',
      prerequisites: ['None'],
      syllabus: [
        { week: 1, topic: 'Introduction to UI/UX', content: 'Understanding the difference between UI and UX, and design principles.' },
        { week: 2, topic: 'Wireframing and Prototyping', content: 'Creating wireframes and prototypes using industry-standard tools.' }
      ],
      students: [{ id: 104, name: 'Sophia Clark', email: 'sophia@example.com' }]
    },
    {
      id: 6,
      name: 'Cybersecurity Essentials',
      instructor: 'Jessica Lewis',
      description: 'Learn about cybersecurity threats, ethical hacking, and best security practices.',
      enrollmentStatus: 'Open',
      thumbnail: '/api/placeholder/400/200',
      duration: '10 weeks',
      schedule: 'Mondays and Thursdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Basic IT knowledge'],
      syllabus: [
        { week: 1, topic: 'Introduction to Cybersecurity', content: 'Overview of cybersecurity threats, attacks, and defense mechanisms.' },
        { week: 2, topic: 'Ethical Hacking Basics', content: 'Understanding penetration testing and ethical hacking methodologies.' }
      ],
      students: []
    },
    {
      id: 7,
      name: 'DevOps and Cloud Computing',
      instructor: 'Mark Robinson',
      description: 'Understand DevOps practices and cloud computing principles for modern software development.',
      enrollmentStatus: 'In Progress',
      thumbnail: '/api/placeholder/400/200',
      duration: '14 weeks',
      schedule: 'Tuesdays, 6:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Basic programming knowledge', 'Understanding of software development lifecycle'],
      syllabus: [
        { week: 1, topic: 'Introduction to DevOps', content: 'Understanding DevOps culture, CI/CD pipelines, and automation tools.' },
        { week: 2, topic: 'Cloud Fundamentals', content: 'Introduction to cloud providers like AWS, Azure, and Google Cloud.' }
      ],
      students: []
    },
    {
      id: 8,
      name: 'Machine Learning with TensorFlow',
      instructor: 'Emily White',
      description: 'Get hands-on experience building machine learning models using TensorFlow.',
      enrollmentStatus: 'Open',
      thumbnail: '/api/placeholder/400/200',
      duration: '12 weeks',
      schedule: 'Saturdays, 10:00 AM - 1:00 PM',
      location: 'Online',
      prerequisites: ['Python programming', 'Basic statistics'],
      syllabus: [
        { week: 1, topic: 'Introduction to Machine Learning', content: 'Understanding supervised and unsupervised learning.' },
        { week: 2, topic: 'Deep Learning with TensorFlow', content: 'Building and training deep learning models.' }
      ],
      students: [{ id: 105, name: 'Daniel Scott', email: 'daniel@example.com' }]
    },
    {
      id: 9,
      name: 'Blockchain and Cryptocurrency',
      instructor: 'Christopher Green',
      description: 'Explore blockchain technology and cryptocurrency concepts.',
      enrollmentStatus: 'Open',
      thumbnail: '/api/placeholder/400/200',
      duration: '10 weeks',
      schedule: 'Thursdays, 7:00 PM - 9:00 PM',
      location: 'Hybrid (Online & In-Person)',
      prerequisites: ['Basic understanding of computer networks'],
      syllabus: [
        { week: 1, topic: 'Blockchain Basics', content: 'Introduction to blockchain technology and its applications.' },
        { week: 2, topic: 'Smart Contracts', content: 'Understanding and developing smart contracts using Solidity.' }
      ],
      students: []
    },
    {
      id: 10,
      name: 'Game Development with Unity',
      instructor: 'Olivia Taylor',
      description: 'Learn to build interactive games using Unity and C#.',
      enrollmentStatus: 'Open',
      thumbnail: '/api/placeholder/400/200',
      duration: '8 weeks',
      schedule: 'Fridays, 6:00 PM - 9:00 PM',
      location: 'In-Person',
      prerequisites: ['Basic programming knowledge'],
      syllabus: [
        { week: 1, topic: 'Getting Started with Unity', content: 'Introduction to Unity and setting up your first game project.' },
        { week: 2, topic: 'Game Physics and Mechanics', content: 'Implementing physics-based mechanics in Unity.' }
      ],
      students: []
    }
  ];
  