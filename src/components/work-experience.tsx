import React from 'react';
import { Badge } from '@/components/ui/badge';
import moment from 'moment';
import Image from 'next/image';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { InformationCircleIcon, CalendarIcon } from '@heroicons/react/24/solid';

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
            <div className="flex flex-col mb-4">
              <span className="font-normal text-lg">{title}</span>
              <span className="font-normal text-md text-gray-300 flex gap-2">
                {company}{' '}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InformationCircleIcon className="size-6 mr-4 cursor-pointer" color='white' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>{companyDetails}</span>
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
            {description}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als
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
  description: string;
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP';
}

const workTypePretty: Record<WorkExperienceProps['type'], string> = {
  'FULL_TIME': 'Full Time',
  'PART_TIME': 'Part Time',
  'CONTRACT': 'Contract',
  'INTERNSHIP': 'Internship',
}

export default WorkExperience;