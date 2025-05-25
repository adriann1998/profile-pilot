import React from 'react';
import Image from 'next/image';
import { Certification } from '@/types';
import moment from 'moment';

function CertificationCard({
  certification,
}: CertificationProps) {
  return (
    <div className="w-full bg-gray-800 rounded-xl p-4 shadow-lg mb-4">
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
  );
}

interface CertificationProps {
  certification: Certification
}

export default CertificationCard;