'use client';
import Image from "next/image";
import {
  InboxIcon,
  PhoneIcon,
  MapPinIcon,
  CircleStackIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
  ServerStackIcon,
  ArrowDownTrayIcon,
  LanguageIcon
} from '@heroicons/react/24/solid';
import WorkExperience from "@/components/work-experience";
import { Profile } from "@/types";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {

  return (
    <div className="flex justify-center">
      <div className="flex min-h-screen flex-col items-center justify-between p-16" style={{ maxWidth: '2000px' }}>
        <div className="grid grid-cols-12 gap-10 w-full">
          <div className="flex flex-col col-span-2 items-center">
            {/* image, name, job title */}
            <Image
              className="rounded-full mb-4"
              src={profile.imageProfileUrl}
              alt='profile'
              width={150}
              height={150}
            />
            <h1 className="mb-4 font-bold text-3xl">{profile.firstName} {profile.lastName}</h1>
            <p className="mb-8 text-xl font-normal text-gray-500">{profile.jobTitle}</p>

            {/* profile section */}
            <div className="flex flex-col items-start w-full gap-4 mb-12">
              <div className="w-full flex justify-start items-center border-gray-500">
                <InboxIcon className="size-6 mr-4 cursor-pointer" onClick={() => window.location.href = `mailto:${profile.email}`}/>
                <p className="text-xl">{profile.email}</p>
              </div>
              <div className="w-full flex justify-start items-center border-gray-500">
                <PhoneIcon className="size-6 mr-4 cursor-pointer" onClick={() => window.location.href = `tel:${profile.phone}`}/>
                <p className="text-xl">{profile.phone}</p>
              </div>
              <div className="w-full flex justify-start items-center border-gray-500">
                <MapPinIcon className="size-6 mr-4 cursor-pointer" />
                <p className="text-xl">{profile.location}</p>
              </div>
            </div>

            {/* download CV */}
            <div className="flex items-center justify-center gap-4 mb-12 w-full">
              <button
                className="flex justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => alert('Download CV')}
              >
                <ArrowDownTrayIcon className="size-6 mr-2" />
                <span className="text-xl">Download CV</span>
              </button>
            </div>

            {/* socials */}
            <div className="flex items-center gap-4 mb-12">
              {profile.socials.github && (
                <Image
                  className="rounded-full cursor-pointer mb-4"
                  src='/static/icons/github-mark-white.svg'
                  alt='Github'
                  width={50}
                  height={50}
                  onClick={() => window.open(profile.socials.github, '_blank')}
                />
              )}
              {profile.socials.linkedIn && (
                <Image
                  className="rounded-full cursor-pointer mb-4"
                  src='/static/icons/linkedin.svg'
                  alt='LinkedIn'
                  width={50}
                  height={50}
                  onClick={() => window.open(profile.socials.linkedIn, '_blank')}
                />
              )}
            </div>

            {/* about me */}
            <div className="flex flex-col mb-16 w-full">
              <h1 className="font-bold text-3xl mb-8 flex gap-2 items-center justify-start">
                Languages <LanguageIcon className="size-6" />
              </h1>
              {profile.languages.map((language, index) => (
                <div className="flex flex-col mb-2" key={`language-${index}`}>
                  <p className="text-xl mb-1">{language.name}</p>
                  <p className="text-sm italic">{language.level.toLowerCase()}</p>
                </div>
              ))}
            </div>
            
          </div>

          <div className="col-span-6">
            {/* about me */}
            <div className="flex flex-col mb-16">
              <h1 className="font-bold text-3xl mb-10">About me</h1>
              <p className="font-normal text-lg mb-4">{profile.aboutMe}</p>
              <p className="font-normal text-lg mb-4 align-left w-full">As as {profile.jobTitle}, I develop and maintain:</p>
              <div className="grid grid-cols-4 gap-6 w-full">
                {profile.services.map((service, index) => (
                  <div className="w-full bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 shadow-lg" key={`service-${index}`}>
                    <div className="mb-2">
                      {service.icon}
                    </div>
                    <p className="font-normal text-sm">{service.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">

              {/* work experience */}
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="font-bold text-3xl">Work experience</h1>
                </AccordionTrigger>
                <AccordionContent>
                  {profile.workExperience.map((work, index) => (
                    <WorkExperience
                      key={`work-${index}`}
                      title={work.title}
                      company={work.company}
                      companyDetails={work.companyDetails}
                      companyLogoUrl={work.companyLogoUrl}
                      location={work.location}
                      startDate={work.startDate}
                      endDate={work.endDate}
                      description={work.description}
                      type={work.type}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* certifications */}
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h1 className="font-bold text-3xl">Certifications</h1>
                </AccordionTrigger>
                <AccordionContent>
                  TODO: fill me
                </AccordionContent>
              </AccordionItem>

              {/* education */}
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <h1 className="font-bold text-3xl">Education History</h1>
                </AccordionTrigger>
                <AccordionContent>
                  TODO: fill me
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
          </div>

          <div className="col-span-4">
            <div className="flex flex-col">
              {/* tech stack */}
              <h1 className="font-bold text-3xl mb-12">Skills</h1>
              {profile.skills.map((skill, index) => (
                <div className="w-full bg-gray-800 rounded-xl p-4 shadow-lg mb-4" key={`skill-${index}`}>
                  <div className="grid grid-cols-6 gap-4 mb-2">
                    <Image
                      className="rounded-full mr-4 col-span-1"
                      src={skill.icon}
                      alt={skill.name}
                      width={50}
                      height={50}
                    />
                    <p className="font-normal text-lg col-span-1 h-full justify-center">{skill.name}</p>
                    <Progress value={skill.level} className="col-span-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const profile: Profile = {
  firstName: 'Adrian',
  lastName: 'Angkajaya',
  aboutMe: `I am a self-driven Full Stack Developer with a proven track record building robust front-end applications, APIs, and databases. I am language-agnostic and has a strong interest in learning new technologies. I am passionate about building scalable and maintainable applications, and I am always looking for tech-implementation I can do to improve my client's organisation.`,
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
      icon: <PaintBrushIcon className="size-6" />,
    },
    {
      name: 'Back-end',
      icon: <Cog6ToothIcon className="size-6" />,
    },
    {
      name: 'Database',
      icon: <CircleStackIcon className="size-6" />,
    },
    {
      name: 'CI/CD pipeline',
      icon: <CircleStackIcon className="size-6" />,
    },
    {
      name: 'Server',
      icon: <ServerStackIcon className="size-6" />,
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
      description: 'test',
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
      description: 'test',
      type: 'FULL_TIME',
    },
    {
      title: 'Sales Consultant',
      company: 'Sunburn Solar',
      companyDetails: 'Sunburn Solar is a leading provider of solar energy solutions in Australia.',
      companyLogoUrl: '/static/images/sunburn-solar-logo.png',
      location: 'Melbourne, Australia',
      startDate: '2020-07-01',
      endDate: '2021-06-01',
      description: 'test',
      type: 'PART_TIME',
    },
    {
      title: 'Machine Learning Intern',
      company: 'Cognixy.AI',
      companyDetails: 'Cognixy.AI is an AI solutions company in Indonesia focussing on computer vision and machine learning.',
      companyLogoUrl: '/static/images/cognixy-logo.jpeg',
      location: 'Jakarta, Indonesia',
      startDate: '2019-12-01',
      endDate: '2020-02-01',
      description: 'test',
      type: 'INTERNSHIP',
    },
    {
      title: 'Kitchen Hand',
      company: 'PappaRich Australia',
      companyDetails: 'PappaRich is a global Malaysian restaurant chain.',
      companyLogoUrl: '/static/images/papparich-logo.png',
      location: 'Melbourne, Australia',
      startDate: '2018-10-01',
      endDate: '2019-12-01',
      description: '',
      type: 'PART_TIME',
    }
  ],
  skills: [
    {
      name: 'Node.js',
      icon: '/static/icons/nodejs-icon.svg',
      level: 90,
    },
    {
      name: 'GraphQL',
      icon: '/static/icons/graphql-icon.svg',
      level: 90,
    },
    {
      name: 'React',
      icon: '/static/icons/react-icon.svg',
      level: 80,
    },
    {
      name: 'MySQL',
      icon: '/static/icons/mysql-icon.svg',
      level: 70,
    },
    {
      name: 'AWS Lambda',
      icon: '/static/icons/aws-lambda-icon.svg',
      level: 70,
    },
    {
      name: 'AWS RDS',
      icon: '/static/icons/aws-rds-icon.svg',
      level: 70,
    },
    {
      name: 'AWS DyanamoDB',
      icon: '/static/icons/aws-dynamodb-icon.svg',
      level: 70,
    },
    {
      name: 'Github Actions',
      icon: '/static/icons/github-icon.svg',
      level: 70,
    },
    {
      name: 'Bash scripting',
      icon: '/static/icons/bash-icon.svg',
      level: 60,
    },
    {
      name: 'PHP',
      icon: '/static/icons/php-icon.svg',
      level: 50,
    },
    {
      name: 'Pyton',
      icon: '/static/icons/python-icon.svg',
      level: 50,
    },
  ]
}


