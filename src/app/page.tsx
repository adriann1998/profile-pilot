'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LanguageIcon
} from '@heroicons/react/24/solid';
import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Profile } from "@/types";

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

              {/* download CV */}
              {/* <div className="flex items-center justify-center gap-4 mb-12 w-full">
                <button
                  className="flex justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                  onClick={() => alert('Download CV')}
                >
                  <ArrowDownTrayIcon className="size-6 mr-2" />
                  <span className="text-xl">Download CV</span>
                </button>
              </div> */}

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
                        {profile.certifications.map((certification, index) => (
                          <div className="w-full bg-gray-800 rounded-xl p-4 shadow-lg mb-4" key={`certification-${index}`}>
                            <div className="grid grid-cols-12 gap-4 mb-2">
                              <div className="col-span-1">
                                <Image
                                  className="mr-4"
                                  src={certification.issuerLogo}
                                  alt={certification.issuer}
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <div className="col-span-10">
                                <p className="font-bold text-lg">{certification.name}</p>
                                <p className="text-sm italic">{certification.issuer}</p>
                                <p className="text-sm">Issued on: {moment(certification.issueDate).format('MMM yyyy')}</p>
                                {certification.expirationDate && (
                                  <p className="text-sm">Expires on: {moment(certification.expirationDate).format('MMM yyyy')}</p>
                                )}
                                <a
                                  href={certification.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:underline"
                                >
                                  View Credential
                                </a>
                              </div>
                            </div>
                          </div>
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
                        <div className="w-full bg-gray-800 rounded-xl p-4 shadow-lg mb-4" key={`education-${index}`}>
                          <div className="grid grid-cols-12 gap-4 mb-2">
                            <div className="col-span-1">
                              <Image
                                className="mr-4"
                                src={education.institutionLogo}
                                alt={education.institution}
                                width={50}
                                height={50}
                              />
                            </div>
                            <div className="col-span-10">
                              <p className="font-bold text-lg">{education.degree}</p>
                              <p className="text-sm italic">{education.institution}</p>
                              <p className="text-sm">From: {moment(education.startDate).format('MMM yyyy')}</p>
                              {education.endDate && (
                                <p className="text-sm">To: {moment(education.endDate).format('MMM yyyy')}</p>
                              )}
                              <p className="text-sm">{education.description}</p>
                            </div>
                          </div>
                        </div>
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
