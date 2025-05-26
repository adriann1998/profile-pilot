import React from 'react';

export function IconedLink({
  text,
  icon,
  link,
} : IconedLinkProps) {
  return (
    <div
      className="flex justify-start pb-2 items-center border-gray-500 cursor-pointer link link-underline"
      onClick={() =>  window.open(link, '_blank')}
    >
      <span className="mr-2">
        {icon}
      </span>
      <p className="text-md">{text}</p>
    </div>
  );
}

interface IconedLinkProps {
  text: string;
  icon: React.ReactNode;
  link: string
}

export default IconedLink;