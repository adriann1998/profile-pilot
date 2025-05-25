import React from 'react';
import { Badge } from '@/components/ui/badge';
import moment from 'moment';
import Image from 'next/image';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { CalendarIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { CircleCheckBig } from "lucide-react";

function WorkExperience({
  title,
  company,
  companyDetails,
  companyLogoUrl,
  location,
  startDate,
  endDate,
  description,
  type,
}: WorkExperienceProps) {
  return (
    <div className="mb-8 w-full">
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-1'>
          <Image
            src={companyLogoUrl}
            alt={`${company} logo`}
            width={50}
            height={50}
            className="rounded-lg"
          />
        </div>
        <div className='col-span-11'>
          <div className='flex justify-between w-full'>
            <div className="flex flex-col mb-2">
              <span className="font-normal text-lg">{title}</span>
              <span className="font-normal text-md text-gray-300 flex items-center gap-2">
                {company}{' '}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InformationCircleIcon className="size-4 mr-4 cursor-pointer" color='white' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-gray-600 rounded-full text-white'>
                    <span className=''>{companyDetails}</span>
                  </TooltipContent>
                </Tooltip>
              </span>
              <span className="font-normal text-md text-gray-300">{location}</span>
            </div>
            <div className='flex flex-col items-end'>
              <Badge variant="outline" className="rounded-xl max-h-8 mb-1">{workTypePretty[type]}</Badge>
              <span className="font-normal text-md text-gray-300 flex items-center">
                <CalendarIcon className="size-4 mr-2" />
                {moment(startDate).format('MMM yyyy')} - {endDate ? moment(endDate).format('MMM yyyy') : 'Present'}
              </span>
            </div>
          </div>
          <span className='w-full'>
            {Array.isArray(description) ? (
              description.map((desc, index) => (
                <div className='flex items-center mb-1' key={`work-desc-${index}`}>
                  <CircleCheckBig className="h-4 w-4 mr-2" />
                  <p className="text-gray-400 italic">
                    {desc}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 mb-2 italic">
                {description}
              </p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

interface WorkExperienceProps {
  title: string;
  company: string;
  companyDetails: string;
  companyLogoUrl: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string | string[];
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP';
}

const workTypePretty: Record<WorkExperienceProps['type'], string> = {
  'FULL_TIME': 'Full Time',
  'PART_TIME': 'Part Time',
  'CONTRACT': 'Contract',
  'INTERNSHIP': 'Internship',
};

export default WorkExperience;