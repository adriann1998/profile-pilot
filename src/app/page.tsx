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
} from '@heroicons/react/24/solid';

const profile = {
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
}

export default function Home() {

  return (
    <div className="flex justify-center">
      <div className="flex min-h-screen flex-col items-center justify-between p-16 w-full">
        <div className="grid grid-cols-3 gap-10 w-full">
          <div className="flex flex-col items-center">
            {/* image, name, job title */}
            <Image
              className="rounded-full mb-4"
              src={profile.imageProfileUrl}
              alt='profile'
              width={150}
              height={150}
            />
            <h1 className="mb-4 font-bold text-4xl">{profile.firstName} {profile.lastName}</h1>
            <p className="mb-8 text-xl font-normal text-gray-500">{profile.jobTitle}</p>

            {/* profile section */}
            <div className="flex flex-col items-start w-full gap-4 mb-12">
              <div className="text-left w-full flex justify-start border-b-2 pb-5 border-gray-500">
                <InboxIcon className="size-6 mr-4 cursor-pointer" onClick={() => window.location.href = `mailto:${profile.email}`}/>
                <p className="text-xl">{profile.email}</p>
              </div>
              <div className="text-left w-full flex justify-start border-b-2 pb-5 border-gray-500">
                <PhoneIcon className="size-6 mr-4 cursor-pointer" onClick={() => window.location.href = `tel:${profile.phone}`}/>
                <p className="text-xl">{profile.phone}</p>
              </div>
              <div className="text-left w-full flex justify-start border-b-2 pb-5 border-gray-500">
                <MapPinIcon className="size-6 mr-4 cursor-pointer" />
                <p className="text-xl">{profile.location}</p>
              </div>
            </div>

            {/* download CV */}
            <div className="flex items-center gap-4 mb-12">
              <button className="flex gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => alert('Download CV')}>
                <ArrowDownTrayIcon className="size-6 mr-2" />
                <span className="text-xl">Download CV</span>
              </button>
            </div>

            {/* socials */}
            <div className="flex items-center gap-4 mb-12">
              {profile.socials.github && (
                <Image
                  className="rounded-full mb-4"
                  src='/static/icons/github-mark-white.svg'
                  alt='Github'
                  width={50}
                  height={50}
                  onClick={() => window.open(profile.socials.github, '_blank')}
                />
              )}
              {profile.socials.linkedIn && (
                <Image
                  className="rounded-full mb-4"
                  src='/static/icons/linkedin.svg'
                  alt='LinkedIn'
                  width={50}
                  height={50}
                  onClick={() => window.open(profile.socials.linkedIn, '_blank')}
                />
              )}
            </div>
          </div>

          <div>
            {/* about me */}
            <div className="flex flex-col items-center mb-16">
              <h1 className="mb-4 font-bold text-3xl mb-4">About me</h1>
              <p className="font-normal text-lg mb-4">{profile.aboutMe}</p>
              <p className="font-normal text-lg mb-2 align-left w-full">As as {profile.jobTitle}, I develop and maintain:</p>
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
            
            {/* work experience */}
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-3xl mb-4">Work experience</h1>
              <div className="w-full">
                <p className="font-normal text-xl mb-4">Mid-leve Full Stack Developer</p>
              </div>

            </div>
          </div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
}
