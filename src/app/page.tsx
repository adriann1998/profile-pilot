'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LanguageIcon
} from '@heroicons/react/24/solid';
import Skills from "@/components/skills";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Profile } from "@/types";
import CertificationCard from "@/components/certification-card";
import EducationCard from "@/components/education-card";
import WorkExperienceCard from "@/components/work-experience";

export default function Home() {

  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      fetch('/api/profile')
        .then(response => response.json())
        .then(data => {
          setProfile(data);
        })
        .catch(() => {
          throw new Error('Failed to fetch profile data');
        });
    }
    fetchProfile();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex min-h-screen flex-col items-center justify-between p-16 max-w-[1500px]">
        <div className="grid grid-cols-12 gap-10 w-full">
          {profile ? (
            <div className="flex flex-col col-span-3 items-center">
              {/* image, name, job title */}
              <Image
                className="rounded-full mb-4"
                src={profile.imageProfileUrl}
                alt='profile'
                width={150}
                height={150}
              />
              <h1 className="mb-4 font-bold text-3xl">{profile.firstName} {profile.lastName}</h1>
              <h6 className="mb-8 text-xl font-normal text-gray-500">{profile.jobTitle}</h6>

              {/* profile section */}
              <div className="flex flex-col items-start w-full gap-4 mb-12">
                <div className="w-full flex justify-start items-center border-gray-500">
                  <EnvelopeIcon className="size-4 mr-4 cursor-pointer" onClick={() => window.location.href = `mailto:${profile.email}`}/>
                  <p className="text-md">{profile.email}</p>
                </div>
                <div className="w-full flex justify-start items-center border-gray-500">
                  <PhoneIcon className="size-4 mr-4 cursor-pointer" onClick={() => window.location.href = `tel:${profile.phone}`}/>
                  <p className="text-md">{profile.phone}</p>
                </div>
                <div className="w-full flex justify-start items-center border-gray-500">
                  <MapPinIcon className="size-4 mr-4 cursor-pointer" />
                  <p className="text-md">{profile.location}</p>
                </div>
              </div>

              {/* socials */}
              <div className="flex items-start gap-4 mb-12 w-full">
                {profile.socials.github && (
                  <Image
                    className="rounded-full cursor-pointer mb-4"
                    src='/static/images/github-mark-white.svg'
                    alt='Github'
                    width={35}
                    height={35}
                    onClick={() => window.open(profile.socials.github, '_blank')}
                  />
                )}
                {profile.socials.linkedIn && (
                  <Image
                    className="rounded-full cursor-pointer mb-4"
                    src='/static/images/linkedin.svg'
                    alt='LinkedIn'
                    width={35}
                    height={35}
                    onClick={() => window.open(profile.socials.linkedIn, '_blank')}
                  />
                )}
              </div>

              {/* Languages */}
              <div className="flex flex-col mb-12 w-full">
                <h1 className="font-bold text-2xl mb-8 flex gap-2 items-center justify-start">
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
          ) : <Skeleton className="col-span-3 w-full h-[500px] rounded-xl" />}

          {profile ? (
            <div className="col-span-6">
              {/* about me */}
              <div className="flex flex-col mb-10">
                <h1 className="font-bold text-2xl mb-4">About me</h1>
                <p className="font-normal text-lg mb-4">{profile.aboutMe}</p>
                <p className="font-normal text-lg mb-4 align-left w-full">As as {profile.jobTitle}, I develop and maintain:</p>
                <div className="grid grid-cols-5 gap-6 w-full">
                  {profile.services.map((service, index) => (
                    <div className="w-full bg-gray-800 rounded-xl flex flex-col items-center p-2 shadow-lg" key={`service-${index}`}>
                      <div className="flex items-center mb-2 h-[80%]">
                        <Image
                          className="mb-2"
                          src={service.icon}
                          alt={service.name}
                          width={50}
                          height={50}
                        />
                      </div>
                      <p className="font-normal text-sm">{service.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-h-[500px] w-full">
                <Accordion type="multiple" defaultValue={['WORK_EXPERIENCE']} className="w-full">

                  {/* certifications */}
                  {profile.certifications.length > 0 && (
                    <AccordionItem value="CERTIFICATIONS">
                      <AccordionTrigger>
                        <h1 className="font-bold text-2xl">Certifications</h1>
                      </AccordionTrigger>
                      <AccordionContent>
                        {profile.certifications.map((cert, index) => (
                          <CertificationCard certification={cert} key={`certification-${index}`} />
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  )}

                  {/* education */}
                  <AccordionItem value="EDUCATION_HISTORY">
                    <AccordionTrigger>
                      <h1 className="font-bold text-2xl">Education History</h1>
                    </AccordionTrigger>
                    <AccordionContent>
                      {profile.educationHistory.map((education, index) => (
                        <EducationCard
                          education={education}
                          key={`education-${index}`}
                        />
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  {/* work experience */}
                  <AccordionItem value="WORK_EXPERIENCE">
                    <AccordionTrigger>
                      <h1 className="font-bold text-2xl">Work experience</h1>
                    </AccordionTrigger>
                    <AccordionContent>
                      {profile.workExperience.map((work, index) => (
                        <WorkExperienceCard
                          workExperience={work}
                          key={`work-${index}`}
                        />
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

            </div>
          ) : <Skeleton className="col-span-6 w-full h-[500px] rounded-xl" />}

          {profile ? (
            <div className="col-span-3">
              <div className="flex flex-col">
                {/* tech stack */}
                <h1 className="font-bold text-2xl mb-4">Skills</h1>
                <Skills skills={profile.skills} />
              </div>
            </div>
          ) : <Skeleton className="col-span-3 w-full h-[500px] rounded-xl" />}
        </div>
      </div>
    </div>
  );
}
