import type { NextApiRequest, NextApiResponse } from 'next';
import { Profile } from '@/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Profile>
) {
  res.status(200).json(profile);
}

export const profile: Profile = {
  firstName: 'Adrian',
  lastName: 'Angkajaya',
  aboutMe: `As a Full Stack Developer, I excel at crafting robust front-end applications, powerful APIs, and efficient databases. I'm not tied to any single technology; in fact, I thrive on learning new languages and frameworks. I'm deeply passionate about building scalable and maintainable solutions, consistently seeking innovative tech implementations to enhance client organizations.`,
  jobTitle: 'Full Stack Developer',
  email: 'angkajaya98@gmail.com',
  phone: '+61 411 180 990',
  location: 'Melbourne, Australia',
  imageProfileUrl: '/static/images/profile.jpg',
  imageAlt: 'Adrian Angkajaya',
  socials: {
    github: 'https://github.com/adriann1998',
    linkedIn: 'https://www.linkedin.com/in/adrian-angkajaya-aa7641194/',
  },
  services: [
    {
      name: 'Front-end',
      icon: '/static/icons/front-end-icon.png',
    },
    {
      name: 'Back-end',
      icon: '/static/icons/back-end-icon.jpg',
    },
    {
      name: 'Database',
      icon: '/static/icons/database-icon.png',
    },
    {
      name: 'CI/CD Pipeline',
      icon: '/static/icons/cicd-icon.jpg',
    },
    {
      name: 'Server',
      icon: '/static/icons/server-icon.png',
    }
  ],
  languages: [
    {
      name: 'English',
      level: 'ADVANCED',
    },
    {
      name: 'Indonesian',
      level: 'NATIVE',
    },
    {
      name: 'Mandarin',
      level: 'INTERMEDIATE',
    }
  ],
  workExperience: [
    {
      title: 'Mid-level Full Stack Developer',
      company: 'TAXIBOX',
      companyDetails: 'TAXIBOX is a leading provider of self-storage and logistics solutions in Australia.',
      companyLogoUrl: '/static/images/taxibox-logo.jpg',
      location: 'Melbourne, Australia',
      startDate: '2022-09-01',
      endDate: null,
      description: [
        'Responsible for designing, developing, and maintaining TAXIBOX\'s web applications, APIs, and server infrastructure',
        'Strengthen TAXIBOX\'s tech development and deployment process by building and maintaining a robust CI/CD pipeline',
        'Propose new features and optimize workflows to enhance the development process.',
        'Provide support junior developers and participate in code reviews to ensure code quality and best practices are followed',
      ],
      type: 'FULL_TIME',
    },
    {
      title: 'Junior Full Stack Developer',
      company: 'TAXIBOX',
      companyDetails: 'TAXIBOX is a leading provider of self-storage and logistics solutions in Australia.',
      companyLogoUrl: '/static/images/taxibox-logo.jpg',
      location: 'Melbourne, Australia',
      startDate: '2021-05-01',
      endDate: '2022-09-01',
      description: [
        'Quickly learn and adapt to new technologies, tools, and frameworks',
        'Implement new features and fix bugs across TAXIBOX\'s tech stack',
      ],
      type: 'FULL_TIME',
    },
    // {
    //   title: 'Sales Consultant',
    //   company: 'Sunburn Solar',
    //   companyDetails: 'Sunburn Solar is a leading provider of solar energy solutions in Australia.',
    //   companyLogoUrl: '/static/images/sunburn-solar-logo.png',
    //   location: 'Melbourne, Australia',
    //   startDate: '2020-07-01',
    //   endDate: '2021-06-01',
    //   description: 'test',
    //   type: 'PART_TIME',
    // },
    {
      title: 'Machine Learning Intern',
      company: 'Cognixy.AI',
      companyDetails: 'Cognixy.AI is an AI solutions company in Indonesia focussing on computer vision and machine learning.',
      companyLogoUrl: '/static/images/cognixy-logo.jpeg',
      location: 'Jakarta, Indonesia',
      startDate: '2019-12-01',
      endDate: '2020-02-01',
      description: '',
      type: 'INTERNSHIP',
    },
    // {
    //   title: 'Kitchen Hand',
    //   company: 'PappaRich Australia',
    //   companyDetails: 'PappaRich is a global Malaysian restaurant chain.',
    //   companyLogoUrl: '/static/images/papparich-logo.png',
    //   location: 'Melbourne, Australia',
    //   startDate: '2018-10-01',
    //   endDate: '2019-12-01',
    //   description: '',
    //   type: 'PART_TIME',
    // }
  ],
  skills: [
    {
      name: 'Node.js',
      icon: '/static/images/nodejs-icon.svg',
      level: 90,
      relatedService: ['Back-end'],
    },
    {
      name: 'GraphQL',
      icon: '/static/images/graphql-icon.svg',
      level: 90,
      relatedService: ['Back-end'],
    },
    {
      name: 'React',
      icon: '/static/images/react-icon.svg',
      level: 80,
      relatedService: ['Front-end'],
    },
    {
      name: 'Next.js',
      icon: '/static/images/nextjs-icon-light.png',
      level: 60,
      relatedService: ['Front-end'],
    },
    {
      name: 'AWS Lambda',
      icon: '/static/images/aws-lambda-icon.svg',
      level: 70,
      relatedService: ['Back-end'],
    },
    {
      name: 'AWS DyanamoDB',
      icon: '/static/images/aws-dynamodb-icon.svg',
      level: 70,
      relatedService: ['Back-end', 'Database'],
    },
    {
      name: 'Github Actions',
      icon: '/static/images/github-icon.svg',
      level: 70,
      relatedService: ['CI/CD Pipeline'],
    },
    {
      name: 'Tailwind CSS',
      icon: '/static/images/tailwind-icon.svg',
      level: 70,
      relatedService: ['Front-end'],
    },
    {
      name: 'MySQL',
      icon: '/static/images/mysql-icon.svg',
      level: 70,
      relatedService: ['Back-end', 'Database'],
    },
    {
      name: 'AWS RDS',
      icon: '/static/images/aws-rds-icon.svg',
      level: 70,
      relatedService: ['Back-end', 'Database'],
    },
    {
      name: 'Bash scripting',
      icon: '/static/images/bash-icon.svg',
      level: 60,
      relatedService: ['CI/CD Pipeline', 'Server'],
    },
    {
      name: 'PHP',
      icon: '/static/images/php-icon.svg',
      level: 40,
      relatedService: ['Back-end', 'Front-end'],
    },
    {
      name: 'Pyton',
      icon: '/static/images/python-icon.svg',
      level: 50,
      relatedService: ['Back-end'],
    },
  ],
  certifications: [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      issuerLogo: '/static/images/aws-logo.png',
      issueDate: '2024-08-01',
      expirationDate: '2027-08-01',
      credentialUrl: 'https://www.credly.com/badges/428fae35-afb6-4a86-9c4a-ec7dc2dfa297/linked_in_profile',
    },
    {
      name: 'CompTIA Linux+',
      issuer: 'CompTIA',
      issuerLogo: '/static/images/comptia-linuxplus-logo.png',
      issueDate: '2025-05-01',
      expirationDate: '2028-05-01',
      credentialUrl: 'https://www.credly.com/badges/0a82e1e9-7a49-4f07-b03b-02cd1033e778/linked_in_profile',
    },
  ],
  educationHistory: [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Monash University',
      institutionLogo: '/static/images/monash-logo.png',
      startDate: '2017-06-01',
      endDate: '2020-12-01',
      description: 'Graduated with a Bachelor of Information Technology, majoring in Advanced Computer Science. Completed various projects including a web application for managing smart city bin-trucks and a live-chat web application.',
      gpa: null,
      location: 'Melbourne, Australia',
      type: 'BACHELOR',
    }
  ]
};