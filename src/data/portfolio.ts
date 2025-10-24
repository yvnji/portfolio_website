import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Yunji Kim',
    title: 'Software Engineer',
    description: 'Currently based in Melbourne, Australia 🦘',
  },
  about: {
    content: `I'm passionate about building clean and intuitive interfaces, while also having a solid understanding of scalable and stable system architecture.

I've worked on developing and operating serverless backends using Python and AWS (Lambda, API Gateway, DynamoDB, Cognito, etc.), solving real-world service issues in close collaboration with my team. I bring this experience into frontend development as well, approaching it from a user-centered perspective with an understanding of the entire system flow.

One of my greatest strengths is the ability to contribute flexibly not only to backend, but also to fronted or full-stack roles based on team needs and project goals.

I'm currently based in Melbourne, Australia, and available to work immediately under a Working Holiday visa. I'm looking forward to building meaningful services together through collaboration and shared purpose.`,
  },
  skills: {
    categories: [
      {
        name: 'Programming Languages',
        skills: ['Python', 'JavaScript', 'TypeScript'],
      },
      {
        name: 'Frontend',
        skills: ['React', 'Zustand', 'Figma'],
      },
      {
        name: 'Backend',
        skills: ['Flask', 'Django', 'Node.js'],
      },
      {
        name: 'Database',
        skills: ['MySQL', 'NoSQL'],
      },
      {
        name: 'Cloud & DevOps',
        skills: ['AWS'],
      },
      {
        name: 'Tools & Collaboration',
        skills: ['Git', 'Github', 'Postman', 'Sentry', 'Slack', 'Jira'],
      },
      {
        name: 'Development Environment',
        skills: ['Visual Studio Code', 'Cursor'],
      },
    ],
  },
  work: [
    {
      id: '1',
      year: '2023.09 - 2025.06',
      title: 'Software Engineer(Back-End/Front-End)',
      company: 'Nation A',
      description:
        'Worked as a full stack engineer building a 3D AI chat platform and generative motion service for Roblox. Contributed to the development of serverless infrastructure, APIs, real-time chat features, 3D content editor, social login, in-app payments, and admin dashboard with optimized data handling.',
      projects: [
        {
          id: '1',
          title: 'Hey.D: 3D Character AI Chat Service',
          description: `- Designed and built a serverless backend architecture using AWS Lambda, API Gateway, and Cognito.
- Integrated WebSocket with LLM APIs to enable real-time AI chatbot functionality.
- Implemented in-app purchase systems (Apple & Android) and social login (Google, Apple, Discord).
- Developed admin APIs and dashboards, improving internal operations and data visibility.
- Improved query performance 2× through optimized SQL joins, GSI indexing, and parallel processing in DynamoDB.`,
          imageUrl: '/images/heyd-logo.png',
          technologies: ['React', 'TypeScript', 'Next.js', 'Python', 'MySQL', 'NoSQL', 'AWS'],
          liveUrl: 'https://hey-bee.vercel.app/',
          company: 'Nation A',
        },
        {
          id: '2',
          title: 'Neuroid',
          description: `- Enhanced the AWS-based architecture with dual-region deployment (Seoul and North America) and improved core features including login, payment, and content creation.
- Established code conventions and implemented an automated deployment pipeline for each environment.
- Developed a web-based 3D content creation tool built with three.js, featuring 3D model loading, motion control, webcam compositing, and screen/audio recording.
- Overcame technical constraints and browser compatibility issues to deliver a stable, real-time creative environment.`,
          imageUrl: '/images/neuroid-image.jpg',
          technologies: ['React', 'TypeScript', 'Python', 'MySQL', 'NoSQL', 'AWS'],
          liveUrl: 'https://neuroid.so/',
          company: 'Nation A',
        },
      ],
      imageUrls: [
        '/images/nationa-1.jpg',
        '/images/nationa-2.jpg',
        '/images/nationa-3.jpg',
        '/images/nationa-4.jpg',
        '/images/nationa-5.jpg',
        '/images/nationa-6.jpg',
        '/images/nationa-9.jpg',
      ],
    },
    {
      id: '2',
      year: '2022.09 - 2023.02',
      title: 'Web Publisher',
      company: 'STN Infotech',
      description:
        'Designed and developed the internal research lab website, using HTML/CSS/JS with responsive design, GSAP animations, and accessible code.',
      projects: [
        {
          id: '1',
          title: 'SDC',
          description: ` - Created a fully responsive design tailored to the lab’s branding and technical concept requirements.
- Implemented smooth and performant animations with GSAP to enhance user engagement.
- Ensured semantic markup and maintainable CSS with a focus on web standards and accessibility compliance.`,
          imageUrl: '/images/sdc-image.png',
          technologies: ['Figma', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'GSAP'],
          liveUrl: 'http://lab.stninfotech.com/',
          company: 'STN Infotech',
        },
      ],
    },
  ],
  projects: [
    {
      id: '1',
      title: 'Hey.D: 3D Character AI Chat Service',
      description: ` - Designed and built a serverless backend architecture using AWS Lambda, API Gateway, and Cognito.
- Integrated WebSocket with LLM APIs to enable real-time AI chatbot functionality.
- Implemented in-app purchase systems (Apple & Android) and social login (Google, Apple, Discord).
- Developed admin APIs and dashboards, improving internal operations and data visibility.
- Improved query performance 2× through optimized SQL joins, GSI indexing, and parallel processing in DynamoDB.`,
      imageUrl: '/images/heyd-logo.png',
      technologies: ['React', 'TypeScript', 'Next.js', 'Python', 'MySQL', 'NoSQL', 'AWS'],
      liveUrl: 'https://hey-bee.vercel.app/',
      company: 'Nation A',
    },
    {
      id: '2',
      title: 'Neuroid',
      description: `ith LLM APIs to enable real-time AI chatbot functionality.
- Implemented in-app purchase systems (Apple & Android) and social login (Google, Apple, Discord).
- Developed admin APIs and dashboards, improvi`,
      imageUrl: '/images/neuroid-image.jpg',
      technologies: ['React', 'TypeScript', 'Python', 'MySQL', 'NoSQL', 'AWS'],
      liveUrl: 'https://neuroid.so/',
      company: 'Nation A',
    },
    {
      id: '3',
      title: 'SDC',
      description: ` - Designed and built a serverless backend architecture using AWS Lambda, API Gateway, and Cognito.
- Integrated WebSocket with LLM APIs to enable real-time AI chatbot functionality.
- Implemented in-app purchase systems (Apple & Android) and social login (Google, Apple, Discord).`,
      imageUrl: '/images/sdc-image.png',
      technologies: ['JavaScript', 'jQuery', 'HTML', 'CSS', 'GSAP'],
      liveUrl: 'http://lab.stninfotech.com/',
      company: 'STN Infotech',
    },
  ],
  socialMedia: [
    {
      id: '1',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yunji-kim-1ab372271',
    },
  ],
};
