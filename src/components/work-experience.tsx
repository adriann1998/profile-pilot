import React from 'react';
import { Badge } from '@/components/ui/badge';
import moment from 'moment';
import Image from 'next/image';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { CalendarIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { CircleCheckBig } from "lucide-react";
import { WorkExperience } from '@/types';

function WorkExperienceCard({
  workExperience,
}: WorkExperienceCardProps) {
  return (
    <div className="mb-8 w-full">
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-1'>
          <Image
            src={workExperience.companyLogoUrl}
            alt={`${workExperience.company} logo`}
            width={50}
            height={50}
            className="rounded-lg"
          />
        </div>
        <div className='col-span-11'>
          <div className='flex justify-between w-full'>
            <div className="flex flex-col mb-2">
              <span className="font-normal text-lg">{workExperience.title}</span>
              <span className="font-normal text-md text-gray-300 flex items-center gap-2">
                {workExperience.company}{' '}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InformationCircleIcon className="size-4 mr-4 cursor-pointer" color='white' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-gray-600 rounded-full text-white'>
                    <span className=''>{workExperience.companyDetails}</span>
                  </TooltipContent>
                </Tooltip>
              </span>
              <span className="font-normal text-md text-gray-300">{workExperience.location}</span>
            </div>
            <div className='flex flex-col items-end'>
              <Badge variant="outline" className="rounded-xl max-h-8 mb-1">{workTypePretty[workExperience.type]}</Badge>
              <span className="font-normal text-md text-gray-300 flex items-center">
                <CalendarIcon className="size-4 mr-2" />
                {moment(workExperience.startDate).format('MMM yyyy')} - {workExperience.endDate ? moment(workExperience.endDate).format('MMM yyyy') : 'Present'}
              </span>
            </div>
          </div>
          <span className='w-full'>
            {Array.isArray(workExperience.description) ? (
              workExperience.description.map((desc, index) => (
                <div className='flex items-center mb-1' key={`work-desc-${index}`}>
                  <CircleCheckBig className="h-4 w-4 mr-2" />
                  <p className="text-gray-400 italic">
                    {desc}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 mb-2 italic">
                {workExperience.description}
              </p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

interface WorkExperienceCardProps {
  workExperience: WorkExperience
}

const workTypePretty: Record<WorkExperience['type'], string> = {
  'FULL_TIME': 'Full Time',
  'PART_TIME': 'Part Time',
  'CONTRACT': 'Contract',
  'INTERNSHIP': 'Internship',
};

export default WorkExperienceCard;