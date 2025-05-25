import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import { Education } from '@/types';

function EducationCard({
  education,
}: EducationCardProps) {
  return (
    <div className="w-full bg-gray-800 rounded-xl p-4 shadow-lg mb-4">
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
  );
}

interface EducationCardProps {
  education: Education
}

export default EducationCard;